import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { FiLoader } from "react-icons/fi";

interface IForm {
  fullName: string;
  username: string;
  email: string;
  avatar: string;
}

const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<IForm>({
    username: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://via.placeholder.com/150",
    fullName: "John  Doe",
  });
  const [loading, setLoading] = useState<boolean>(false);

 
  const darkThemeToggler = useSelector(
    (state: RootState) => state.DarkTheme.dark
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setUserData((prevData) => ({
            ...prevData,
            avatar: reader.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated user data:", userData);
    // Dispatch an action or make an API call to save changes

    setLoading(true);
    // const response = await axiosInstance.put('',)

    setLoading(false);
  };

  return (
    <div
      className={` absolute font-bold transition-all duration-300 ease-in-out ${
        darkThemeToggler ? `bg-[#0f0f0f] text-white` : `bg-white text-black`
      } w-full h-[100vh] px-4 flex items-center justify-center overflow-auto mt-14 md:mt-0`}
    >
      <form
        onSubmit={onFormSubmit}
        className={`${
          darkThemeToggler ? `bg-[#1a1a1a]` : `bg-white`
        } p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-500 space-y-4`}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Profile</h1>
        <div className="flex flex-col items-center  mb-6">
          <img
            src={userData.avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full mb-4"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="text-sm"
          />
        </div>

        <div className="space-y-1">
          <label
            className={`text-md font-medium ${
              !darkThemeToggler ? "text-black" : "text-white"
            }`}
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border border-gray-500 shadow-sm focus:outline-none  placeholder-gray-400 ${
              darkThemeToggler ? "bg-black text-white" : "bg-white text-black"
            }`}
          />
        </div>
        <div className="space-y-1">
          <label
            className={`text-md font-medium ${
              !darkThemeToggler ? "text-black" : "text-white"
            }`}
            htmlFor="fullName"
          >
            FullName
          </label>
          <input
            type="text"
            name="fullName"
            value={userData.fullName}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border border-gray-500 shadow-sm focus:outline-none  placeholder-gray-400 ${
              darkThemeToggler ? "bg-black text-white" : "bg-white text-black"
            }`}
          />
        </div>

        <div className="space-y-1">
          <label
            className={`text-md font-medium ${
              !darkThemeToggler ? "text-black" : "text-white"
            }`}
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border border-gray-500 shadow-sm focus:outline-none  placeholder-gray-400 ${
              darkThemeToggler ? "bg-black text-white" : "bg-white text-black"
            }`}
          />
        </div>

        {!loading ? (
          <button
            type="submit"
            className={`px-3 py-2 border rounded-md ${
              darkThemeToggler
                ? "border-white text-white hover:bg-slate-100 hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            } hover:scale-105 duration-300 w-full `}
          >
            Save Changes
          </button>
        ) : (
          <div
            className={`px-3 py-2 border rounded-md ${
              darkThemeToggler
                ? "border-white text-white hover:bg-slate-100 hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            } hover:scale-105 duration-300 w-full flex justify-center items-center text-2xl`}
          >
            <FiLoader className="animate-spin"/>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfilePage;
