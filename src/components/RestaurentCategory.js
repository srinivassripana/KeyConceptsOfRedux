import React from 'react';
import ItemsList from './ItemsList';
import { useState } from 'react';

const RestaurantCategory = ({ data , showItems , setShowIndex }) => {
   
  
  const handleClick = () => {
    setShowIndex();
  }

  return (
    <div>
      <div className="w-6/12 mx-auto my-2 bg-slate-200 rounded-lg shadow-lg ">
        {data.title && <div>
        <div className='p-3 flex justify-between' >
        <span className='font-bold text-black'>{data?.title}({data?.itemCards?.length})</span>
        <span className='cursor-pointer' onClick={handleClick}>👇</span>
        </div>
        {showItems && <ItemsList items = {data?.itemCards}/>}
        </div>} 
        
      </div>
    </div>
  );
};

export default RestaurantCategory;
