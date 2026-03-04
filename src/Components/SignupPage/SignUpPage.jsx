import React from "react";
import { IoLogoApple } from "react-icons/io";
import googleLogo from "../../images/google_logo.svg";
import { FaMeta } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigation = useNavigate();

  const navigateToDashboard = (e) => {
    e.preventDefault();
    navigation("/dashboard");
  };
  return (
    <div className="signup-page-form relative z-50 w-[40%] max-[950px]:w-[80%] max-[450px]:w-full bg-[#8080801f] p-6 rounded-md">
      <h2 className="font-semibold text-2xl text-center mb-2">Sign up</h2>

      <p className="text-center mb-6 text-sm">
        Already Have an Account?
        <a href="/" className="text-teal-500 underline">
          Log in
        </a>
      </p>

      <form className="w-full" onSubmit={navigateToDashboard}>
        <div className="mb-4">
          <input
            className="border border-gray-400 p-3 rounded-md w-full focus:border-teal-500 outline-none"
            type="text"
            name=""
            placeholder="First Name"
            id=""
          />
        </div>

        <div className="mb-4">
          <input
            className="border border-gray-400 p-3 rounded-md w-full focus:border-teal-500 outline-none"
            type="text"
            placeholder="Last Name*"
            required
          />
        </div>

        <div className="mb-4">
          <input
            className="border border-gray-400 p-3 rounded-md w-full focus:border-teal-500 outline-none"
            type="email"
            placeholder="Email address*"
            required
          />
        </div>

        <div className="mb-4">
          <input
            className="border border-gray-400 p-3 rounded-md w-full focus:border-teal-500 outline-none"
            type="password"
            placeholder="Password (8+ characters)*"
            required
          />
        </div>

        <div className="flex items-start gap-2 mb-4 text-sm">
          <input type="checkbox" className="mt-1" required />
          <p className="leading-tight">
            I agree to Aps's{" "}
            <a href="/" className="underline text-blue-500">
              Terms & Conditions
            </a>{" "}
            and acknowledge the{" "}
            <a href="/" className="underline text-blue-500">
              Privacy Policy
            </a>
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 text-white p-3 rounded-3xl hover:bg-teal-600 transition duration-200"
        >
          Create Account
        </button>
      </form>

      <div className="flex justify-between mt-6">
        <button className="flex-1 bg-black text-white p-3 text-xl rounded-3xl mr-2 flex justify-center items-center hover:opacity-90 transition">
          <IoLogoApple />
        </button>

        <button className="flex-1 bg-[#8080804d] p-3 text-xl rounded-3xl mx-2 flex justify-center items-center hover:bg-gray-300 transition">
          <img className="w-5 h-5" src={googleLogo} alt="Google" />
        </button>

        <button className="flex-1 bg-blue-500 text-white p-3 text-xl rounded-3xl ml-2 flex justify-center items-center hover:opacity-90 transition">
          <FaMeta />
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
