import React from 'react';
import Wrapper from './Wrapper';
import Header from '../header/Headerr';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <main className="md:ml-[190px] lg:ml-[254px] xl:ml-[358px] xxl:ml-[478px]  md:px-[120px] xxl:border-r xxl:border-black md:h-screen">
        {children}
      </main>
    </Wrapper>
  );
};

export default Layout;
