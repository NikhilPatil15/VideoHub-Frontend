import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { Login, Register } from "../components";

const AuthPage = ():JSX.Element => {
  const [activeTab, setActiveTab] = useState("login");
  const darkThemeToggler = useSelector(
    (state: RootState) => state.DarkTheme.dark
  );
  return (
    <div
      className={`min-h-screen ${
        darkThemeToggler
          ? "bg-[#0f0f0f] shadow-gray-600 shadow-md"
          : "bg-white  shadow-xl"
      } flex items-center justify-center p-4 overflow-y-scroll`}
    >
      <div className="w-full max-w-md ">
        {/* Tabs */}
        <div
          className={`mb-4 flex rounded-lg ${
            darkThemeToggler
              ? "bg-[#0f0f0f] shadow-gray-600 shadow-md text-white"
              : "bg-white shadow-gray-300 shadow-md text-black"
          }  border border-gray-500`}
        >
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1  text-sm font-medium rounded-md transition-colors ${
              activeTab === "login"
                ? `  ${
                    !darkThemeToggler
                      ? "bg-gray-800 text-white"
                      : " bg-gray-100 text-black"
                  }`
                : `${!darkThemeToggler ? "text-black" : "text-white"} `
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === "register"
                ? `  ${
                    !darkThemeToggler
                      ? "bg-gray-800 text-white"
                      : " bg-gray-100 text-black"
                  }`
                : `${!darkThemeToggler ? "text-black" : "text-white"} `
            }`}
          >
            Register
          </button>
        </div>

        {/* Content */}
        <div
          className={`${
            darkThemeToggler
              ? "bg-[#0f0f0f] shadow-gray-600 shadow-md text-white"
              : "bg-white shadow-gray-300 shadow-xl text-black"
          }  border-gray-500  border-2 rounded-lg p-6 `}
        >
          {activeTab === "login" ? (
            <Login/>
          ) : (
            <Register/>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
