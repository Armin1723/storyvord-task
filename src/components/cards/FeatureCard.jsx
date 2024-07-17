import React from 'react'

const FeatureCard = ({card}) => {
  return (
    <div className='flex flex-col flex-1 justify-between items-center rounded-xl backdrop-blur-xl min-h-72 px-10 max-lg:px-4 py-4 bg-white/5 shadow-[0_0_50px_black] shadow-black/25 border border-white/15 hover:bg-white/10'>
      <p className="h-1/5 text-2xl text-center">{card.title}</p>
      <p className="text-center text-xs flex items-center justify-center h-4/5">{card.desc}</p>
    </div>
  )
}

export default FeatureCard
