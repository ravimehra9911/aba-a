import Cart from '@/components/cart';
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
    <div className="relative">
      <h1>generalCourse</h1>
      <ul>
        <li>search topics</li>
        <li>type of ceu</li>
        <li>ceu credits</li>
      </ul>

      <div>
        <Cart open={open} setOpen={setOpen} />
        <div class="container max-w-4xl px-6 py-10 mx-auto">
          <div class="mt-12 space-y-8">
            <div class="">
              {/* {data.map(data)} */}
              <button class="flex items-center justify-between w-full p-8">
                <h1 class="font-semibold text-gray-700 ">
                  Building + Maintaining Rapport
                </h1>

                <span class="text-gray-400 bg-gray-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12H6"
                    />
                  </svg>
                </span>
              </button>

              <hr class="border-gray-200 mb-2 " />
              <div className=" gap-4 flex justify-between items-center">
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
                    <p>CEU: 1 General CEU</p>
                    <p>Instructor: Alberto Maldonado M.A., BCBA </p>
                  </div>
                  <p>Date: March 2023</p>
                  <p>
                    <span className="">Course Description:</span> Here you will
                    learn the fundamental schedules of reinforcement and how to
                    implement them in real life! After all, this is APPLIED
                    behavior analysis, right!?
                  </p>
                  <div className=" flex justify-between items-center">
                    <p>Price: $5.00</p>
                    <button onClick={() => setOpen(true)}>ADD TO BASKET</button>
                    <p>Reviews *****</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default gernralCourses;
