import React from "react";

const ScanningTypeDetails = () => {
  return (
    <div className="scanning-type-detail flex justify-around ">
      <div>
        <p className="text-gray-400">Scan Type</p>
        <p>Grey Box</p>
      </div>
      <div>
        <p className="text-gray-400">Targets</p>
        <p>google.com</p>
      </div>
      <div>
        <p className="text-gray-400">Started At</p>
        <p>Nov 22, 09:00 AM</p>
      </div>
      <div>
        <p className="text-gray-400">Credentials</p>
        <p>2 Active</p>
      </div>
      <div>
        <p className="text-gray-400">Files</p>
        <p>Control.pdf</p>
      </div>
      <div>
        <p className="text-gray-400">Checklists</p>
        <p className="text-teal-400">40/350</p>
      </div>
    </div>
  );
};

export default ScanningTypeDetails;
