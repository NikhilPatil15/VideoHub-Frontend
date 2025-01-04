import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store/store";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { setDarkTheme } from "../redux/Features/DarkThemeToggleSlice";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { useDropzone } from "react-dropzone";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  userName: string;
  fullName: string;
}
const Register = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const darkThemeToggler = useSelector(
    (state: RootState) => state.DarkTheme.dark
  );
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const dispatch = useDispatch<useAppDispatch>();
  const { register, handleSubmit } = useForm<IForm>();

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setAvatarFile(file);
    }
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg", ".gif"],
    },
    maxFiles: 1,
  });

  const onSubmitRegister = async (data: IForm) => {
    console.log("Login form submitted!: ", data);
    const formData = new FormData();

    formData.append("userName", data.userName);
    formData.append("email", data.email);
    formData.append("fullName", data.firstName + data.lastName);
    formData.append("password", data.password);

    // console.log("Avatar file: ", avatarFile);

    if (avatarFile) {
      formData.append("avatar", avatarFile); // Attach the avatar file
    }

    console.log("Regsiter data: ", formData);

    // const response = await axiosInstance.post("/register", formData);

    // console.log("Response: ", response);
  };

  const handleDarkThemeClick = () => {
    const newThemeState: boolean = !darkThemeToggler;
    dispatch(setDarkTheme(newThemeState));
  };

  return (
    <div className="md:space-y-6 space-y-3">
      {/* Register Header */}
      <div className="flex justify-between">
        <div>
          <h1
            className={`${
              darkThemeToggler ? "text-white" : "text-black"
            } text-2xl  font-bold`}
          >
            Register
          </h1>
          <p
            className={`text-sm ${
              darkThemeToggler ? "text-white" : "text-black"
            } mt-1`}
          >
            Create a new account to get started.
          </p>
        </div>
        <div>
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

      {/* Register Form */}
      <form
        action=""
        className="md:space-y-6 space-y-4"
        onSubmit={handleSubmit(onSubmitRegister)}
      >
        <div className="md:space-y-4 space-y-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label
                className={`text-sm font-medium ${
                  darkThemeToggler ? "text-white" : "text-black"
                }`}
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className={`w-full px-3 py-2 border border-gray-500 shadow-sm focus:outline-none  placeholder-gray-400 ${
                  darkThemeToggler
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                {...register("firstName", { required: true })}
              />
            </div>
            <div className="space-y-1">
              <label
                className={`text-sm font-medium ${
                  darkThemeToggler ? "text-white" : "text-black"
                }`}
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className={`w-full px-3 py-2 border border-gray-500 shadow-sm focus:outline-none  placeholder-gray-400 ${
                  darkThemeToggler
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                {...register("lastName", { required: true })}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              className={`text-sm font-medium ${
                darkThemeToggler ? "text-white" : "text-black"
              }`}
            >
              Username
            </label>
            <input
              type="text"
              placeholder="username"
              className={`w-full px-3 py-2 border border-gray-500 shadow-sm focus:outline-none  placeholder-gray-400 ${
                darkThemeToggler ? "bg-black text-white" : "bg-white text-black"
              }`}
              {...register("userName", { required: true })}
            />
          </div>
          <div className="space-y-1">
            <label
              className={`text-sm font-medium ${
                darkThemeToggler ? "text-white" : "text-black"
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
                darkThemeToggler ? "text-white" : "text-black"
              }`}
            >
              Avatar
            </label>
            <div>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-md p-6 flex justify-center items-center ${
                  isDragActive
                    ? "border-blue-500 bg-blue-100"
                    : "border-gray-500"
                }`}
              >
                <input {...getInputProps()} />
                {avatarFile ? (
                  <img
                    src={URL.createObjectURL(avatarFile)}
                    alt="Avatar preview"
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <p className="text-center text-sm">
                    {isDragActive
                      ? "Drop the file here..."
                      : "Drag and drop your avatar here, or click to select a file."}
                  </p>
                )}
              </div>

              {avatarFile && (
                <div className="mt-4 text-center">
                  <button
                    onClick={() => setAvatarFile(null)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <label
              className={`text-sm font-medium ${
                darkThemeToggler ? "text-white" : "text-black"
              }`}
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
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

          <div className="space-y-1">
            <label
              className={`text-sm font-medium ${
                darkThemeToggler ? "text-white" : "text-black"
              }`}
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className={`w-full px-3 py-2 border border-gray-500 shadow-sm focus:outline-none  placeholder-gray-400 ${
                  darkThemeToggler
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
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
        <button
          type="submit"
          className={`px-3 py-2 border rounded-md ${
            darkThemeToggler
              ? "border-white text-white hover:bg-slate-100 hover:text-black"
              : "border-black text-black hover:bg-black hover:text-white"
          } hover:scale-105 duration-300 w-full`}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
