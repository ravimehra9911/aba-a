import React, { useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Button from '../Button';
import StarRating from './StarRating';

const Course = (props, setOpen) => {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <div key={props.title} className="px-8">
      <div className="">
        <button
          onClick={() => setShowCourses(!showCourses)}
          className="flex justify-between items-center w-full py-2"
        >
          <p className="p14 font-interstateRegular text-blackColor ">
            {props.title}
          </p>
          {showCourses == true ? (
            <MinusIcon className="h-4 w-4" />
          ) : (
            <PlusIcon className="h-4 w-4" />
          )}
        </button>
        <hr className="border-yellowColorDark mb-2 " />
        {showCourses && (
          <div className="border p-[19px]">
            <div className="h-52 relative overflow-hidden rounded-md bg-yellowColorDark mb-8">
              <Image
                src="/assets/images/aba-image.png"
                alt="course image"
                fill={true}
              />
            </div>
            <div className="space-y-4">
              <p className="p14 font-interstateRegular">CEU: {props.ceu}</p>
              <p className="p14 font-interstateRegular">
                Instructor: {props.instructor}
              </p>

              <p className="p14 font-interstateRegular">Date: {props.date}</p>
              <p className="p14 font-interstateLight">
                <span className="p14 font-interstateRegular">
                  Course Description:
                </span>
                {props.description}
              </p>

              <p className="p14 font-interstateRegular">
                Price: $ {props.price}
              </p>
              <Button
                name="ADD TO BASKET"
                cssName="hover:bg-yellowColor"
                click={() => setOpen(true)}
              />

              <p className="p14 font-interstateRegular">
                Reviews: <StarRating /> {props.reviews}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;
