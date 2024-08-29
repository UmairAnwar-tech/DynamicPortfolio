import React from "react";

import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
function Experiences() {
  const { portfoliodata } = useSelector((state) => state.root);
  const { experience } = portfoliodata;
  const [Selecteditemindex, setSelectedItemindex] = React.useState(0);
  return (
    <div>
      <SectionTitle title={"Experiences"} />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l border-white w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full  ">
          {experience.map((item, index) => (
            <div
              onClick={() => {
                setSelectedItemindex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-2xl px-3  ${
                  Selecteditemindex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-tertiary bg-opacity-40  w-fit py-3"
                    : "text-white"
                }`}
              >
                {item.Period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 w-66%">
          <h1 className="text-secondary text-2xl">
            {experience[Selecteditemindex].Title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experience[Selecteditemindex].Company}
          </h1>
          <p className="text-white">
            {" "}
            {experience[Selecteditemindex].Description}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Experiences;
