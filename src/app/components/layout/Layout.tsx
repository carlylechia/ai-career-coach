import { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface LayoutProps {
  children: ReactNode;
  noLayout?: boolean; // Allow pages to disable navbar & footer
}

const Layout = ({ children, noLayout }: LayoutProps) => {
  if (noLayout) {
    return <>{children}</>; // Return only children if noLayout is true
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-900 text-white">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
