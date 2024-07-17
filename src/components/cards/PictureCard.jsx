import React from 'react'

const PictureCard = ({card}) => {
  return (
    <div className='flex flex-col basis-1/4 max-lg:basis-1/2 flex-1 md:max-w-[25vw] justify-between items-center rounded-xl backdrop-blur-lg min-h-72 px-10 max-lg:px-4 py-4 shadow-[0_0_25px_black] shadow-black/25 border border-white/15 hover:bg-white/10'>
        <img src={"/images/" + card.image} alt={card.title} className='h-48 object-cover w-full mb-2 rounded-md'/>
      <p className="h-1/5 text-2xl text-center">{card.title}</p>
      <p className="text-center text-xs flex items-center justify-center h-4/5">{card.desc}</p>
    </div>
  )
}

export default PictureCard
