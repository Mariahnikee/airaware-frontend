import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="p-4 sm:p-6 md:p-10 rounded-lg flex flex-col md:flex-row w-full sm:w-11/12 md:w-10/12 lg:w-3/4 max-w-8xl">
        <div className="w-full md:w-1/2 md:pr-6 lg:pr-10 mb-8 md:mb-0">
          <img src="logo.png" alt="airaware logo" className="logo-size mb-4" />
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-[40px] font-semibold leading-tight md:leading-[50px] text-[#1E4866]">
            Let's get started
          </h1>
          <p className="text-[#4b4949] leading-normal sm:leading-[27px] pb-4">
            Get access to air quality analytics across Nigeria
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="email" className="mb-1 font-medium">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full custom-input"
              required
            />
            <label htmlFor="password" className="mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full custom-input"
              required
            />
            <Link to="/dashboard/air-qty-dashbd">
            <button
              type="submit"
              className="flex h-11 w-full sm:w-auto px-8 py-2.5 justify-center items-center gap-2 
               rounded-md bg-[#265B80] text-white"
            >
              Login 
            </button>
            </Link>
          </form>
          <p className="mt-4 text-sm sm:text-base">
            Don't have an account?{" "}
            <Link to="/signup " className="text-[#1E4866] font-medium">
              Register here
            </Link>
          </p>
          <p className="font-medium text-[#265B80] text-sm sm:text-base mt-2">Forgot password?</p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="signupimg.png"
            alt="Industrial pollution illustration"
            className="w-full hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;