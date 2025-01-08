import { Outlet, useLocation } from "react-router-dom";
import {Navbar, SideBar} from '../components/index'
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

const AppLayout = () => {
  const location = useLocation();
  const showSidebar = !["/watch", "/auth"].some((path) =>
    location.pathname.startsWith(path)
  );
  const darkTheme = useSelector((state:RootState) => state.DarkTheme.dark)
  return (
    <div className={`flex transition-all  duration-300 ease-in-out  ${darkTheme ? `bg-[#1a1a1a]`:`bg-white`} `}>

      <Navbar />
      {showSidebar && <SideBar />}
      <main className={`transition-all  duration-300 ease-in-out  ${darkTheme ? `bg-[#1a1a1a] text-white`:`bg-white`} `}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
