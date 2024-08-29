import React from 'react'

function SectionTitle({title}) {
  return (
    <div  className='flex gap-10 items-center py-10'>
      <h1 className='text-3xl  sm:text-xl text-secondary'>{title}</h1>
      <div className='w-60 h-[1px] bg-tertiary sm:w-40'></div>
    </div>
  )
}

export default SectionTitle
