import Link from 'next/link';

const Menuli = ({ link, name }) => {
  return (
    <Link className="" href={link}>
      <li className="p14 font-interstateRegular py-[33px] pl-[33px] border-b hover:bg-yellowColor">
        {name}
      </li>
    </Link>
  );
};

export default Menuli;
