import React from "react";
//props -> src, title,subtitle, isDark(bool)
const Poster = (props) => {
  return (
    <>
    <div className="flex flex-col items-start gap-1 px-3 mt-3">
      <div className="h-60" >
       <img src={props.src}
       alt={props.title} className="w-full h-full rounded-xl"/>
      </div>
      <h3
      className="text-xl text-bold text-gray-900 mt-2 items-center px-1"
      >{props.title}</h3>
      <p
      className="text-sm flex justify-between">{props.subtitle}</p>
    </div>
    </>
  )
};

export default Poster;
