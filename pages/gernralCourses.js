import Cart from '@/components/cart';
import Course from '@/components/course';

import { useState } from 'react';

const gernralCourses = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="relative">
        <h1 className="p96 text-yellowColorDark text-center pt-[100px]">
          general CEU <br></br> courses
        </h1>
        <div className="space-x-4 flex justify-center pt-[50px]">
          <select
            className="p14 font-interstateRegular border rounded-md p-4"
            name="searchTopics"
          >
            <option>SEARCH TOPICS</option>
            <option>TOPIC 1</option>
            <option>TOPIC 2</option>
            <option>TOPIC 3</option>
          </select>

          <select
            className="p14 font-interstateRegular border rounded-md p-4"
            name="typeOfCeu"
          >
            <option>TYPE OF CEU</option>
            <option>CEU 1</option>
            <option>CEU 2</option>
            <option>CEU 3</option>
          </select>

          <select
            className="p14 font-interstateRegular border rounded-md p-4"
            name="ceuCredits"
          >
            <option>CEU CREDITS</option>
            <option>CEU 1</option>
            <option>CEU 2</option>
            <option>CEU 3</option>
          </select>
        </div>
        <Course />
      </div>
      <Cart open={open} setOpen={setOpen} />
    </div>
  );
};

export default gernralCourses;
