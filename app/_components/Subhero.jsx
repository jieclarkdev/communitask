import React from "react";
import {
  BriefcaseBusiness,
  CircleUser,
  UserRoundCheck,
  UserRoundSearch,
} from "lucide-react";
function Subhero() {
  return (
    <div className="bg-white p-6">
      <div className="mb-5">
        <h2 className="text-center text-4xl font-bold text-gray-800">
          How it works?
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col items-center transform transition-transform hover:scale-95">
          <CircleUser size={100} color="#17688A" />
          <h2 className="text-lg font-bold text-gray-800">Create Profile</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded-md shadow-md  flex flex-col items-center transform transition-transform hover:scale-95">
          <UserRoundCheck size={100} color="#17688A" />
          <h2 className="text-lg font-bold text-gray-800">Complete Profile</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col items-center transform transition-transform hover:scale-95">
          <UserRoundSearch size={100} color="#17688A" />

          <h2 className="text-lg font-bold text-gray-800">Find Mentor</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col items-center transform transition-transform hover:scale-95">
          <BriefcaseBusiness size={100} color="#17688A" />
          <h2 className="text-lg font-bold text-gray-800">
            Apply for specific tasks
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Subhero;
