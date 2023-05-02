import React from 'react';
import Logo from './Logo';
import MainMenu from './MainMenu';
import Menu from './Menu';
import MenuTitle from './MenuTitle';
import ContactUs from './ContactUs';

const Header = () => {
  return (
    <>
      <header className="md:w-1/4 md:fixed md:border-x md:border-black md:h-screen md:flex md:justify-between md:flex-col md:overflow-y-auto">
        <div>
          <Logo />
          <MainMenu />
          <MenuTitle />
          <Menu />
        </div>
        <div className="hidden md:block">
          <ContactUs />
        </div>
      </header>
    </>
  );
};

export default Header;
