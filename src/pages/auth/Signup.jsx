import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className=" p-10  rounded-lg flex w-3/4 max-w-8xl">
        <div className="w-1/2 pr-10">
          <img src="logo.png" alt="airaware logo" className="logo-size" />
          <h1 className="font-poppins text-[40px] font-semibold leading-[50px] text-[#1E4866]">
            Let’s get started
          </h1>
          <p className="text-[#4b4949] leading-[27px] pb-4">
            Get access to air quality analytics across Nigeria
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-8">
              <div className="flex flex-col w-1/2">
                <label htmlFor="firstName" className="mb-1 font-medium">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="custom-input"
                  required
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label htmlFor="lastName" className="mb-1 font-medium">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="custom-input"
                  required
                />
              </div>
            </div>
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
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              className="w-full custom-input"
              required
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="h-4 w-4 accent-[#265B80] cursor-pointer"
              />
              <label className="text-sm ">
                I agree to the
                <a href="#" className="font-medium text-[#265B80] underline">
                  {" "}
                  Terms of Service{" "}
                </a>
                and
                <a href="#" className="font-medium text-[#265B80] underline">
                  {" "}
                  Privacy Policy
                </a>
              </label>
            </div>
            <button
              type="submit"
              className=" flex h-11 px-8 py-2.5 justify-center items-center gap-2 
             rounded-md bg-[#265B80] text-white disabled:opacity-20"
              disabled={!formData.agreed}
            >
              Continue
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?
            <Link to="/login" className="text-[#1E4866] font-medium">
              Log in
            </Link>
          </p>
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
