import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSubscriptions, MdOutlineTrendingUp } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { FaHistory } from "react-icons/fa";
import { useState } from "react";
import { SlLogout } from "react-icons/sl";
import Avatar from "react-avatar";

const SideBar = ():JSX.Element => {
  const toggle = useSelector((state: RootState) => state.Toggle.open);
  const user = useSelector((state: RootState) => state.Auth.user);
  const darkTheme = useSelector((state: RootState) => state.DarkTheme.dark);

  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const list = [
    {
      icons: <IoHomeOutline size={"30px"} />,
      title: "Home",
    },
    {
      icons: <MdOutlineTrendingUp size={"30px"} />,
      title: "Trending",
    },

    // {
    //   icons: <RiContactsLine size={"30px"} />,
    //   title: "Contact",
    // },
  ];

  const authList = [
    {
      icons: (
        <Avatar
          src={
            user?.avatar ||
            "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
          size={"35px"}
          round="30px"
        />
      ),
      title: user?.userName || "Nikhil",
    },
    {
      icons: <IoHomeOutline size={"30px"} />,
      title: "Home",
    },
    {
      icons: <MdOutlineTrendingUp size={"30px"} />,
      title: "Trending",
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: "Subscriptions",
    },
    {
      icons: <FaHistory size={"30px"} />,
      title: "History",
    },
    // {
    //   icons: <RiContactsLine size={"30px"} />,
    //   title: "Contact",
    // },
    {
      icons: <SlLogout size={"30px"} />,
      title: "Logout",
    },
  ];

  const handleItemClick = (index: number) => {
    setActiveIndex(index); // Set the active index when an item is clicked
  };
  return (
    <div
      className={`z-50 ${
        toggle
          ? "w-[15%] max-[1024px]:w-[25%]  "
          : "w-[5%] max-[1024px]:w-[10%]"
      } mt-16 overflow-hidden fixed left-0 right-0 top-0 bottom-0  text-black  transition-all duration-300 ease-in-out  max-[769px]:hidden ${
        darkTheme
          ? "bg-[#0f0f0f] text-white shadow-gray-600 shadow-md"
          : "bg-white text-black shadow-2xl"
      }`}
    >
      <div className="flex flex-col space-y-4 py-6 px-4 gap-2 ">
        {!user ? (
          <>
            {list.map((element, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4  rounded-lg p-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:rounded-lg   ${
                  activeIndex === index
                    ? `bg-[#3a3a3a] text-white`
                    : "bg-transparent"
                }`}
                onClick={() => handleItemClick(index)}
              >
                <div className="text-2xl">{element.icons}</div>
                {toggle && (
                  <p className="text-lg font-medium  transition-colors duration-200">
                    {element.title}
                  </p>
                )}
              </div>
            ))}{" "}
          </>
        ) : (
          <>
            {authList.map((element, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4  rounded-lg p-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:rounded-lg ${
                  activeIndex === index
                    ? `bg-[#3a3a3a] text-white`
                    : "bg-transparent"
                }`}
                onClick={() => handleItemClick(index)}
              >
                <div className="text-2xl">{element.icons}</div>
                {toggle && (
                  <p className="text-lg font-medium  transition-colors duration-200">
                    {element.title}
                  </p>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SideBar;
