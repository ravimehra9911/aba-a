import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Header />
      <main className="w-full">{children}</main>
    </div>
  );
};

export default Layout;
