import VideoContainer from "../components/VideoContainer";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

const HomePage = (): JSX.Element => {
  const toggle = useSelector((state: RootState) => state.Toggle.open);
  const darkTheme = useSelector((state: RootState) => state.DarkTheme.dark);
  return (
    <div
      className={`relative z-0 font-bold mt-10 transition-all duration-300 ease-in-out ${
        toggle
          ? "lg:w-[85%] md:w-[75%]  md:ml-auto lg:ml-auto"
          : "lg:w-[90%] lg:ml-36 md:w-[90%]  md:ml-auto"
      } ${
        darkTheme ? `bg-[#1a1a1a] text-white` : `bg-white text-black`
      } w-full pb-10  px-4 overflow-auto`}
    >
      <VideoContainer />
    </div>
  );
};

export default HomePage;
