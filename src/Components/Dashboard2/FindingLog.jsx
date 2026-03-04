import React, { useContext } from "react";
import WebContext from "../../Store/WebContext";

const findings = [
  {
    severity: "Critical",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    description:
      "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
    time: "10:45:23",
  },
  {
    severity: "High",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    description:
      "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
    time: "10:45:23",
  },
  {
    severity: "Medium",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    description:
      "No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
    time: "10:45:23",
  },
];

const severityColor = {
  Critical: "text-red-500",
  High: "text-orange-400",
  Medium: "text-yellow-400",
};

const FindingLog = () => {
  const { mode } = useContext(WebContext);

  return (
    <div
      className={`p-6 min-h-screen w-[40%] mr-4 mt-4 mb-4 rounded-lg transition-colors
      ${
        mode
          ? "bg-black text-white shadow-[0px_0px_3px_0px_white]"
          : "bg-white text-black shadow-sm"
      }
      max-[800px]:w-full`}
    >
      <h2 className="text-2xl font-semibold mb-6">Finding Log</h2>
      <div className="flex flex-col gap-6">
        {findings.map((item, index) => (
          <div
            key={index}
            className="space-y-2 border border-gray-200 p-4 bg-[#a9a9a92e] rounded-lg"
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">[{item.time}]</span>

              <span
                className={`text-sm font-semibold ${
                  severityColor[item.severity]
                }`}
              >
                {item.severity}
              </span>
            </div>

            <h3 className="text-lg font-semibold">{item.title}</h3>

            <p className="text-teal-500 font-mono">{item.endpoint}</p>

            <p
              className={`leading-relaxed ${
                mode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {item.description}
            </p>

            <div
              className={`mt-4 ${
                mode ? "border-b border-gray-800" : "border-b border-gray-200"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindingLog;
