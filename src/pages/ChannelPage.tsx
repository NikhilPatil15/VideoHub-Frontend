import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

const ChannelPage: React.FC = () => {
  const { channelId } = useParams<{ channelId: string }>();
  const [banner, setBanner] = useState<string | null>('');
  const [isBannerEditing, setIsBannerEditing] = useState<boolean>(false);
  const [posts, setPosts] = useState<string[]>([]);
  const [newPost, setNewPost] = useState<string>('');
  const [isPostEditing, setIsPostEditing] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState('HOME');
  const isSidebarCollapsed = useSelector((state: RootState) => state.Toggle.open);
  const darkThemeToggler = useSelector((state: RootState) => state.DarkTheme.dark);

  const channelInfo = {
    name: 'John Doe',
    bio: 'Welcome to my channel where I share coding tutorials and tech content!',
    avatar: '/api/placeholder/64/64',
    banner: banner,
    subscriberCount: 3000,
    videos: [
      { id: 1, title: 'How to build a React app from scratch - Complete Guide 2024', thumbnail: '/api/placeholder/320/180' },
      { id: 2, title: 'JavaScript Basics Every Developer Should Know', thumbnail: '/api/placeholder/320/180' },
      { id: 3, title: 'Build a YouTube Clone with React & TypeScript', thumbnail: '/api/placeholder/320/180' },
      { id: 4, title: 'Modern CSS Techniques for Better Styling', thumbnail: '/api/placeholder/320/180' },
    ],
  };

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBanner(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg", ".gif"],
    },
    maxFiles: 1,
  });

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      setPosts([newPost, ...posts]);
      setNewPost('');
      setIsPostEditing(false);
    }
  };

  const tabs = ['HOME', 'VIDEOS', 'COMMUNITY', 'PLAYLISTS', 'CHANNELS', 'ABOUT'];

  return (
    <div className={` transition-all duration-300 min-h-screen 
      ${!isSidebarCollapsed ? 'md:ml-20' : 'md:ml-60'} absolute mt-16   ${darkThemeToggler ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
      {/* Banner Section - Responsive height based on screen size */}
      <div className={`  ${darkThemeToggler ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
        {channelInfo.banner ? (
          <img
            src={channelInfo.banner}
            alt="Channel Banner"
            className="w-full h-32 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover"
          />
        ) : (
          <div
            {...getRootProps()}
            className={`w-full h-32 sm:h-48 md:h-56 lg:h-64 xl:h-72 ${darkThemeToggler ? 'bg-[#1a1a1a]' : 'bg-white'} flex items-center justify-center cursor-pointer`}
          >
            <input {...getInputProps()} />
            <p className="text-gray-500 text-center text-sm sm:text-base px-4">
              Drag & drop a banner image here, or click to select one.
            </p>
          </div>
        )}
      </div>

      {/* Main Content Container - Responsive padding and max-width */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Channel Info Section - Responsive layout and spacing */}
        <div className={`flex flex-col sm:flex-row items-center sm:items-start py-4 sm:py-6 border-b ${darkThemeToggler ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
          <img
            src={channelInfo.avatar}
            alt={channelInfo.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 sm:mb-0 sm:mr-6"
          />
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold">{channelInfo.name}</h1>
            <div className="text-sm text-gray-600 mt-1 space-y-1">
              <p>@johndoe</p>
              <p>{channelInfo.subscriberCount.toLocaleString()} subscribers • 120 videos</p>
              <p className="line-clamp-2 max-w-2xl">{channelInfo.bio}</p>
            </div>
            <button className="mt-4 px-4 sm:px-6 py-2 sm:py-2.5 bg-black text-white text-sm sm:text-base font-medium rounded-full hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Navigation Tabs - Responsive scrolling and spacing */}
        <div className={`sticky top-14 ${darkThemeToggler ? 'bg-[#0f0f0f] text-white' : 'bg-white'} z-10`}>
          <div className={`flex items-center justify-center space-x-2 border-b ${!darkThemeToggler? 'border-gray-200' : 'border-black'} gap-2`}>
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={` sm:px-3 py-3 sm:py-4 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap
                  ${activeTab === tab 
                    ? `border-b-2 ${darkThemeToggler ? 'border-white ' : 'border-black text-black'} ` 
                    :`${darkThemeToggler?'text-white':'text-black'} hover:scale-105`
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Grid - Responsive grid layout */}
        <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {channelInfo.videos.map((video) => (
            <div key={video.id} className="cursor-pointer group">
              <div className="relative aspect-video mb-2 sm:mb-3">
                <img
                  src={video.thumbnail}
                  
                  className="w-full h-full object-cover rounded-lg group-hover:rounded-none transition-all duration-200"
                />
                <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 rounded">
                  12:34
                </div>
              </div>
              <h3 className="font-medium line-clamp-2 text-xs sm:text-sm">{video.title}</h3>
              <div className="mt-1 text-xs sm:text-sm text-gray-600">
                <p>15K views • 2 days ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChannelPage;