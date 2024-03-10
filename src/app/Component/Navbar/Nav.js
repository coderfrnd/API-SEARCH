import React from 'react';

const Nav = () => {
  const arr = ["Home", "About", "Contact"];

  return (
    <div className='text-white w-screen h-[100%] flex justify-end'>
      <div className='w-screen h-[100%] flex justify-end space-x-9'>
        {arr.map((item) => (
          <div key={item} className='m-4 p-4'>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
