import CourseTitle from '@/components/coursepage/coursetitle';
import CourseFilter from '@/components/coursepage/coursefilter';
import Course from '@/components/coursepage/course';
import Cart from '@/components/cart';
import { useState } from 'react';

const coursepage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="relative">
        <CourseTitle title="general CEU courses" />
        <CourseFilter />
        <Course />
        <Cart open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default coursepage;
