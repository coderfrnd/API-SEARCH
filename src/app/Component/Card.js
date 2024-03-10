import React from 'react';

const Card = ({ beer }) => {
  return (
    <div className='w-[15%] h-[30%] bg-zinc-900/60 rounded-[40px] text-white px-8 py-10 overflow-hidden relative flex-shrink-0 border-white border 2px'>
      <div className="h-auto w-auto"> {/* Adjust height as needed */}
        <img
          src={beer.image_url}
          alt="Beer"
          className="w-full h-auto object-cover"
        />
      </div>

      <h1 className="text-xl font-bold mt-4">{beer.name}</h1>
      <p>{beer.tagline}</p>
    </div>
  );
};

export default Card;
