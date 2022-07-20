import React from "react";

const TeamCard = ({ title, name, desc, img }) => {
  return (
    <div className="flex-col items-center justify-center">
      <div className="team-item-header">
        <div className="w-auto">
          <img src={img} alt={desc} />
        </div>
      </div>
      <div className="flex-col items-center justify-center p-4 text-center">
        <h5 className="text-base font-semibold text-gray-600 dark:text-gray-50">
          {name}
        </h5>
        <div className="mt-4 text-sm text-blue-400 font-meduim">{title}</div>
      </div>
    </div>
  );
};

export default TeamCard;
