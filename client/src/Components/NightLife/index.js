import React from "react";

//components
import NightLifePage from "./NightLifePage";
import NightLifeCards from "./NightLifeCards";

const NightLife = () => {
  return (
    <>
    <div className="mt-16">
      <NightLifePage />
      <NightLifeCards />
    </div>
    </>
  );
};

export default NightLife;
