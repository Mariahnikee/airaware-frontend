import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

function Home() {
  const [faqOpen, setFaqOpen] = useState({});

  const toggleFAQ = (id) => {
    setFaqOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero top-section">
        <div className="container mx-auto py-8 md:py-12 px-4 md:px-8 lg:px-20 flex flex-col w-full justify-end items-center gap-6 md:gap-8">
          <div className="flex flex-col items-center gap-4 md:gap-8 self-stretch">
            <h1 className="self-stretch text-[#1E4866] text-center font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Air Pollution is Invisible. We Make it{" "}
              <span className="text-[#88C6A1]">Visible.</span>
            </h1>
            <p className="self-stretch text-[#265B80] text-center font-inter font-normal text-sm md:text-base leading-tight px-2">
              The air you breathe affects your well-being more than you think.
              Air Aware helps you stay informed with real-time air quality
              updates, personalized health alerts, and expert recommendations so
              you can make safer choices for yourself and your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 w-full px-4">
              <button className="bg-[#265B80] h-12 text-white py-2 px-6 justify-center items-center gap-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto">
                <Link to="/signup">Get Started</Link>
              </button>
              <button className="border border-[#265B80] h-12 text-[#265B80] py-2 px-6 justify-center items-center gap-2 rounded-lg hover:bg-gray-100 w-full sm:w-auto">
                <Link to="/how-it-works">Learn More</Link>
              </button>
            </div>
          </div>

          <div className="w-full max-w-[778px] h-auto">
            <img
              src="../images/dashboard.png"
              alt="Dashboard Preview"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="flex flex-col justify-center items-center gap-8 mx-auto py-4 md:py-20 px-4 md:px-8 lg:px-20">
          <div className="flex flex-col md:flex-row justify-center md:items-end gap-6 md:gap-16 self-stretch">
            <h2 className="flex-1 text-[#265B80] font-poppins text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
              A simple and seamless experience
            </h2>
            <div className="flex flex-col justify-center gap-4 self-stretch">
              <p className="text-[#1E4866] font-inter text-sm md:text-base">
                Stay informed, protect your health, and make better decisions
                with the Air Aware dashboard.
              </p>
              <p className="text-[#88C6A1] font-poppins text-base md:text-lg font-semibold">
                How does it work?
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 self-stretch">
            <div className="bg-[#F2FAFF] flex gap-3 flex-col p-4 self-stretch flex-1 rounded-lg">
              <span className="font-poppins text-[#88C6A1] self-stretch text-2xl md:text-3xl font-semibold">
                01
              </span>
              <h3 className="text-base md:text-lg font-semibold text-[#265B80]">
                Get Instant Air Quality Updates
              </h3>
              <p className="text-[#1E4866] font-inter text-sm md:text-base leading-relaxed">
                Air Aware provides real-time air quality data based on your
                location. Simply enter your city or enable GPS, and get accurate
                insights into pollutants like PM2.5, CO2, and more.
              </p>
            </div>

            <div className="bg-[#F9FFFB] flex gap-3 flex-col p-4 self-stretch flex-1 rounded-lg">
              <span className="font-poppins text-[#88C6A1] self-stretch text-2xl md:text-3xl font-semibold">
                02
              </span>
              <h3 className="text-base md:text-lg font-semibold text-[#265B80]">
                Get Personalized Health Insights
              </h3>
              <p className="text-[#1E4866] font-inter text-sm md:text-base leading-relaxed">
                Our smart system translates complex air quality data into
                easy-to-understand health insights. Whether you have allergies,
                asthma, or other sensitivities, receive tailored advice to
                protect your well-being.
              </p>
            </div>

            <div className="bg-[#FFFEF0] flex gap-3 flex-col p-4 self-stretch flex-1 rounded-lg">
              <span className="font-poppins text-[#88C6A1] self-stretch text-2xl md:text-3xl font-semibold">
                03
              </span>
              <h3 className="text-base md:text-lg font-semibold text-[#265B80]">
                Stay Alert & Take Action
              </h3>
              <p className="text-[#1E4866] font-inter text-sm md:text-base leading-relaxed">
                Set up custom notifications for air quality changes in your
                area. Get proactive health recommendations, learn when to wear a
                mask, use an air purifier, or limit outdoor activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Air Quality Section */}
      <section className="real-time-air bg-white relative overflow-hidden my:0 md:my-10 md:py-25 ">
        <div className="flex flex-col md:flex-row py-4 md:py-20 mt-14 px-4 md:px-8 lg:px-20 items-center gap-8 relative z-10">
          <div className="flex w-full md:max-w-[576px] flex-col items-start gap-6 md:gap-8">
            <span className="bg-[#88C6A1] text-white rounded-3xl py-1 px-4 md:px-6 text-sm items-center justify-center">
              Features
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold self-stretch text-[#265B80] font-poppins">
              Real-Time Air Quality Monitoring
            </h2>
            <p className="text-[#1E4866] self-start text-sm md:text-base">
              Get instant air quality reports for your location. Whether at
              home, work, or traveling, Air Aware provides live AQI data,
              pollution levels, and weather conditions, helping you make
              informed decisions for a healthier life.
            </p>
          </div>

          {/* This empty div maintains the layout spacing */}
          <div className="hidden md:block w-full md:w-[60%] lg:w-[50%]"></div>
        </div>

        {/* Absolutely positioned image that extends to the left edge */}
        <div className="md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full md:w-[65%] lg:w-[55%] h-auto bg-[#F8FAFC] rounded-xl md:rounded-l-3xl md:rounded-r-none overflow-hidden">
          <img
            src="../images/realtimeair.png"
            alt="Air Quality Map"
            className="w-full h-auto aspect-auto object-cover"
          />
        </div>
      </section>

      {/* Health Alerts Section */}
      <section className="health-alerts">
        <div className="flex flex-col py-12 md:py-2 px-4 md:px-8 lg:px-2 items-center gap-8">
          <div className="flex flex-col justify-center items-center gap-6 md:gap-8">
            <span className="bg-[#88C6A1] text-white rounded-3xl py-1 px-4 md:px-6 text-sm items-center justify-center">
              Feature
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center self-stretch text-[#265B80] font-poppins">
              Stay Safe with Personalized Health Alerts
            </h2>
            <p className="self-stretch text-[#265B80] text-center font-inter font-normal text-sm md:text-base leading-tight px-2">
              Air Aware doesn't just show you air quality data, it helps you
              act on it. Receive tailored health alerts based on pollution
              levels, your location, and personal health conditions like asthma
              or allergies.
            </p>
          </div>

          <div className="w-full max-w-[982px] h-auto bg-[#F8FAFC] rounded-xl md:rounded-3xl overflow-hidden">
            <img
              src="../images/healthalert.png"
              alt="Health Analytics Dashboard"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Pollupop Section */}
      <section className="pollupop relative overflow-hidden my-12 md:py-16">
  {/* Image container - modified for better mobile display */}
  <div className="absolute inset-y-0 left-0 w-full md:w-[65vw] lg:w-[55vw] z-0">
    <div className="relative md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full h-64 md:h-full bg-[#F8FAFC] rounded-r-3xl overflow-hidden">
      <img
        src="../images/pollupop.png"
        alt="Pollipop Game"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
  
  {/* Content Wrapper */}
  <div className="relative z-10 flex flex-col md:flex-row py-12 pt-72 md:pt-12 md:py-20 px-4 md:px-8 lg:px-20 items-center gap-8">
    {/* Spacer to accommodate image */}
    <div className="hidden md:block w-full md:w-[60%] lg:w-[50%]"></div>

    {/* Text Content */}
    <div className="flex w-full md:max-w-[576px] flex-col items-start ml-0 md:ml-30 gap-4 md:gap-8">
      <span className="bg-[#88C6A1] text-white rounded-3xl py-1 px-4 md:px-6 text-sm items-center justify-center">
        Features
      </span>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold self-stretch text-[#265B80] font-poppins">
        Learn About Air Quality the Fun Way
      </h2>
      <p className="text-[#1E4866] self-stretch text-sm md:text-base">
        Pollution awareness doesn't have to be boring! Play the Pollipop
        game — an engaging way to learn about different air pollutants,
        their sources, and how to avoid them. Test your knowledge and
        challenge friends!
      </p>
    </div>
  </div>
  </section>

     {/* Testimonials Section */}
     <section className="testimonials overflow-hidden mt-20">
        <div className="flex py-4 px-0 flex-col items-center gap-8 md:gap-14">
          <div className="flex flex-col items-center gap-4 md:gap-8 self-stretch px-4">
            <span className="bg-[#88C6A1] text-white rounded-3xl py-1 px-4 md:px-6 text-sm items-center justify-center">
              Testimonials
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold self-stretch text-[#265B80] font-poppins">
              What our users are saying
            </h2>
            <p className="text-[#1E4866] text-center text-sm md:text-base">
              Real stories from people who trust Air Aware for a healthier life.
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="w-full overflow-hidden px-4" id="testimonial-section">
            <div
              className="testimonial-slider flex items-center gap-4 md:gap-8 snap-x snap-mandatory overflow-x-auto md:overflow-hidden pb-4 md:pb-0"
              style={{
                scrollbarWidth: "none", // For Firefox
                scrollBehavior: "smooth",
              }}
            >
              {/* Testimonial 1 */}
              <div className="flex flex-col justify-between bg-[#F7F9FC] min-w-[80%] sm:min-w-[300px] md:w-[400px] h-auto md:h-[260px] rounded-2xl border border-[#EEF2F7] p-4 md:p-5 snap-start">
                <p className="text-[#1E4866] text-sm md:text-base">
                  Air Aware has completely changed how I manage my asthma. I
                  used to have frequent attacks because I had no idea when air
                  quality was bad. Now, I get real-time updates and health
                  recommendations, helping me avoid triggers. It's a lifesaver!
                </p>
                <div className="mt-4">
                  <p className="font-medium text-[#265B80] font-poppins text-sm md:text-base">
                    Perculiar., Abuja, Nigeria
                  </p>
                  <p className="text-sm text-[#FFD23F]">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col justify-between bg-[#F7F9FC] min-w-[80%] sm:min-w-[300px] md:w-[400px] h-auto md:h-[260px] rounded-2xl border border-[#EEF2F7] p-4 md:p-5 snap-start">
                <p className="text-[#1E4866] text-sm md:text-base">
                  As a mother, I worry about my kids breathing polluted air.
                  With Air Aware, I can check air quality before letting them
                  play outside. The alerts and tips give me peace of mind.
                </p>
                <div className="mt-4">
                  <p className="font-medium text-[#265B80] font-poppins text-sm md:text-base">
                    Anneclaire., Lagos
                  </p>
                  <p className="text-sm text-[#FFD23F]">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex flex-col justify-between bg-[#F7F9FC] min-w-[80%] sm:min-w-[300px] md:w-[400px] h-auto md:h-[260px] rounded-2xl border border-[#EEF2F7] p-4 md:p-5 snap-start">
                <p className="text-[#1E4866] text-sm md:text-base">
                  I work in construction, and air pollution is a constant
                  challenge. Air Aware helps me plan my workdays by alerting me
                  when air quality is poor. I even got a high-quality face mask
                  from their shop. Highly recommend it!
                </p>
                <div className="mt-4">
                  <p className="font-medium text-[#265B80] font-poppins text-sm md:text-base">
                    Seyi K., Portharcort, Nigeria
                  </p>
                  <p className="text-sm text-[#FFD23F]">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfStroke} />
                  </p>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="flex flex-col justify-between bg-[#F7F9FC] min-w-[80%] sm:min-w-[300px] md:w-[400px] h-auto md:h-[260px] rounded-2xl border border-[#EEF2F7] p-4 md:p-5 snap-start">
                <p className="text-[#1E4866] text-sm md:text-base">
                  As someone with asthma, I used to struggle with sudden attacks
                  due to poor air quality. Air Aware alerts me when the air is
                  unsafe, helping me avoid triggers and breathe easier. It has
                  truly improved my daily life!
                </p>
                <div className="mt-4">
                  <p className="font-medium text-[#265B80] font-poppins text-sm md:text-base">
                    Ajibola O., Lagos, Nigeria
                  </p>
                  <p className="text-sm text-[#FFD23F]">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </p>
                </div>
              </div>

               {/* Testimonial 5 */}
              <div className="flex flex-col justify-between bg-[#F7F9FC] min-w-[80%] sm:min-w-[300px] md:w-[400px] h-auto md:h-[260px] rounded-2xl border border-[#EEF2F7] p-4 md:p-5 snap-start">
                <p className="text-[#1E4866] text-sm md:text-base">
                  Air Aware has completely changed how I manage my asthma. I
                  used to have frequent attacks because I had no idea when air
                  quality was bad. Now, I get real-time updates and health
                  recommendations, helping me avoid triggers. It's a lifesaver!
                </p>
                <div className="mt-4">
                  <p className="font-medium text-[#265B80] font-poppins text-sm md:text-base">
                    Perculiar., Abuja, Nigeria
                  </p>
                  <p className="text-sm text-[#FFD23F]">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </p>
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="flex flex-col justify-between bg-[#F7F9FC] min-w-[80%] sm:min-w-[300px] md:w-[400px] h-auto md:h-[260px] rounded-2xl border border-[#EEF2F7] p-4 md:p-5 snap-start">
                <p className="text-[#1E4866] text-sm md:text-base">
                  As a mother, I worry about my kids breathing polluted air.
                  With Air Aware, I can check air quality before letting them
                  play outside. The alerts and tips give me peace of mind.
                </p>
                <div className="mt-4">
                  <p className="font-medium text-[#265B80] font-poppins text-sm md:text-base">
                    Anneclaire., Lagos
                  </p>
                  <p className="text-sm text-[#FFD23F]">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </p>
                </div>
              </div>

              {/* Testimonial 7 */}
              <div className="flex flex-col justify-between bg-[#F7F9FC] min-w-[80%] sm:min-w-[300px] md:w-[400px] h-auto md:h-[260px] rounded-2xl border border-[#EEF2F7] p-4 md:p-5 snap-start">
                <p className="text-[#1E4866] text-sm md:text-base">
                  I work in construction, and air pollution is a constant
                  challenge. Air Aware helps me plan my workdays by alerting me
                  when air quality is poor. I even got a high-quality face mask
                  from their shop. Highly recommend it!
                </p>
                <div className="mt-4">
                  <p className="font-medium text-[#265B80] font-poppins text-sm md:text-base">
                    Seyi K., Portharcort, Nigeria
                  </p>
                  <p className="text-sm text-[#FFD23F]">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfStroke} />
                  </p>
                </div>
              </div>

              {/* Testimonial 8 */}
              <div className="flex flex-col justify-between bg-[#F7F9FC] min-w-[80%] sm:min-w-[300px] md:w-[400px] h-auto md:h-[260px] rounded-2xl border border-[#EEF2F7] p-4 md:p-5 snap-start">
                <p className="text-[#1E4866] text-sm md:text-base">
                  As someone with asthma, I used to struggle with sudden attacks
                  due to poor air quality. Air Aware alerts me when the air is
                  unsafe, helping me avoid triggers and breathe easier. It has
                  truly improved my daily life!
                </p>
                <div className="mt-4">
                  <p className="font-medium text-[#265B80] font-poppins text-sm md:text-base">
                    Ajibola O., Lagos, Nigeria
                  </p>
                  <p className="text-sm text-[#FFD23F]">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Testimonial navigation dots */}
          <div className="flex justify-center gap-2 pb-4">
            <button className="h-2 w-2 rounded-full bg-[#88C6A1]"></button>
            <button className="h-2 w-2 rounded-full bg-gray-300"></button>
            <button className="h-2 w-2 rounded-full bg-gray-300"></button>
            <button className="h-2 w-2 rounded-full bg-gray-300"></button>
          </div>
        </div>

        <style jsx>{`
  @media (min-width: 768px) {
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-400px * 6 - 2rem * 5)); /* Width of all testimonials + all gaps */
      }
    }

    .testimonial-slider {
      width: fit-content;
      display: flex;
      animation: scroll 35s linear infinite;
      will-change: transform;
    }

    .testimonial-slider:hover {
      animation-play-state: paused;
    }
  }

  /* Hide scrollbar */
  .testimonial-slider::-webkit-scrollbar {
    display: none;
  }
`}</style>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="flex py-12 md:py-20 px-4 md:px-8 lg:px-20 flex-col items-center gap-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold self-stretch text-[#265B80] font-poppins">
            Frequently Asked Questions
          </h2>
          <div className="w-full max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="bg-[#F8FAFC] py-4 mb-2 rounded-lg">
              <button
                onClick={() => toggleFAQ("faq1")}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-base md:text-lg font-medium text-[#1E4866] px-3 md:px-5 flex-1">
                  Can I buy air quality products through Air Aware?
                </span>
                <span className="text-[#1E4866] px-3 md:px-5 text-xl min-w-[24px] flex justify-center">
                  {faqOpen.faq1 ? "-" : "+"}
                </span>
              </button>
              {faqOpen.faq1 && (
                <div className="mt-4">
                  <p className="text-[#1E4866] px-3 md:px-5 text-sm md:text-base">
                    Yes, we offer a curated selection of air purifiers, masks,
                    and other air quality improvement products through our
                    marketplace.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-[#F8FAFC] py-4 mb-2 rounded-lg">
              <button
                onClick={() => toggleFAQ("faq2")}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-base md:text-lg font-medium text-[#1E4866] px-3 md:px-5 flex-1">
                  What is Air Aware for?
                </span>
                <span className="text-[#1E4866] px-3 md:px-5 text-xl min-w-[24px] flex justify-center">
                  {faqOpen.faq2 ? "-" : "+"}
                </span>
              </button>
              {faqOpen.faq2 && (
                <div className="mt-4">
                  <p className="text-[#1E4866] px-3 md:px-5 text-sm md:text-base">
                    Air Aware is a comprehensive platform for monitoring air
                    quality, receiving personalized health alerts, and learning
                    about air pollution and its effects on health.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-[#F8FAFC] py-4 mb-2 rounded-lg">
              <button
                onClick={() => toggleFAQ("faq3")}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-base md:text-lg font-medium text-[#1E4866] px-3 md:px-5 flex-1">
                  Can I track air quality in multiple locations?
                </span>
                <span className="text-[#1E4866] px-3 md:px-5 text-xl min-w-[24px] flex justify-center">
                  {faqOpen.faq3 ? "-" : "+"}
                </span>
              </button>
              {faqOpen.faq3 && (
                <div className="mt-4">
                  <p className="text-[#1E4866] px-3 md:px-5 text-sm md:text-base">
                    Yes, with an Air Aware account you can save and monitor
                    multiple locations such as your home, workplace, school, or
                    any other place important to you.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-[#F8FAFC] py-4 mb-2 rounded-lg">
              <button
                onClick={() => toggleFAQ("faq4")}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-base md:text-lg font-medium text-[#1E4866] px-3 md:px-5 flex-1">
                  How can I support victims of air pollution?
                </span>
                <span className="text-[#1E4866] px-3 md:px-5 text-xl min-w-[24px] flex justify-center">
                  {faqOpen.faq4 ? "-" : "+"}
                </span>
              </button>
              {faqOpen.faq4 && (
                <div className="mt-4">
                  <p className="text-[#1E4866] px-3 md:px-5 text-sm md:text-base">
                    For every Air Aware subscription, we donate a portion to
                    organizations fighting for clean air policies and supporting
                    communities affected by air pollution.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
