
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";


const SideBar = () => {
   const list = [
   
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <span>Shorts</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span>Subscription</span>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <span>Home</span>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <span>Shorts</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span>Subscription</span>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <span>Home</span>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <span>Shorts</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span>Subscription</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span>Subscription</span>,
    },
    {
      icons: <IoHomeOutline size={"25px"} />,
      title: <span>Home</span>,
    },
    {
      icons: <SiYoutubeshorts size={"25px"} />,
      title: <span>Shorts</span>,
    },
    {
      icons: <MdOutlineSubscriptions size={"30px"} />,
      title: <span>Subscription</span>,
    },


  ];
const toggle = false
  return (
    <div
      className={`border border-gray-200 ${
        toggle ? " w-[15%] max-[1024px]:w-[25%] " : "w-[5%] max-[1024px]:w-[10%]"
      }  mt-16 overflow-y-scroll overflow-x-hidden fixed left-0 right-0 top-0 bottom-0 h-[100vh] max-[640px]:hidden `}
    >
      {list.map((element, index) => {
        return (
          <div
            className={`${toggle && "flex flex-row "}  mx-5 my-5 `}
            key={index}
          >
            {element.icons}
            <p
              className={`${
                toggle ? "ml-10 text-xl" : "text-sm ml-0 truncate text-left"
              } `}
            >
              {element.title}
            </p>
          </div>
        );
      })}
    </div>
  );

};

export default SideBar;

