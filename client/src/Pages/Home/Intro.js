import React from "react";

import { useSelector } from "react-redux";

function Intro() {
  const { loading, portfoliodata } = useSelector((state) => state.root);
  const { intro } = portfoliodata;
  const { WelcomeText, FirstName, LastName, Description, Title } = intro;
  return (
    <div className="h-[80vh] w-3/4 bg-primary flex flex-col items-start justify-center gap-8 py-10 sm:w-full sm:h-full sm:gap-4">
      <h1 className="text-white "> {WelcomeText || " "}</h1>
      <h1 className="text-secondary sm:text-3xl text-7xl font-semibold sm:pb-[24px]">
        {FirstName || " "} {LastName || " "}
      </h1>
      <h1 className="text-white text-6xl sm:text-3xl font-semibold sm:pb-[8px]">
        {Title || " "}
      </h1>
      <p className="text-white  sm:pb-[24px]"> {Description || " "}</p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded-md ">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
