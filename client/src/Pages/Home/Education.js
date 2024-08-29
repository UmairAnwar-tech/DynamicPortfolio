import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from'react-redux'
function Educations() {
  const { portfoliodata } = useSelector((state) => state.root);
  const { education } = portfoliodata;
    const [Selecteditemindex, setSelectedItemindex] = React.useState(0);
  return (
    <div>
    <SectionTitle title={"Educations"} />
    <div className="flex py-10 gap-20 sm:flex-col">
      <div className="flex flex-col gap-10 border-l border-white  w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full custom-scrollbar ">
        {education.map((item, index) => (
          <div
            onClick={() => {
              setSelectedItemindex(index)
            }}
            className="cursor-pointer"
          >
            <h1
              className={`text-2xl px-3 ${
                Selecteditemindex === index
                  ? "text-tertiary border-tertiary lg:border-l-4 -ml-[3px] bg-tertiary bg-opacity-40 py-3 w-fit"
                  : "text-white"
              }`}
            >
              {item.Period}
            </h1>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 ">
      <h1 className="text-secondary text-2xl">
        {education[Selecteditemindex].Degree}
      </h1>
      <h1 className="text-tertiary text-l ">
        {education[Selecteditemindex].School}
      </h1>
      <p className="text-white "> {education[Selecteditemindex].Description}</p></div>
    </div>
  </div>
    
  )
}

export default Educations