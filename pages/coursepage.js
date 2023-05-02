import React, { useState } from 'react';
import CourseTitle from '@/components/coursepage/CourseTitle';
import Course from '@/components/coursepage/Course';
import Cart from '@/components/Cart';

const CoursePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div>
        <CourseTitle />
        <div className="py-16">
          <Course setOpen={setOpen} />
        </div>
        <Cart open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default CoursePage;
