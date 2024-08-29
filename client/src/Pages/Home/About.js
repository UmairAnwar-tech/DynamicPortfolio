import React from "react";
import SectionTitle from "../../components/SectionTitle";

import { useSelector } from "react-redux";
function About() {
  const { loading, portfoliodata } = useSelector((state) => state.root);
  const { about } = portfoliodata;
  const { ImageUrl, Description1, Description2, Skills } = about;
  return (
    <div>
      <SectionTitle title="About Me" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[40vh] w-1/2 sm:w-full">
          <lottie-player
            src={ImageUrl}
            speed="1"
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full sm:py-5">
          <p className="text-white">{Description1 || " "}</p>
          <p className="text-white">{Description2 || " "}</p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">Tech Trends I’ve Tackled:</h1>
        <div className="flex flex-wrap gap-7 mt-5">
          {Skills.map((skill, index) => (
            <div className="rounded-sm px-8 border-2 border-tertiary">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
