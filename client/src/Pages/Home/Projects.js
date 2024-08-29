import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';
function Projects() {
  const { portfoliodata } = useSelector((state) => state.root);
  const { project } = portfoliodata;

    const [Selecteditemindex, setSelectedItemindex] = React.useState(0);

  return (
    <div>
    <SectionTitle title={"Projects"} />
    <div className="flex py-10 gap-20 sm:flex-col">
      <div className="flex flex-col gap-10 border-l border-white  w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full custom-scrollbar ">
        {project.map((item, index) => (
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
              {item.Title}
            </h1>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center gap-10 sm:flex-col'>
        <img src={project[Selecteditemindex].ImageUrl} alt="Not showing" className="h-60 w-60"/>
      </div>
      <div className="flex flex-col gap-4 ">
      <h1 className="text-secondary text-2xl">
        {project[Selecteditemindex].Title}
      </h1>
      <h1 className="text-tertiary text-l ">
        {project[Selecteditemindex].Technologies.join('   ')}
      </h1>
      <p className="text-white "> {project[Selecteditemindex].Description}</p>
      </div>
    </div>
  </div>
    
  )
}

export default Projects