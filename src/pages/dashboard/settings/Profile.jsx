import { useState } from 'react';
import { Settings, Home, Compass, Search, Bell, User } from 'lucide-react';

export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState('My Profile');
  const [gender, setGender] = useState('Male');
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#FAFAFA]">
     
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation - Modified to span full width */}
        <header className="w-full h-16 bg-[#FAFAFA] flex items-center justify-between px-6 shadow-sm">
          <div className="flex items-center">
            <Settings size={24} />
            <h1 className="ml-2 text-[28px] font-[500] text-[#525252]"> Account Settings</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search size={18} />
            </button>
            
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell size={18} />
            </button>
            
            <button className="h-8 w-8 rounded-full hover:bg-gray-100 ">
              <img src="/images/profilepic.png" alt="profile picture" className="h-8 w-8 rounded-full" />
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {/* Personal Information Section */}
          <section className="bg-white rounded-lg shadow-sm mb-6 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-1">Personal Information</h2>
            <p className="text-sm text-gray-500 mb-6">Update your photo and personal details.</p>
            
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/profilepic.png" 
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <button className="ml-5 bg-white px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Change avatar
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  defaultValue="Isa"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  defaultValue="Habeeb"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="isahabeeb@gmail.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-[#265B80] focus:border-[#265B80] "
                    onClick={() => setIsGenderDropdownOpen(!isGenderDropdownOpen)}
                  >
                    <span className="block truncate">{gender}</span>
                    
                  </button>
                  
                  {isGenderDropdownOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1">
                      {['Male', 'Female', 'Other', 'Prefer not to say'].map((option) => (
                        <button
                          key={option}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => {
                            setGender(option);
                            setIsGenderDropdownOpen(false);
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City/Region
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#265B80] focus:border-[#265B80] "
                />
              </div>
              <div>
                <label htmlFor="postal" className="block text-sm font-medium text-gray-700 mb-1">
                  Postal code
                </label>
                <input
                  type="text"
                  id="postal"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#265B80]  focus:border-[#265B80] "
                />
              </div>
            </div>
          </section>

         
          <section className="bg-white rounded-lg shadow-sm mb-6 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-1">Password</h2>
            <p className="text-sm text-gray-500 mb-6">Enter your current password to change your password.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Current password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  defaultValue="********"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  New password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm new password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </section>

          <div className="flex justify-end space-x-3">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-[#265B80]  bg-white hover:bg-gray-50">
              Cancel
            </button>
            <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#265B80]  hover:bg-[#265B80] ">
              Save changes
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}