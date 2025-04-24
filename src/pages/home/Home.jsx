import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import './Home.css'

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
      <section className="hero top-section">
        <div className="container flex mx-auto pt-12 px-80 pb-20 flex-col w-full max-w-  [1440px] justify-end items-center gap-8">
          <div className="flex flex-col item-center gap-8 self-stretch ">
            <h1 className="self-stretch text-[#1E4866] text-center font-poppins text-[56px] font-semibold leading-tight">
              Air Pollution is Invisible. We <br></br>Make it{" "}
              <span className="text-[#88C6A1]">Visible.</span>
            </h1>
            <p className="self-stretch text-[#265B80] text-center font-inter font-[400]leading-tight">
              The air you breathe affects your well-being more than you think.
              Air Aware helps you stay <br></br> informed with real-time air
              quality updates, personalized health alerts, and expert <br></br>
              recommendations so you can make safer choices for yourself and
              your loved ones
            </p>
            <div className="flex justify-center gap-8">
              <button className="bg-[#265B80] h-14 text-white py-2.5 px-8 justify-center items-center gap-2  rounded-lg hover:bg-blue-700">
                Get Started
              </button>
              <button className="border border-[#265B80] border-opacity-100 h-14 text-[#265B80] py-2.5 px-8 justify-center items-center gap-2  rounded-lg hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>

          <div className="w-full max-w-[778px] h-[503px] bg-lightgray bg-center bg-cover bg-no-repeat ">
            <img src="../images/dashboard.png" alt="Dashboard Preview"/>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="flex flex-col justify-center items-center gap-8 mx-auto py-20 px-[128px]">
          <div className="flex justify-center items-end gap-16 self-stretch">
            <h2 className="flex-1 text-[#265B80] font-poppins text-4xl font-[600] leading-[48px]">
              A simple and seamless <br></br>experience
            </h2>
            <div className="flex flex-col justify-center gap-4 self-stretch">
              <p className="text-[#1E4866] font-inter text-[18px]">
                Stay informed, protect your health, and make better decisions{" "}
                <br></br>with the Air Aware dashboard.
              </p>
              <p className="text-[#88C6A1] font-poppins text-[18px] font-semibold">
                How does it works?
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 self-stretch">
            <div className="bg-[#F2FAFF] flex gap-3 flex-col p-4 self-stretch flex-1">
              <span className="font-poppins text-[#88C6A1] self-stretch text-3xl font-semibold">
                01
              </span>
              <h3 className="text-[18px] font-semibold text-[#265B80] ">
                Get Instant Air Quality Updates
              </h3>
              <p className="text-[#1E4866] font-inter leading-[24px]">
                Air Aware provides real-time air quality data based on your
                location. Simply enter your city or enable GPS, and get accurate
                insights into pollutants like PM2.5, CO2, and more.
              </p>
            </div>

            <div className="bg-[#F9FFFB] flex gap-3 flex-col p-4 self-stretch flex-1">
              <span className="font-poppins text-[#88C6A1] self-stretch text-3xl font-semibold">
                01
              </span>
              <h3 className="text-[18px] font-semibold text-[#265B80] ">
                Get Personalized Health Insights
              </h3>
              <p className="text-[#1E4866] font-inter leading-[24px]">
                Our smart system translates complex air quality data into
                easy-to-understand health insights. Whether you have allergies,
                asthma, or other sensitivities, receive tailored advice to
                protect your well-being.
              </p>
            </div>

            <div className="bg-[#FFFEF0] flex gap-3 flex-col p-4 self-stretch flex-1 ">
              <span className="font-poppins text-[#88C6A1] self-stretch text-3xl font-semibold">
                01
              </span>
              <h3 className="text-[18px] font-semibold text-[#265B80] ">
                Stay Alert & Take Action
              </h3>
              <p className="text-[#1E4866] font-inter leading-[24px]">
                Set up custom notifications for air quality changes in your
                area. Get proactive health recommendations, learn when to wear a
                mask, use an air purifier, or limit outdoor activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="real-time-air bg-white">
        <div className="flex py-20 px-[128px] items-center gap-8">
          <div className="flex max-w-[576px] flex-col items-start gap-8 shrink-0">
            <span className="bg-[#88C6A1] text-white rounded-3xl py-1 px-6 items-center justify-center  ">
              Features
            </span>
            <h2 className="text-[40px] font-semibold self-stretch text-[#265B80] font-poppins">
              Real-Time Air Quality Monitoring
            </h2>
            <p className="text-[#1E4866] self-start ">
              Get instant air quality reports for your location. Whether at
              home, work, or traveling, Air Aware provides live AQI data,
              pollution levels, and weather conditions, helping you make
              informed decisions for a healthier life.
            </p>
          </div>

          <div
            className="w-[886px] h-[610px] flex-shrink-0 bg-[#F8FAFC] rounded-3xl
            "
          >
            <img
              src="../images/realtimeair.png"
              alt="Air Quality Map"
              className="w-[886px] h-[573px] shrink-0 aspect-[886/573] bg-lightgray bg-center bg-cover bg-no-repeat"
            />
          </div>
        </div>
      </section>

      <section className="health-alerts">
        <div className="flex flex-col py-20 px-[229px] items-center gap-8">
          <div className="flex flex-col justify-center items-center gap-8 ">
            <span className="bg-[#88C6A1] text-white rounded-3xl py-1 px-6 items-center justify-center ">
              Feature
            </span>
            <h2 className="text-[40px] font-semibold text-center self-stretch text-[#265B80] font-poppins">
              Stay Safe with Personalized Health Alerts
            </h2>
            <p className="text-[#1E4866] self-start">
              Air Aware doesn’t just show you air quality data it helps you act
              on it. Receive tailored health alerts based on <br></br>pollution
              levels, your location, and personal health conditions like asthma
              or allergies.
            </p>
          </div>

          <div className="w-[982px] h-[604px] flex-shrink-0 bg-[#F8FAFC] rounded-3xl">
            <img
              src="../images/healthalert.png"
              alt="Health Analytics Dashboard"
              className="w-[919px] h-[543px] shrink-0 aspect-[919/543] bg-lightgray bg-center bg-cover bg-no-repeat"
            />
          </div>
        </div>
      </section>

      <section className="pollupop py-16">
        <div className="flex py-20 px-[128px] items-center justify-end gap-8">
          <div
            className="w-[888px] h-[610px] flex-shrink-0 bg-[#F8FAFC] rounded-3xl
            "
          >
            <img
              src="../images/pollupop.png"
              alt="Air Quality Map"
              className="w-[846px] h-[547px] shrink-0 aspect-[846/547] bg-lightgray bg-cover bg-no-repeat"
            />
          </div>

          <div className="flex w-[576px] flex-col items-start gap-8 shrink-0">
            <span className="bg-[#88C6A1] text-white rounded-3xl py-1 px-6 items-center justify-center  ">
              Features
            </span>
            <h2 className="text-[40px] font-semibold self-stretch text-[#265B80] font-poppins">
              Learn About Air Quality the Fun Way
            </h2>
            <p className="text-[#1E4866] self-stretch ">
              Pollution awareness doesn’t have to be boring! Play the Pollipop
              game an engaging way to learn about different air pollutants,
              their sources, and how to avoid them. Test your knowledge and
              challenge friends!
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials overflow-hidden">
  <div className="flex py-4 px-0 flex-col items-center gap-14">
    <div className="flex flex-col items-center gap-8 self-stretch">
      <span className="bg-[#88C6A1] text-white rounded-3xl py-1 px-6 items-center justify-center">
        Testimonials
      </span>
      <h2 className="text-[40px] text-center font-semibold self-stretch text-[#265B80] font-poppins">
        What our users are saying
      </h2>
      <p className="text-[#1E4866] text-center">
        Real stories from people who trust Air Aware for a healthier life.
      </p>
    </div>

    {/* Infinite scrolling container */}
    <div 
      className="w-full overflow-hidden" 
      id="testimonial-section"
    >
      <div 
        className="testimonial-slider flex items-center gap-8 animate-pause"
        style={{
          animation: 'scroll 30s linear infinite',
          width: 'fit-content'
        }}
        onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
      >
        {/* Testimonial 1 */}
        <div className="flex flex-col justify-between bg-[#F7F9FC] w-[400px] h-[260px] rounded-2xl border border-[#EEF2F7] p-5">
          <p className="w-[342px] h-[118px] text-[#1E4866]">
            Air Aware has completely changed how I manage my asthma. I used
            to have frequent attacks because I had no idea when air quality
            was bad. Now, I get real-time updates and health
            recommendations, helping me avoid triggers. It's a lifesaver!
          </p>
          <div>
            <p className="font-medium text-[#265B80] font-poppins">
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
        <div className="flex flex-col justify-between bg-[#F7F9FC] w-[400px] h-[260px] rounded-2xl border border-[#EEF2F7] p-5">
          <p className="w-[342px] h-[118px] text-[#1E4866]">
            As a mother, I worry about my kids breathing polluted air. With
            Air Aware, I can check air quality before letting them play
            outside. The alerts and tips give me peace of mind.
          </p>
          <div>
            <p className="font-medium text-[#265B80] font-poppins">
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
        <div className="flex flex-col justify-between bg-[#F7F9FC] w-[400px] h-[260px] rounded-2xl border border-[#EEF2F7] p-5">
          <p className="w-[342px] h-[118px] text-[#1E4866]">
            I work in construction, and air pollution is a constant
            challenge. Air Aware helps me plan my workdays by alerting me
            when air quality is poor. I even got a high-quality face mask
            from their shop. Highly recommend it!
          </p>
          <div>
            <p className="font-medium text-[#265B80] font-poppins">
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
        <div className="flex flex-col justify-between bg-[#F7F9FC] w-[400px] h-[260px] rounded-2xl border border-[#EEF2F7] p-5">
          <p className="w-[342px] h-[118px] text-[#1E4866]">
            As someone with asthma, I used to struggle with sudden attacks
            due to poor air quality. Air Aware alerts me when the air is
            unsafe, helping me avoid triggers and breathe easier. It has
            truly improved my daily life!
          </p>
          <div>
            <p className="font-medium text-[#265B80] font-poppins">
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

        {/* Duplicate testimonials for seamless scrolling */}
        {/* Testimonial 1 (duplicate) */}
        <div className="flex flex-col justify-between bg-[#F7F9FC] w-[400px] h-[260px] rounded-2xl border border-[#EEF2F7] p-5">
          <p className="w-[342px] h-[118px] text-[#1E4866]">
            Air Aware has completely changed how I manage my asthma. I used
            to have frequent attacks because I had no idea when air quality
            was bad. Now, I get real-time updates and health
            recommendations, helping me avoid triggers. It's a lifesaver!
          </p>
          <div>
            <p className="font-medium text-[#265B80] font-poppins">
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

        {/* Testimonial 2 (duplicate) */}
        <div className="flex flex-col justify-between bg-[#F7F9FC] w-[400px] h-[260px] rounded-2xl border border-[#EEF2F7] p-5">
          <p className="w-[342px] h-[118px] text-[#1E4866]">
            As a mother, I worry about my kids breathing polluted air. With
            Air Aware, I can check air quality before letting them play
            outside. The alerts and tips give me peace of mind.
          </p>
          <div>
            <p className="font-medium text-[#265B80] font-poppins">
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
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-1672px); /* Width of 4 testimonials + 3 gaps (400px*4 + 8px*3) */
      }
    }
    
    /* Intersection Observer to start animation when scrolled into view */
    .animate-pause {
      animation-play-state: paused;
    }
  `}</style>

  <script dangerouslySetInnerHTML={{
    __html: `
      document.addEventListener('DOMContentLoaded', function() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            const slider = entry.target.querySelector('.testimonial-slider');
            if (entry.isIntersecting) {
              slider.style.animationPlayState = 'running';
            } else {
              slider.style.animationPlayState = 'paused';
            }
          });
        }, { threshold: 0.2 });
        
        const testimonialSection = document.getElementById('testimonial-section');
        if (testimonialSection) {
          observer.observe(testimonialSection);
        }
      });
    `
  }} />
</section>

      <section className="faq">
        <div className="flex py-20 px-[128px] flex-col items-center gap-8">
          <h2 className="text-[40px] text-center font-semibold self-stretch text-[#265B80] font-poppins">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl w-full mx-auto">
            {/* FAQ Item 1 */}
            <div className="bg-[#F8FAFC] py-4 mb-2 rounded-lg">
              <button
                onClick={() => toggleFAQ("faq1")}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-lg font-medium text-[#1E4866] px-5 flex-1">
                  Can I buy air quality products through Air Aware?
                </span>
                <span className="text-[#1E4866] px-5 text-xl min-w-[24px] flex justify-center">
                  {faqOpen.faq1 ? "-" : "+"}
                </span>
              </button>
              {faqOpen.faq1 && (
                <div className="mt-4">
                  <p className="text-[#1E4866] px-5">
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
                <span className="text-lg font-medium text-[#1E4866] px-5 flex-1">
                  What is Air Aware for?
                </span>
                <span className="text-[#1E4866] px-5 text-xl min-w-[24px] flex justify-center">
                  {faqOpen.faq2 ? "-" : "+"}
                </span>
              </button>
              {faqOpen.faq2 && (
                <div className="mt-4">
                  <p className="text-[#1E4866] px-5">
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
                <span className="text-lg font-medium text-[#1E4866] px-5 flex-1">
                  Can I track air quality in multiple locations?
                </span>
                <span className="text-[#1E4866] px-5 text-xl min-w-[24px] flex justify-center">
                  {faqOpen.faq3 ? "-" : "+"}
                </span>
              </button>
              {faqOpen.faq3 && (
                <div className="mt-4">
                  <p className="text-[#1E4866] px-5">
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
                <span className="text-lg font-medium text-[#1E4866] px-5 flex-1">
                  How can I support victims of air pollution?
                </span>
                <span className="text-[#1E4866] px-5 text-xl min-w-[24px] flex justify-center">
                  {faqOpen.faq4 ? "-" : "+"}
                </span>
              </button>
              {faqOpen.faq4 && (
                <div className="mt-4">
                  <p className="text-[#1E4866] px-5">
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
