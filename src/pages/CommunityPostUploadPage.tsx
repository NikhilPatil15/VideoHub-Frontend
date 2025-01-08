import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

interface PostData {
  title: string;
  content: string;
  image: string;
}

const CommunityPostUploadPage: React.FC = () => {
  const [postData, setPostData] = useState<PostData>({
    title: "",
    content: "",
    image: "",
  });

  const darkThemeToggler = useSelector(
    (state: RootState) => state.DarkTheme.dark
  );

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPostData({ ...postData, image: URL.createObjectURL(file) });
    }
  };

 const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    
  

    const form = new FormData();

    form.append("title", postData.title);
    form.append("description", postData.content);

    if (postData.image) {
      form.append("thumbnail", postData.image);
    }else{
        alert("Please upload a Thumbnail file.");
        return;
    }

  
    // const response = await axiosInstance.post(,form)
  };

  return (
    <div
      className={`absolute flex justify-center items-center min-h-screen ${
        darkThemeToggler ? "bg-[#1a1a1a]" : "bg-white"
      } w-full  mt-14 md:mt-0 transition-all duration-300 ease-in-out`}
    >
      <form
        onSubmit={handleSubmit}
        className={`${
          darkThemeToggler ? "bg-[#2a2a2a]" : "bg-white"
        } shadow-md rounded-lg p-6 w-full max-w-lg border border-gray-500 space-y-3 md:space-y-6 transition-all duration-300 ease-in-out mt-14 md:mt-24 mb-14`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create a Post</h2>

        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border border-gray-500 shadow-sm focus:outline-none  placeholder-gray-400 ${
              darkThemeToggler
                ? "bg-[#2a2a2a] text-white"
                : "bg-white text-black"
            } rounded-md transition-all duration-300 ease-in-out`}
            placeholder="Enter a title for your post"
            required
          />
        </div>

        {/* Content Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Content</label>
          <textarea
            name="content"
            value={postData.content}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border border-gray-500 shadow-sm focus:outline-none  placeholder-gray-400 ${
              darkThemeToggler
                ? "bg-[#2a2a2a] text-white"
                : "bg-white text-black"
            } rounded-md transition-all duration-300 ease-in-out`}
            rows={5}
            placeholder="Write something..."
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={`w-full px-3 py-2 border border-gray-500 shadow-sm focus:outline-none  placeholder-gray-400 ${
              darkThemeToggler
                ? "bg-[#2a2a2a] text-white"
                : "bg-white text-black"
            } rounded-md transition-all duration-300 ease-in-out`}
          />
        </div>
        {postData.image && (
          <div className="mb-4">
            <img
              src={postData.image}
              alt="Post Preview"
              className={`w-full px-3 py-2 border border-gray-500 shadow-sm focus:outline-none  placeholder-gray-400 ${
                darkThemeToggler
                  ? "bg-[#2a2a2a] text-white"
                  : "bg-white text-black"
              } rounded-md transition-all duration-300 ease-in-out`}
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className={`px-3 py-2 border rounded-md ${
            darkThemeToggler
              ? "border-white text-white hover:bg-slate-100 hover:text-black"
              : "border-black text-black hover:bg-[#2a2a2a] hover:text-white"
          } hover:scale-105 duration-300 w-full `}
        >
          Upload Post
        </button>
      </form>
    </div>
  );
};

export default CommunityPostUploadPage;
