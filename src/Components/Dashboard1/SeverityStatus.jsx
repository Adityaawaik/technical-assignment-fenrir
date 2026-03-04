import React from "react";
import { IoBanOutline } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa6";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { MdOutlineSavedSearch } from "react-icons/md";

const severityData = [
  {
    title: "Critical Severity",
    count: 86,
    percentage: "+2% increase than yesterday",
    textColor: "text-pink-600",
    bgColor: "bg-red-100",
    iconColor: "text-pink-500",
    Icon: IoBanOutline,
    isIncrease: true,
  },
  {
    title: "High Severity",
    count: 16,
    percentage: "+0.9% increase than yesterday",
    textColor: "text-orange-600",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-700",
    Icon: HiOutlineExclamationTriangle,
    isIncrease: true,
  },
  {
    title: "Medium Severity",
    count: 26,
    percentage: "-0.9% decrease than yesterday",
    textColor: "text-green-600",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-700",
    Icon: HiOutlineExclamationTriangle,
    isIncrease: false,
  },
  {
    title: "Low Severity",
    count: 16,
    percentage: "+0.9% increase than yesterday",
    textColor: "text-blue-600",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-700",
    Icon: MdOutlineSavedSearch,
    isIncrease: true,
  },
];

const SeverityCard = ({
  title,
  count,
  percentage,
  textColor,
  bgColor,
  iconColor,
  Icon,
  isIncrease,
}) => {
  return (
    <div className="min-w-55 shrink-0">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-gray-400 text-sm font-medium">{title}</h2>
        <div
          className={`w-8 h-8 ${bgColor} flex justify-center items-center rounded-md`}
        >
          <Icon className={`${iconColor} text-lg`} />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-semibold">{count}</h2>
        <p className={`${textColor} flex items-center text-sm`}>
          <FaArrowUp className={`${!isIncrease ? "rotate-180" : ""} mr-1`} />
          {percentage}
        </p>
      </div>
    </div>
  );
};

const SeverityStatus = () => {
  return (
    <div className="mt-4 mb-4 border-b border-gray-200">
      <div className="flex items-center gap-20 px-6 py-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {severityData.map((item, index) => (
          <SeverityCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SeverityStatus;
