import React from 'react';

const CourseTitle = ({ title }) => {
  return (
    <div className="m-p48 px-8 pt-14 md:text-[96px] md:leading-[96px] font-spaceMonoRegular text-yellowColorDark ">
      {title}
    </div>
    // <h1 className="p96 w-[820px] text-yellowColorDark text-center pt-[100px]">
    //   {title}
    // </h1>
  );
};

export default CourseTitle;
