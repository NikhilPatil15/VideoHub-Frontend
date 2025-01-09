import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

const ChannelPage: React.FC = () => {
  const { channelId } = useParams<{ channelId: string }>();
  const isSidebarCollapsed = useSelector((state: RootState) => state.Toggle.open);
  const [banner, setBanner] = useState<string | null>('');
  const [isBannerEditing, setIsBannerEditing] = useState<boolean>(false);
  const [posts, setPosts] = useState<string[]>([]);
  const [newPost, setNewPost] = useState<string>('');
  const [isPostEditing, setIsPostEditing] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState('HOME');

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
    <div className={`${!isSidebarCollapsed ? 'ml-20' : 'ml-60'} transition-all duration-300 min-h-screen bg-gray-50`}>
      {/* Banner Section */}
      <div className="relative w-full bg-gray-100">
        {channelInfo.banner ? (
          <img
            src={channelInfo.banner}
            alt="Channel Banner"
            className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover"
          />
        ) : (
          <div
            {...getRootProps()}
            className="w-full h-[200px] md:h-[250px] lg:h-[300px] bg-gray-200 flex justify-center items-center cursor-pointer"
          >
            <input {...getInputProps()} />
            <p className="text-gray-700 text-center px-4">Drag & drop a banner image here, or click to select one.</p>
          </div>
        )}
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Channel Info Section */}
        <div className="flex items-start py-6 border-b border-gray-200">
          <img
            src={channelInfo.avatar}
            alt={channelInfo.name}
            className="w-20 h-20 rounded-full mr-6"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{channelInfo.name}</h1>
            <div className="text-sm text-gray-600 mt-1 space-y-1">
              <p>@johndoe</p>
              <p>{channelInfo.subscriberCount.toLocaleString()} subscribers • 120 videos</p>
              <p className="line-clamp-2">{channelInfo.bio}</p>
            </div>
            <button
              className="mt-4 px-6 py-2.5 bg-black text-white font-medium rounded-full hover:bg-gray-800"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="sticky top-14 bg-gray-50 z-10">
          <div className="flex space-x-8 overflow-x-auto no-scrollbar border-b border-gray-200">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-4 text-sm font-medium transition-colors whitespace-nowrap
                  ${activeTab === tab 
                    ? 'border-b-2 border-black text-black' 
                    : 'text-gray-600 hover:text-black'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {channelInfo.videos.map((video) => (
            <div key={video.id} className="cursor-pointer group">
              <div className="relative aspect-video mb-3">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover rounded-xl group-hover:rounded-none transition-all duration-200"
                />
                <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 rounded">
                  12:34
                </div>
              </div>
              <h3 className="font-medium line-clamp-2 text-sm">{video.title}</h3>
              <div className="mt-1 text-sm text-gray-600">
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