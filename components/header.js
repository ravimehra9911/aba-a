import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import MenuLi from './menuli';

const Header = () => {
  return (
    <div className=" w-1/4 flex justify-between flex-col border-r-2 border-black">
      <div>
        <div className="flex justify-center py-4">
          <Link href="/">
            <Image
              src="/assets/images/aba-logo.png"
              alt="logo"
              width={86}
              height={96}
              priority={true}
            />
          </Link>
        </div>
        <div className="flex justify-center items-center border-y-2 py-4">
          <span className="pr-4">
            <ArrowLeftIcon className="h-3 w-3" />
          </span>
          <p className="p14 font-interstateLight">MAIN MENU</p>
        </div>
        <div className="py-4 border-b-2  bg-yellowColor">
          <p className="p48 pl-[33px] relative mt-3">
            <span className="absolute font-interstateLight p14 top-[-10px]">
              access our
            </span>
            CEU's
          </p>
        </div>

        <nav className="">
          <ul>
            <MenuLi name="GENERAL CEUs" link="/gernralCourses" />
            <MenuLi name="SUPERVISION CEUs" link="/" />
            <MenuLi name="ETHICAL STANDARD CEUs" link="/" />
          </ul>
        </nav>
      </div>
      <div className="flex justify-center items-center flex-col pb-[33px]">
        <span className="p14 pb-2">NEED MORE INFORMATION?</span>
        <button className="p14 c-btn border-2">CONTACT US</button>
      </div>
    </div>
  );
};

export default Header;
