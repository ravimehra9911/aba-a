import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import MenuLi from './menuli';
import Logo from './logo';

const Header = () => {
  return (
    <div className=" w-1/4 flex justify-between flex-col border-r border-black">
      <div className="flex justify-between flex-col h-full ">
        <div>
          <Logo />
          <div className="flex justify-center items-center border-y py-4">
            <span className="pr-4">
              <ArrowLeftIcon className="h-4 w-4" />
            </span>
            <p className="p14 font-interstateLight">MAIN MENU</p>
          </div>
          <div className="py-4 border-b  bg-yellowColor">
            <p className="p48 font-spaceMonoRegular pl-[33px] relative mt-3">
              <span className="absolute font-interstateLight p14 top-[-10px]">
                access our
              </span>
              CEUs
            </p>
          </div>

          <nav className="">
            <ul>
              <MenuLi name="GENERAL CEUs" link="/coursepage" />
              <MenuLi name="SUPERVISION CEUs" link="/" />
              <MenuLi name="ETHICAL STANDARD CEUs" link="/" />
            </ul>
          </nav>
        </div>
        <div className="flex justify-center items-center flex-col pb-[33px]">
          <span className="font-interstateLight p14 pb-2">
            NEED MORE INFORMATION?
          </span>
          <button className="font-interstateLight p14 c-btn border-2">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
