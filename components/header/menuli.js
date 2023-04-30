import React from 'react';
import Link from 'next/link';
import { Menu } from '@/data/db.js';

const Menuli = () => {
  return (
    <>
      {Menu.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <Link className="" href={item.link}>
              <li className="p14 font-interstateRegular py-[33px] pl-[33px] border-b hover:bg-yellowColor">
                {item.name}
              </li>
            </Link>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Menuli;
