import Cart from '@/components/cart';
import { MinusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

const gernralCourses = () => {
  const data = [
    {
      id: 1,
      title: 'Building + Maintaining Rapport',
      instructor: 'Alberto Maldonado M.A., BCBA',
      image: 'aba-image.png',
      desciption:
        'Here you will learn the fundamental schedules of reinforcement and how to implement them in real life! After all, this is APPLIED behavior analysis, right!?',
      date: 'March 2023',
      price: 1.0,
      review: 4.5,
    },
  ];

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
        <div className="pt-[40px]">
          <div className="w-[820px]">
            <button className="flex items-center justify-between w-full">
              <p className="p14 font-interstateRegular text-blackColor ">
                Building + Maintaining Rapport
              </p>
              <MinusIcon className="h-4 w-4" />
            </button>

            <hr className="border-gray-200 mb-2 " />
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
                  <p className="p14 font-interstateRegular">
                    CEU: 1 General CEU
                  </p>
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
                  <button
                    className="font-interstateLight p14 c-btn border-2"
                    onClick={() => setOpen(true)}
                  >
                    ADD TO BASKET
                  </button>
                  <p className="p14 font-interstateRegular">Reviews *****</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cart open={open} setOpen={setOpen} />
    </div>
  );
};

export default gernralCourses;
