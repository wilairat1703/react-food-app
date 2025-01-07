import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
    children: ReactNode;
  }
  
  function Layout({ children }: LayoutProps) {
    return (
      <>
        <Header />
        <div>{children}</div>
        {/* <Footer /> */}
      </>
    );
  }
  
  export default Layout;
