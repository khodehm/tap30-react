import { NavigationMenu } from "../components/navigationMenu";
import { Outlet } from "react-router-dom";
import * as reactRouter from "react-router-dom";
import * as react from 'react';

export default function Layout() {
  const path=reactRouter.useLocation();

  react.useEffect(() => {
    if (path.pathname==="/services") {
      document
        .querySelector('meta[name="theme-color"]')!
        .setAttribute("content", "#143166");
    } else {
      document
        .querySelector('meta[name="theme-color"]')!
        .setAttribute("content", "#fff");
    } 
  }, [path]);
  return (
    <>
      <div className="flex justify-center items-center   bg-[var(--bg-1)] md:hidden">
        <div className="w-full md:max-w-[400px]  md:flex md:flex-col md:items-center md:justify-center">
          <NavigationMenu />
          <Outlet />
        </div>
      </div>
    </>
  );
}
