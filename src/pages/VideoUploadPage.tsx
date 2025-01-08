import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import axiosInstance from "../utils/axiosInstance";

interface FormData {
  title: string;
  description: string;
  thumbnail: string;
}

const VideoUploadPage: React.FC = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    thumbnail: "",
  });
  const darkThemeToggler = useSelector(
    (state: RootState) => state.DarkTheme.dark
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleThumbnailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData({ ...formData, thumbnail: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    
    alert("Video uploaded successfully!");

    const form = new FormData();

    form.append("title", formData.title);
    form.append("description", formData.description);

    if (formData.thumbnail) {
      form.append("thumbnail", formData.thumbnail);
    }else{
        alert("Please upload a Thumbnail file.");
        return;
    }
    if (videoFile) {
      form.append("video", videoFile);
    }else{
        alert("Please upload a video file.");
        return;
    }
  
    // const response = await axiosInstance.post(,form)
  };

  return (
    <div
      className={`absolute flex justify-center items-center min-h-screen ${
        darkThemeToggler ? "bg-[#1a1a1a]" : "bg-white"
      } w-full mt-14 md:mt-0 transition-all duration-300 ease-in-out`}
    >
      <form
        onSubmit={handleSubmit}
        className={`${
          darkThemeToggler ? "bg-[#2a2a2a]" : "bg-white"
        } mt-14 md:mt-24 mb-14 shadow-md rounded-lg p-6 w-full max-w-lg border border-gray-500 space-y-3 md:space-y-6 transition-all duration-300 ease-in-out`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Upload Video</h2>

        {/* Video Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Video File</label>
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className={`w-full px-3 py-2 border border-gray-500 shadow-sm focus:outline-none  placeholder-gray-400 ${
              darkThemeToggler
                ? "bg-[#2a2a2a] text-white"
                : "bg-white text-black"
            } rounded-md transition-all duration-300 ease-in-out`}
            required
          />
        </div>
        {previewUrl && (
          <div className="mb-4">
            <video
              controls
              src={previewUrl}
              className="w-full rounded-lg border border-gray-300"
            />
          </div>
        )}

        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border border-gray-500 shadow-sm focus:outline-none  placeholder-gray-400 ${
              darkThemeToggler
                ? "bg-[#2a2a2a] text-white"
                : "bg-white text-black"
            } rounded-md transition-all duration-300 ease-in-out`}
            required
          />
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border border-gray-500 shadow-sm focus:outline-none  placeholder-gray-400 ${
              darkThemeToggler
                ? "bg-[#2a2a2a] text-white"
                : "bg-white text-black"
            } rounded-md transition-all duration-300 ease-in-out`}
            rows={4}
          />
        </div>

        {/* Thumbnail Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Thumbnail</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleThumbnailChange}
            className={`w-full px-3 py-2 border border-gray-500 shadow-sm focus:outline-none  placeholder-gray-400 ${
              darkThemeToggler
                ? "bg-[#2a2a2a] text-white"
                : "bg-white text-black"
            } rounded-md transition-all duration-300 ease-in-out`}
          />
        </div>
        {formData.thumbnail && (
          <div className="mb-4">
            <img
              src={formData.thumbnail}
              alt="Thumbnail Preview"
              className="w-full h-48 object-cover rounded-lg border border-gray-300"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className={`px-3 py-2 border rounded-md ${
            darkThemeToggler
              ? "border-white text-white hover:bg-slate-100 hover:text-black"
              : "border-black text-black hover:bg-black hover:text-white"
          } hover:scale-105 duration-300 w-full `}
        >
          Upload Video
        </button>
      </form>
    </div>
  );
};

export default VideoUploadPage;
