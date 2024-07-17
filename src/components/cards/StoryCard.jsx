import React from 'react'

const StoryCard = ({card, index}) => {
    console.log(index)
  return (
    <div className={`${index === 1 && 'md:-mt-20'} md:w-1/3 flex flex-col justify-between items-center rounded-2xl backdrop-blur-lg h-60 px-10 max-lg:px-4 py-4 shadow-[0_0_25px_black] hover:bg-white/10 shadow-black/25 border border-white/15 `}>
      <p className="h-1/5 text-2xl text-center">{card.title}</p>
      <p className="text-center text-xs flex items-center justify-center h-4/5">{card.desc}</p>
    </div>
  )
}

export default StoryCard
