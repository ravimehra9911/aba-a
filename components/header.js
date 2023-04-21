import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="p-[33px] flex justify-between flex-col border-r-2 border-black">
      <div>
        <div className="flex justify-center border-b-2 border-black">
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
        <div>
          <p>
            <span>arrow</span>MAIN MENU
          </p>
        </div>
        <div className="py-4">
          <p className="text-2xl relative mt-3">
            <span className="absolute text-sm top-[-10px]">access our</span>
            CEU's
          </p>
        </div>
        <nav>
          <ul>
            <li>HOMEE</li>
            <li>
              <Link href="/gernralCourses">GENERAL CEUs</Link>
            </li>
            <li>SUPERVISION CEUs</li>
            <li>ETHICAL STANDARD CEUs</li>
          </ul>
        </nav>
      </div>
      <div>
        <span>NEED MORE INFORMATION?</span>
        <button className="border-2">CONTACT US</button>
      </div>
    </div>
  );
};

export default Header;
