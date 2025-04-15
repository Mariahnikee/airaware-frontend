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
    <div className="flex min-h-screen items-center justify-center">
      <div className="p-10 rounded-lg flex w-3/4 max-w-8xl">
        <div className="w-1/2 pr-10">
          <img src="logo.png" alt="airaware logo" className="logo-size" />
          <h1 className="font-poppins text-[40px] font-semibold leading-[50px] text-[#1E4866]">
            Let’s get started
          </h1>
          <p className="text-[#4b4949] leading-[27px] pb-4">
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
            <button
              type="submit"
              className="flex h-11 px-8 py-2.5 justify-center items-center gap-2 
              rounded-md bg-[#265B80] text-white"
            >
              Login
            </button>
          </form>
          <p className="mt-4">
            Don't have an account?{" "}
            <span className="font-medium text-[#265B80]">Register here
              
            </span>
          </p>
          <p className="font-medium text-[#265B80]">Forgot password?</p>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="signupimg.png"
            alt="Industrial pollution illustration"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
