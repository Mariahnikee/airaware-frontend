import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { signUpUser } from "./../../services/AuthService";
import { signUpUser } from "../../services/AuthService";
export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreed: false,
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreed) {
      setErrorMessage("You must agree to the terms before signing up.");
      return;
    }

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await signUpUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });

      setSuccessMessage("Signup successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error("Signup error:", error);
      setErrorMessage(error.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
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

          {successMessage && (
            <div className="p-2 bg-green-100 text-green-700 border border-green-300 rounded mb-4">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="p-2 bg-red-100 text-red-700 border border-red-300 rounded mb-4">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="flex flex-col w-full sm:w-1/2">
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
                  disabled={loading}
                />
              </div>

              <div className="flex flex-col w-full sm:w-1/2">
                <label htmlFor="lastName" className="mb-1 font-medium">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="custom-input"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full custom-input"
                required
                disabled={loading}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                className="w-full custom-input"
                required
                disabled={loading}
                minLength={8}
              />
            </div>

            <div className="flex items-start sm:items-center gap-2">
              <input
                type="checkbox"
                name="agreed"
                id="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="h-4 w-4 mt-1 sm:mt-0 accent-[#265B80] cursor-pointer"
                disabled={loading}
              />
              <label htmlFor="agreed" className="text-sm">
                I agree to the
                <a href="#" className="font-medium text-[#265B80] underline">
                  {" "}Terms of Service{" "}
                </a>
                and
                <a href="#" className="font-medium text-[#265B80] underline">
                  {" "}Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="flex h-11 w-full sm:w-auto px-8 py-2.5 justify-center items-center gap-2 
              rounded-md bg-[#265B80] text-white disabled:opacity-50"
              disabled={!formData.agreed || loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing up...
                </div>
              ) : (
                "Continue"
              )}
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[#1E4866] font-medium">
              Log in
            </Link>
          </p>
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
