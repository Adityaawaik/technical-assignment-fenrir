import React from "react";
import { FaCheck } from "react-icons/fa";
import SignUpPage from "./SignUpPage";
import { FaStar } from "react-icons/fa";

const SignUpContent = () => {
  return (
    <div className="sign-up-content-form min-h-screen p-4 flex items-center justify-around max-[950px]:flex-col">
      <div className="sign-up-content max-[950px]:mt-8 max-[950px]:mb-8 max-[950px]:w-full">
        <h2 className="text-[6vmin] max-[950px]:text-center">
          Expert level Cybersecurity
        </h2>
        <h2 className="flex items-center gap-1 text-[6vmin] max-[950px]:text-center max-[950px]:justify-center">
          in
          <span className="text-teal-500 text-[6vmin] max-[950px]:text-center">
            hours
          </span>
          not weeks
        </h2>

        <div className="mt-4 p-2">
          <h3 className="text-[4vmin] mb-2 max-[950px]:text-start">
            What is included
          </h3>
          <p className="flex items-center gap-2 max-[950px]:justify-start mt-2 text-[3vmin]">
            <FaCheck className="text-green-700" />
            Effortlessly spider and map targets to uncover hidden security flaws
          </p>
          <p className="flex items-center gap-2 max-[950px]:justify-start mt-2  text-[3vmin]">
            <FaCheck className="text-green-700" />
            Deliver high-quality, validated findings in hours , not weeks.
          </p>
          <p className="flex items-center gap-2 max-[950px]:justify-start mt-2  text-[3vmin]">
            <FaCheck className="text-green-700" />
            Generate professional, enterprise-grade security reports
            automatically
          </p>
        </div>

        <div className="trusted mt-4 mb-4 p-4">
          <p className="flex gap-1 items-center mt-2 text-[3vmin]">
            <FaStar className="text-green-700" /> Trustpilot
          </p>

          <div className="rating flex items-center gap-1 mt-2">
            <p className="font-semibold text-[3vmin]">Rated 4.5/10</p>
            <p className="text-gray-400 text-[3vmin]">(100+ reviews)</p>
          </div>
        </div>
      </div>
      <SignUpPage />
    </div>
  );
};

export default SignUpContent;
