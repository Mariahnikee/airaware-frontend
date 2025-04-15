import React from 'react'

const Footer = () => {
  return (
         <footer className="bg-white">
        <div className="container p-10">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold text-[#1E4866] mb-4">Quick Links</h3>
              <ul className="space-y-2 text-[#1E4866]">
                <li>
                  <a href="#" className=" hover:text-blue-900">
                    Dashboard Features
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:text-blue-900">
                    Educational Articles
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:text-blue-900">
                    Shop Air Q
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:text-blue-900">
                    Support & Partnership
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-semibold text-[#1E4866] mb-4">Explore</h3>
              <ul className="space-y-2 text-[#1E4866]">
                <li>
                  <a href="#" className="hover:text-blue-900">
                    Air Quality Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-900">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-900">
                    Air Monitors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-900">
                    Air Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-semibold text-blue-900 mb-4">
                Partnership and Support
              </h3>
              <ul className="space-y-2 text-[#1E4866]">
                <li>
                  <a href="#" className="hover:text-blue-900">
                    Become a Partner
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-900">
                    Support Team Air Quality
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:text-blue-900">
                    Help Air Pollution Victims
                  </a>
                </li>
                <li>
                  <a href="#" className=" hover:text-blue-900">
                    Donate
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-semibold text-[#1E4866] mb-4">Contact Us</h3>
              <p className="text-[#1E4866]">Email: support@airaware.com</p>
              <p className="text-[#1E4866]">Address: Lagos, Nigeria</p>
            </div>
          </div>

          <div className="mt-12 pt-3 text-center">
            <p className="text-gray-600">
              © 2025 Air Aware. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer