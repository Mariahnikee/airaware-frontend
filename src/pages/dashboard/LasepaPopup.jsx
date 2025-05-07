import { useState, useEffect, useRef } from 'react'
import { LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import { X, Plus, Download } from 'lucide-react'

export default function AirQualityDashboard() {
  const [aqi, setAqi] = useState(156)
  const [pm25, setPm25] = useState(100.4)
  const [pm10, setPm10] = useState(143.9)
  const [no2, setNo2] = useState(19.4)
  const [o3, setO3] = useState(169)
  const [airQualityStatus, setAirQualityStatus] = useState('Unhealthy')
  const [statusColor, setStatusColor] = useState('#dc2f02')
  const [currentTip, setCurrentTip] = useState(0)
  const [trendsData, setTrendsData] = useState([])
  const [levelsData, setLevelsData] = useState([])
  const needleRef = useRef(null)

  // Safety tips based on AQI level
  const safetyTips = [
    "Keep your inhaler handy and avoid heavy traffic areas",
    "Wear a mask when going outside to reduce pollutant exposure",
    "Stay indoors and keep windows closed when AQI is high",
    "Use air purifiers indoors to reduce indoor pollution",
    "Monitor air quality before planning outdoor activities",
    "Limit outdoor exercise during high pollution periods",
    "Consider telecommuting when air quality is poor",
    "Stay hydrated to help your body process pollutants",
    "Avoid burning candles or incense indoors during poor air quality days",
    "Consider using public transportation to reduce overall emissions"
  ]

  // Utility functions
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const getRandomAQI = () => {
    // Weighted towards unhealthy values for dramatic effect
    const weights = [
      { range: [0, 50], weight: 5 },       // Good
      { range: [51, 100], weight: 15 },    // Moderate
      { range: [101, 150], weight: 35 },   // Unhealthy for Sensitive Groups
      { range: [151, 200], weight: 25 },   // Unhealthy
      { range: [201, 300], weight: 15 },   // Very Unhealthy
      { range: [301, 500], weight: 5 }     // Hazardous
    ]
    
    const totalWeight = weights.reduce((sum, item) => sum + item.weight, 0)
    let random = Math.random() * totalWeight
    
    for (const item of weights) {
      random -= item.weight
      if (random <= 0) {
        return getRandomNumber(item.range[0], item.range[1])
      }
    }
    
    return getRandomNumber(0, 500)
  }

  const getStatusByAQI = (aqi) => {
    if (aqi <= 50) return { text: 'Good', color: '#43aa8b' }
    else if (aqi <= 100) return { text: 'Moderate', color: '#ffba08' }
    else if (aqi <= 200) return { text: 'Unhealthy', color: '#dc2f02' }
    else if (aqi <= 300) return { text: 'Very Unhealthy', color: '#9d0208' }
    else return { text: 'Hazardous', color: '#6a040f' }
  }

  const updateNeedlePosition = (aqiValue) => {
    // Convert AQI to angle (0-180 degrees)
    // 0 AQI = 180 degrees (leftmost)
    // 500 AQI = 0 degrees (rightmost)
    if (needleRef.current) {
      const angle = 180 - (aqiValue / 500 * 180)
      needleRef.current.style.transform = `rotate(${angle}deg)`
    }
  }

  // Generate dates for last 7 days
  const generateDates = () => {
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - (6 - i))
      return `Mar ${date.getDate().toString().padStart(2, '0')}`
    })
  }
  
  const dates = generateDates()

  // Initialize dashboard with random data
  const initializeDashboard = () => {
    const initialTrendsData = []
    const initialLevelsData = []

    // Generate initial data for trends chart
    for (let i = 0; i < 7; i++) {
      const randomAqi = getRandomAQI()
      initialTrendsData.push({
        date: dates[i],
        value: randomAqi
      })

      // Generate initial data for levels chart
      const status = getStatusByAQI(randomAqi)
      initialLevelsData.push({
        date: dates[i],
        green: status.text === 'Good' ? randomAqi : 0,
        yellow: status.text === 'Moderate' ? randomAqi : 0, 
        orange: status.text === 'Unhealthy for Sensitive Groups' ? randomAqi : 0,
        red: (status.text === 'Unhealthy' || status.text === 'Very Unhealthy' || status.text === 'Hazardous') ? randomAqi : 0
      })
    }

    setTrendsData(initialTrendsData)
    setLevelsData(initialLevelsData)
  }

  // Update dashboard with new values
  const updateDashboard = () => {
    // Generate new AQI value
    const newAqi = getRandomAQI()
    const newPm25 = parseFloat((newAqi * 0.65).toFixed(1))
    const newPm10 = parseFloat((newAqi * 0.9 + getRandomNumber(-20, 20)).toFixed(1))
    const newNo2 = parseFloat((newAqi * 0.12 + getRandomNumber(-5, 10)).toFixed(1))
    const newO3 = parseFloat((newAqi * 1.1 + getRandomNumber(-10, 30)).toFixed(1))
    
    // Update state values
    setAqi(newAqi)
    setPm25(newPm25)
    setPm10(newPm10)
    setNo2(newNo2)
    setO3(newO3)
    
    // Update needle position
    updateNeedlePosition(newAqi)
    
    // Update status
    const status = getStatusByAQI(newAqi)
    setAirQualityStatus(status.text)
    setStatusColor(status.color)
    
    // Update random safety tip
    setCurrentTip(getRandomNumber(0, safetyTips.length - 1))
    
    // Update trends chart data
    setTrendsData(prevData => {
      const newData = [...prevData]
      newData.shift() // Remove first element
      
      // Add new data point
      newData.push({
        date: dates[dates.length - 1],
        value: newAqi
      })
      
      return newData
    })
    
    // Update levels chart data
    setLevelsData(prevData => {
      const newData = [...prevData]
      newData.shift() // Remove first element
      
      const newStatus = getStatusByAQI(newAqi)
      
      // Add new data point
      newData.push({
        date: dates[dates.length - 1],
        green: newStatus.text === 'Good' ? newAqi : 0,
        yellow: newStatus.text === 'Moderate' ? newAqi : 0,
        orange: newStatus.text === 'Unhealthy for Sensitive Groups' ? newAqi : 0,
        red: (newStatus.text === 'Unhealthy' || newStatus.text === 'Very Unhealthy' || newStatus.text === 'Hazardous') ? newAqi : 0
      })
      
      return newData
    })
  }

  // Initialize dashboard on component mount
  useEffect(() => {
    initializeDashboard()
    
    // Set initial needle position
    updateNeedlePosition(aqi)
    
    // Update dashboard every 5 seconds
    const interval = setInterval(updateDashboard, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex justify-between items-center mb-5">
          <div className="relative">
            <button className="bg-[#fafafa] border border-gray-200 px-4 py-2 rounded-3xl flex items-center font-medium">
              Daily <span className="ml-2">▼</span>
            </button>
          </div>
          
          <div className="flex gap-3">
            <button className="flex h-[44px] px-4 py-3 justify-center items-center gap-2 rounded border border-[#D3E2EC] text-[#1E4866] text-center font-inter text-sm font-medium leading-[21px]">
              <Plus size={18} className="mr-1" /> Add Location
            </button>
            <button className="flex bg-[#1E4866] h-[44px] px-4 py-3 justify-center items-center gap-2 rounded border text-[#ffff] text-center font-inter text-sm font-medium leading-[21px]">
              <Download size={18} className="mr-1" /> Download Data
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {/* AQI Card */}
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div 
              className="inline-block py-1 px-2 rounded-full text-[14px] font-bold text-white mb-3"
              style={{ backgroundColor: statusColor }}
            >
              {airQualityStatus}
            </div>
            <div className="text-[#262626] text-center font-inter text-lg font-medium leading-[27px]">
              <div>Lagos</div>
              <div>Nigeria</div>
            </div>
            
            {/* AQI Gauge */}
            <div className="relative w-48 h-24 mx-auto my-3">
              <div className="absolute top-0 left-0 w-full h-full rounded-t-full overflow-hidden"
                style={{ 
                  background: 'conic-gradient(from 180deg, #d00000 0deg 36deg, #dc2f02 36deg 72deg, #e85d04 72deg 108deg, #ffba08 108deg 144deg, #43aa8b 144deg 180deg)'
                }}
              >
                <div className="absolute top-5 left-5 right-5 bottom-0 bg-white rounded-t-full"></div>
              </div>
              <div 
                ref={needleRef}
                className="absolute bottom-0 left-1/2 w-0.5 h-20 bg-gray-800 origin-bottom"
                style={{ transform: 'rotate(90deg)' }}
              ></div>
            </div>
            
            <div className="text-5xl font-bold my-2">{aqi}</div>
            <div className="text-lg text-[#265B80]">AQI</div>
          </div>

          {/* Pollutants Card */}
          <div className="bg-white rounded-lg shadow py-8 px-4 flex flex-col ">
            <h2 className="text-[#0A0A0A] font-inter text-[22px] font-medium leading-[27.5px] mb-4">Pollutants</h2>
            
            <div className="mb-3 rounded-[2px]   bg-[#FAFAFA] py-2 px-2 ">
              <div className="flex justify-between items-center mb-1
              
              ">
                <span className="text-[#262626] font-inter text-xs font-normal leading-[18px]">PM2.5 μg/m3</span>
                <span className="font-bold">{pm25}</span>
              </div>
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div 
                  className="h-full bg-red-500" 
                  style={{ width: `${Math.min(pm25 / 2, 100)}%` }}
                ></div>
              </div>
            </div>
            
            <div className="mb-3 rounded-[2px]   bg-[#FAFAFA] py-2 px-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[#262626] font-inter text-xs font-normal leading-[18px]">PM10 μg/m3</span>
                <span className="font-bold">{pm10}</span>
              </div>
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div 
                  className="h-full bg-orange-500" 
                  style={{ width: `${Math.min(pm10 / 3, 100)}%` }}
                ></div>
              </div>
            </div>
            
            <div className="mb-3 rounded-[2px]   bg-[#FAFAFA] py-2 px-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[#262626] font-inter text-xs font-normal leading-[18px]">NO2 μg/m3</span>
                <span className="font-bold">{no2}</span>
              </div>
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div 
                  className="h-full bg-yellow-500" 
                  style={{ width: `${Math.min(no2, 100)}%` }}
                ></div>
              </div>
            </div>
            
            <div className="mb-3 rounded-[2px]   bg-[#FAFAFA] py-2 px-2 ">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[#262626] font-inter text-xs font-normal leading-[18px]">O3 μg/m3</span>
                <span className="font-bold">{o3}</span>
              </div>
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div 
                  className="h-full bg-red-500" 
                  style={{ width: `${Math.min(o3 / 3, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Tips Card */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-[#0A0A0A] font-inter text-[22px] font-medium leading-[27.5px] mb-4 ">Stay Safe tips</h2>
            
            <div className=" p-3 rounded flex items-center mb-3">
              <div className="w-6  bg-yellow-300 rounded-full flex items-center justify-center mr-3 flex-shrink-0">!</div>
              <div className="text-[#262626] font-inter font-normal leading-[18px]">Keep your inhaler handy and avoid heavy traffic areas</div>
            </div>
            
            <div className=" p-3 rounded flex items-center mb-3">
              <div className="w-6 bg-yellow-300 rounded-full flex items-center justify-center mr-3 flex-shrink-0">!</div>
              <div className="text-[#262626] font-inter font-normal leading-[18px]">Avoid outdoor activities, especially strenuous exercises like jogging.</div>
            </div>
            
            <div className=" p-3 rounded flex items-center">
              <div className="w-6  bg-yellow-300 rounded-full flex items-center justify-center mr-3 flex-shrink-0">!</div>
              <div className="text-[#262626] font-inter font-normal leading-[18px]">{safetyTips[currentTip]}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Trends Chart */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-[#0A0A0A] font-inter text-[22px] font-medium leading-[27.5px] mb-4">Air Pollution Trends</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendsData}>
                  <CartesianGrid strokeDasharray="5 5" vertical={false} />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 400]} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#0077b6" 
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#0077b6" }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Levels Chart */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-[#0A0A0A] font-inter text-[22px] font-medium leading-[27.5px] mb-4">Air Pollution Levels</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={levelsData}>
                  <CartesianGrid strokeDasharray="5 5" vertical={false} />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 400]} />
                  <Bar dataKey="green" stackId="a" fill="#43aa8b" />
                  <Bar dataKey="yellow" stackId="a" fill="#ffba08" />
                  <Bar dataKey="orange" stackId="a" fill="#e85d04" />
                  <Bar dataKey="red" stackId="a" fill="#dc2f02" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}