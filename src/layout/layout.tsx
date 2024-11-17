import { NavigationMenu } from "../components/navigationMenu";
import { Outlet } from "react-router-dom";
import * as reactRouter from "react-router-dom";
import * as react from 'react';
import DetectPlatform from "../shared/services/platformDetector";
import { Toaster } from "react-hot-toast";
import { InstallPrompt } from "../components/install";

export default function Layout() {
  const path=reactRouter.useLocation();
  const [platform,setPlatform]=react.useState<string|null>(null);
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
  react.useCallback(()=>{
    setPlatform(DetectPlatform())
  },[DetectPlatform()])
  
  return (
    <>
    {/* <Toaster position="bottom-left"/>
          <InstallPrompt/> */}
      <div className=" md:justify-center md:items-center  md:hidden  bg-[var(--bg-1)] ">
        <div className="md:max-w-[400px] sm:w-full  flex flex-col gap-4 ">
          <NavigationMenu />
          <Outlet />
        </div>
      </div>
    </>
  );
}
