import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
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
  );
};

export default Logo;
