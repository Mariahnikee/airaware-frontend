import { useState } from "react";

export default function RegistrationForm() {
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
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-10 shadow-lg rounded-lg flex w-3/4 max-w-8xl">
        <div className="w-1/2 pr-10">
          <h1 className="font-inter text-2xl font-bold text-gray-800" >Let’s get started</h1>
          <p className="text-gray-600 mb-5">
            Get access to air quality analytics across Nigeria
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4"><label htmlFor="firstName">First name  </label>
            <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 p-3 border rounded-md"
                required
              />
             
             <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 p-3 border rounded-md"
                required
              />
            </div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              required
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="h-4 w-4"
              />
              <label className="text-sm text-gray-600">
                I agree to the
                <a href="#" className="font-medium underline"> Terms of Service </a>
                and
                <a href="#" className="font-medium underline"> Privacy Policy</a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md disabled:opacity-50"
              disabled={!formData.agreed}
            >
              Continue
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?
            <a href="#" className="text-blue-600 font-medium"> Log in</a>
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
