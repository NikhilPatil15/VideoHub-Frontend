import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store/store";
import { setDarkTheme } from "../redux/Features/DarkThemeToggleSlice";

const LoginAndRegsiterPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const darkThemeToggler = useSelector(
    (state: RootState) => state.DarkTheme.dark
  );
  const user = useSelector((state: RootState) => state.Auth.user);
  const dispatch = useDispatch<useAppDispatch>();

  const handleDarkThemeClick = () => {
    const newThemeState: boolean = !darkThemeToggler;
    dispatch(setDarkTheme(newThemeState));
  };
  return (
    <div
      className={`min-h-screen ${
        darkThemeToggler
          ? "bg-[#0f0f0f] shadow-gray-600 shadow-md"
          : "bg-white  shadow-xl"
      } flex items-center justify-center p-4`}
    >
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
      </div>
      <div className="w-full max-w-md">
        {/* Tabs */}
        <div
          className={`mb-4 flex rounded-lg ${
            darkThemeToggler
              ? "bg-[#0f0f0f] shadow-gray-600 shadow-md text-white"
              : "bg-white shadow-gray-300 shadow-xl text-black"
          } p-1 shadow-sm`}
        >
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === "login"
                ? `bg-gray-100  ${
                    !darkThemeToggler ? "text-gray-800" : "text-black"
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
                ? `bg-gray-100  ${
                    !darkThemeToggler ? "text-gray-800" : "text-black"
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
          }  rounded-lg shadow-lg p-6`}
        >
          {activeTab === "login" ? (
            <div className="space-y-6">
              {/* Login Header */}
              <div>
                <h2 className={` text-2xl font-bold `}>Login</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Welcome back! Please enter your credentials to continue.
                </p>
              </div>

              {/* Login Form */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-500">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <svg
                        className="h-4 w-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {showPassword ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          />
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Login Actions */}
              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium">
                  Login
                </button>
                <button className="w-full text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Forgot Password?
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Register Header */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Register</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Create a new account to get started.
                </p>
              </div>

              {/* Register Form */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <svg
                        className="h-4 w-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {showPassword ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          />
                        )}
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <svg
                        className="h-4 w-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {showPassword ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          />
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Register Action */}
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium">
                Create Account
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginAndRegsiterPage;
