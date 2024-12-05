import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme } from "../redux/Features/DarkThemeToggleSlice";
import Avatar from "react-avatar";
import { IoSearch } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiLight } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { setToggle } from "../redux/Features/ToggleSlice";
import type { RootState } from "../redux/store/store";
import type { useAppDispatch } from "../redux/store/store";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const toggler = useSelector((state: RootState) => state.Toggle.open);
  const darkThemeToggler = useSelector(
    (state: RootState) => state.DarkTheme.dark
  );
  const user = useSelector((state: RootState) => state.Auth.user);
  const dispatch = useDispatch<useAppDispatch>();
  const [isSuggestion, setIsSuggestion] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleDarkThemeClick = () => {
    const newThemeState: boolean = !darkThemeToggler;
    dispatch(setDarkTheme(newThemeState));
  };

  const handleTogglerClick = () => {
    dispatch(setToggle(!toggler));
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`flex justify-between items-center fixed w-full z-10 p-4 ${
        darkThemeToggler ? "bg-[#1f1f1f]" : "bg-white"
      } shadow-md`}
    >
      <div className="flex items-center gap-4">
        <RxHamburgerMenu
          size={"30px"}
          className={`cursor-pointer ${
            darkThemeToggler ? "text-white" : "text-black"
          }`}
          onClick={handleTogglerClick}
        />
      </div>

      <div className="flex items-center flex-1 max-w-md mx-auto px-3">
        <div
          className={`flex w-full border  ${
            darkThemeToggler ? "" : "border-black"
          } rounded-full overflow-hidden`}
        >
          <input
            type="text"
            placeholder="Search"
            value={input}
            onFocus={() => setIsSuggestion(true)}
            onChange={(e) => setInput(e.target.value)}
            className={`w-full px-4 py-2 outline-none ${
              darkThemeToggler
                ? "bg-[#1f1f1f] text-white "
                : "bg-white text-black "
            }`}
          />
          <button className="px-4 py-2">
            <IoSearch
              size={"22px"}
              className={`${darkThemeToggler ? "text-white" : "text-black"}`}
            />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {!darkThemeToggler ? (
          <MdOutlineDarkMode
            size={"30px"}
            className="cursor-pointer hover:-translate-y-1 hover:scale-105 duration-300 shadow-lg hover:shadow-xl"
            onClick={() => handleDarkThemeClick()}
          />
        ) : (
          <CiLight
            size={"30px"}
            className="cursor-pointer hover:-translate-y-1 hover:scale-105 duration-300 text-white"
            onClick={() => handleDarkThemeClick()}
          />
        )}

        {!user ? (
          <div className="hidden sm:flex gap-2">
            <button
              className={`px-3 py-2 border rounded-md ${
                darkThemeToggler
                  ? "border-white text-white hover:bg-slate-100 hover:text-black"
                  : "border-black text-black hover:bg-black hover:text-white"
              } hover:scale-105 duration-300`}
            >
              Register
            </button>
            <button
              className={`px-3 py-2 border rounded-md ${
                darkThemeToggler
                  ? "border-white text-white hover:bg-slate-100 hover:text-black"
                  : "border-black text-black hover:bg-black hover:text-white"
              } hover:scale-105 duration-300`}
            >
              Login
            </button>
          </div>
        ) : (
          <Avatar
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            size={"35px"}
            round="30px"
          />
        )}
      </div>
      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-20 flex flex-col justify-center items-center md:hidden gap-5 ${
            darkThemeToggler ? "bg-[#1f1f1f]" : "bg-white"
          }`}
        >
          <button
            className={`absolute top-5 right-5 text-2xl`}
            onClick={handleTogglerClick}
          >
            <IoMdClose
              size={"30px"}
              className={`${darkThemeToggler ? "text-white" : "text-black"}`}
            />
          </button>
          {!user ? (
            <>
              <button
                className={`px-6 py-3 border rounded-md w-[120px] ${
                  darkThemeToggler
                    ? "border-white text-white bg-transparent hover:bg-[#444444] hover:text-white"
                    : "border-black text-black bg-transparent hover:bg-[#f0f0f0] hover:text-black"
                } transform transition-all duration-300 ease-in-out shadow-md hover:shadow-lg`}
              >
                Home
              </button>
              <button
                className={`px-6 py-3 border rounded-md w-[120px] ${
                  darkThemeToggler
                    ? "border-white text-white bg-transparent hover:bg-[#444444] hover:text-white"
                    : "border-black text-black bg-transparent hover:bg-[#f0f0f0] hover:text-black"
                } transform transition-all duration-300 ease-in-out shadow-md hover:shadow-lg`}
              >
                Register
              </button>
              <button
                className={`px-6 py-3 border rounded-md w-[120px] ${
                  darkThemeToggler
                    ? "border-white text-white bg-transparent hover:bg-[#444444] hover:text-white"
                    : "border-black text-black bg-transparent hover:bg-[#f0f0f0] hover:text-black"
                } transform transition-all duration-300 ease-in-out shadow-md hover:shadow-lg`}
              >
                Login
              </button>
            </>
          ) : (
            <>
              <button
                className={`px-6 py-3 border rounded-md w-[120px] ${
                  darkThemeToggler
                    ? "border-white text-white bg-transparent hover:bg-[#444444] hover:text-white"
                    : "border-black text-black bg-transparent hover:bg-[#f0f0f0] hover:text-black"
                } transform transition-all duration-300 ease-in-out shadow-md hover:shadow-lg`}
              >
                Home
              </button>
              <button
                className={`px-6 py-3 border rounded-md w-[120px] ${
                  darkThemeToggler
                    ? "border-white text-white bg-transparent hover:bg-[#444444] hover:text-white"
                    : "border-black text-black bg-transparent hover:bg-[#f0f0f0] hover:text-black"
                } transform transition-all duration-300 ease-in-out shadow-md hover:shadow-lg`}
              >
                Profile
              </button>
              <button
                className={`px-6 py-3 border rounded-md w-[120px] ${
                  darkThemeToggler
                    ? "border-white text-white bg-transparent hover:bg-[#444444] hover:text-white"
                    : "border-black text-black bg-transparent hover:bg-[#f0f0f0] hover:text-black"
                } transform transition-all duration-300 ease-in-out shadow-md hover:shadow-lg`}
              >
                Your Videos
              </button>
              <button
                className={`px-6 py-3 border rounded-md w-[120px] ${
                  darkThemeToggler
                    ? "border-white text-white bg-transparent hover:bg-[#444444] hover:text-white"
                    : "border-black text-black bg-transparent hover:bg-[#f0f0f0] hover:text-black"
                } transform transition-all duration-300 ease-in-out shadow-md hover:shadow-lg`}
              >
                History
              </button>
              <button
                className={`px-6 py-3 border rounded-md w-[120px] ${
                  darkThemeToggler
                    ? "border-white text-white bg-transparent hover:bg-[#444444] hover:text-white"
                    : "border-black text-black bg-transparent hover:bg-[#f0f0f0] hover:text-black"
                } transform transition-all duration-300 ease-in-out shadow-md hover:shadow-lg`}
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
