import React from "react";

const InfoButtons = (props) => {
  return (
    <>
      <button
        className={
          `flex items-center gap-3 border border-zomato-400 px-4 py-2 rounded-lg
          ${
            props.isActive ? "bg-zomato-400 text-white" : "text-gray-800"
          }`
        }
      >
        {props.children}
      </button>
    </>
  );
};

export default InfoButtons;
