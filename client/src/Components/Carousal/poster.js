import React from "react";
//props -> src, title,subtitle, isDark(bool)
const Poster = (props) => {
  return (
    <>
    <div className="flex flex-col gap-2 mt-3">
      <div className="w-full px-2 h-64" >
       <img src={props.src}
       alt={props.title} className="w-full h-full object-cover rounded-xl"/>
      </div>
      <h3 className="text-xl text-bold text-gray-900 text-center px-1"
      >{props.title}</h3>
      <p
      className="text-sm flex justify-between">{props.subtitle}</p>
    </div>
    </>
  )
};

export default Poster;
