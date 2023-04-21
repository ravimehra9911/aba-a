import Link from 'next/link';

const menuli = ({ link, name }) => {
  return (
    <li className="py-[33px] pl-[33px] border-b-2">
      <Link href={link}>{name}</Link>
    </li>
  );
};

export default menuli;
