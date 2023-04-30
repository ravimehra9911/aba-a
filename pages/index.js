import React from 'react';
import CircleButton from '@/components/CircleButton';

const index = () => {
  return (
    <div className="md:flex md:justify-between md:items-center md:h-full">
      <div className="m-p48 px-8 pt-14 md:text-[96px] md:leading-[96px] font-spaceMonoRegular text-yellowColorDark ">
        explore <br></br> courses
      </div>
      <div className="hidden md:block">
        <CircleButton />
      </div>
    </div>
  );
};

export default index;
