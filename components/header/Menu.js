import React from 'react';
import Link from 'next/link';
import { MenuData } from '@/data/db.js';

const Menu = () => {
  return (
    <div className="md:overflow-y-auto md:h-[400px]">
      {MenuData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <Link className="" href={item.link}>
              <div className="p14 font-interstateRegular py-4 md:py-8 pl-[33px] border-b hover:bg-yellowColor">
                {item.name}
              </div>
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Menu;
