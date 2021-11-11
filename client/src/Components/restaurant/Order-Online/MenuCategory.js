import React from "react";

const MenuCategory = (props) => {
  return (
    <>
    <div
    className={`
      ${props.isActive ? "text-zomato-400 py-2 px-1 font-semibold bg-zomato-50 border-r-4 border-zomato-400" : "font-semibold"}
      `}
    >
      <h3 onClick ={props.onClickHandler} id={props.name}>
      {props.name} ({props.items.length})
      </h3>
    </div>
    </>
  )
};

export default MenuCategory;
