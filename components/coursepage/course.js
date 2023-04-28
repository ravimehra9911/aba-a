import { useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Button from '../buttton';

const Course = ({ setOpen }) => {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <div className="pt-[40px]">
      <div className="w-[820px]">
        <button
          onClick={() => setShowCourses(!showCourses)}
          className="flex items-center justify-between w-full"
        >
          <p className="p14 font-interstateRegular text-blackColor ">
            Building + Maintaining Rapport
          </p>
          {showCourses == true ? (
            <MinusIcon className="h-4 w-4" />
          ) : (
            <PlusIcon className="h-4 w-4" />
          )}
        </button>
        <hr className="border-gray-200 mb-2 " />
        {showCourses && (
          <div className="border p-[19px] gap-4 flex justify-between items-center">
            <div>
              <Image
                src="/assets/images/aba-image.png"
                alt="course image"
                width="300"
                height="300"
              />
            </div>
            <div>
              <div className=" flex justify-between items-center">
                <p className="p14 font-interstateRegular">CEU: 1 General CEU</p>
                <p className="p14 font-interstateRegular">
                  Instructor: Alberto Maldonado M.A., BCBA{' '}
                </p>
              </div>
              <p className="p14 font-interstateRegular">Date: March 2023</p>
              <p className="p14 font-interstateLight">
                <span className="p14 font-interstateRegular">
                  Course Description:
                </span>{' '}
                Here you will learn the fundamental schedules of reinforcement
                and how to implement them in real life! After all, this is
                APPLIED behavior analysis, right!?
              </p>
              <div className=" flex justify-between items-center">
                <p className="p14 font-interstateRegular">Price: $ 5.00</p>
                <Button
                  name="ADD TO BASKET"
                  cssName="hover:bg-yellowColor"
                  click={() => setOpen(true)}
                />

                <p className="p14 font-interstateRegular">Reviews *****</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;
