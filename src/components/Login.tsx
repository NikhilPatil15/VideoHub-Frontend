import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store/store";
import { useForm } from "react-hook-form";
import { setDarkTheme } from "../redux/Features/DarkThemeToggleSlice";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

interface IForm {
  email: string;
  password: string;
}

const Login = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const darkThemeToggler = useSelector(
    (state: RootState) => state.DarkTheme.dark
  );
  const dispatch = useDispatch<useAppDispatch>();
  const { register, handleSubmit } = useForm<IForm>();

  const handleDarkThemeClick = () => {
    const newThemeState: boolean = !darkThemeToggler;
    dispatch(setDarkTheme(newThemeState));
  };

  const onSubmitLogin = async (data: IForm) => {
    console.log("Login form submitted!");

    console.log("Data: ", data);

    // const response = await axiosInstance.post("/login", data);

    // console.log("Response: ", response);
  };
  return (
    <div className="space-y-6 ">
      {/* Login Header */}
      <div className=" flex justify-stretch ">
        <div>
          <h2 className={` text-2xl font-bold `}>Login</h2>
          <p
            className={`text-sm ${
              darkThemeToggler ? "text-white" : "text-black"
            } mt-1`}
          >
            Welcome back! Please enter your credentials to continue.
          </p>
        </div>
        <div className="p-2">
          {/* Dark theme toggler button */}

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
      </div>

      {/* Login Form */}
      <form
        action=""
        className="space-y-6"
        onSubmit={handleSubmit(onSubmitLogin)}
      >
        <div className="space-y-4">
          <div className="space-y-1">
            <label
              className={`text-sm font-medium ${
                !darkThemeToggler ? "text-black" : "text-white"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className={`w-full px-3 py-2 border border-gray-500 shadow-sm focus:outline-none  placeholder-gray-400 ${
                darkThemeToggler ? "bg-black text-white" : "bg-white text-black"
              }`}
              {...register("email", { required: true })}
            />
          </div>

          <div className="space-y-1">
            <label
              className={`text-sm font-medium ${
                !darkThemeToggler ? "text-black" : "text-white"
              }`}
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`w-full px-3 py-2 border border-gray-500 shadow-sm focus:outline-none  placeholder-gray-400 ${
                  darkThemeToggler
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                {...register("password", { required: true })}
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
        <div className="space-y-4 flex items-center justify-center flex-col ">
          <button
            type="submit"
            className={`px-4 py-2 border rounded-md ${
              darkThemeToggler
                ? "border-white text-white hover:bg-slate-100 hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }  duration-300  w-full`}
          >
            Login
          </button>
          <button className=" text-blue-600 hover:text-blue-700 text-sm font-medium">
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
