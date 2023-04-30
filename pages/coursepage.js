import CourseTitle from '@/components/coursepage/CourseTitle';
import Course from '@/components/coursepage/Course';
import Cart from '@/components/Cart';
import React, { useState } from 'react';
import { CourseData } from '@/data/db';

const CoursePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div>
        <CourseTitle title={['general', <br></br>, 'courses']} />
        <div className="py-16">
          {CourseData.map((course, index) => {
            <React.Fragment>
              <Course
                setOpen={setOpen}
                id={course.id + '-' + index}
                title={course.title}
                ceu={course.ceu}
                instructor={course.instructor}
                date={course.date}
                description={course.description}
                price={course.price}
                review={course.review}
              />
            </React.Fragment>;
          })}
        </div>
        <Cart open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default CoursePage;
