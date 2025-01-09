import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Clock } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channelName: string;
  views: number;
  uploadDate: string;
  description: string;
}

const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState<Video[]>([]);
  const query = searchParams.get("q") || "";
  const darkThemeToggler = useSelector((state:RootState) => state.DarkTheme.dark)

  useEffect(() => {
    const fetchVideos = async () => {
      // Simulate fetching data based on the search query
      const results: Video[] = [
        {
          id: "1",
          title: "Learn React in 10 Minutes",
          thumbnail: "/api/placeholder/400/320",
          channelName: "React Mastery",
          views: 12345,
          uploadDate: "2 days ago",
          description: "A quick guide to learn React basics in 10 minutes. We'll cover components, props, state, and more in this crash course.",
        },
        {
          id: "2",
          title: "Learn React in 10 Minutes",
          thumbnail: "/api/placeholder/400/320",
          channelName: "React Mastery",
          views: 12345,
          uploadDate: "2 days ago",
          description: "A quick guide to learn React basics in 10 minutes. We'll cover components, props, state, and more in this crash course.",
        },
        {
          id: "3",
          title: "Learn React in 10 Minutes",
          thumbnail: "/api/placeholder/400/320",
          channelName: "React Mastery",
          views: 12345,
          uploadDate: "2 days ago",
          description: "A quick guide to learn React basics in 10 minutes. We'll cover components, props, state, and more in this crash course.",
        },
        {
          id: "4",
          title: "Learn React in 10 Minutes",
          thumbnail: "/api/placeholder/400/320",
          channelName: "React Mastery",
          views: 12345,
          uploadDate: "2 days ago",
          description: "A quick guide to learn React basics in 10 minutes. We'll cover components, props, state, and more in this crash course.",
        },
        {
          id: "5",
          title: "Learn React in 10 Minutes",
          thumbnail: "/api/placeholder/400/320",
          channelName: "React Mastery",
          views: 12345,
          uploadDate: "2 days ago",
          description: "A quick guide to learn React basics in 10 minutes. We'll cover components, props, state, and more in this crash course.",
        },
        {
          id: "6",
          title: "Learn React in 10 Minutes",
          thumbnail: "/api/placeholder/400/320",
          channelName: "React Mastery",
          views: 12345,
          uploadDate: "2 days ago",
          description: "A quick guide to learn React basics in 10 minutes. We'll cover components, props, state, and more in this crash course.",
        },
        {
          id: "7",
          title: "Learn React in 10 Minutes",
          thumbnail: "/api/placeholder/400/320",
          channelName: "React Mastery",
          views: 12345,
          uploadDate: "2 days ago",
          description: "A quick guide to learn React basics in 10 minutes. We'll cover components, props, state, and more in this crash course.",
        },
        {
          id: "8",
          title: "Tailwind CSS for Beginners",
          thumbnail: "/api/placeholder/400/320",
          channelName: "Design Simplified",
          views: 56789,
          uploadDate: "5 days ago",
          description: "Learn how to use Tailwind CSS for modern web design. Master utility classes and responsive design principles.",
        },
      ];

      const filteredResults = results.filter((video) =>
        video.title.toLowerCase().includes(query.toLowerCase())
      );
      setVideos(filteredResults);
    };
    fetchVideos();
  }, [query]);

  return (
    <div className={` min-h-screen ${darkThemeToggler ? 'bg-[#1a1a1a]' : 'bg-gray-50'} absolute w-full flex justify-center items-center flex-col transition-all duration-300 ease-in-out`}>
      <div className="mt-20 mx-auto px-6 py-4">
        <h1 className="text-xl font-medium mb-4 text-gray-500">
          Search Results for "{query}"
        </h1>
        
        {videos.length > 0 ? (
          <div className="space-y-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className={`flex flex-col md:flex-col lg:flex-row gap-4 ${darkThemeToggler ? 'bg-[#2a2a2a] hover:brightness-150' : 'bg-white hover:brightness-90'}   p-4 rounded-lg cursor-pointer w-full transition-all duration-300 ease-in-out`}
              >
                {/* Thumbnail */}
                <div className="flex-shrink-0">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-64 h-36 object-cover rounded-lg"
                  />
                </div>

                {/* Video Info */}
                <div className="flex-grow">
                  <h2 className={`text-lg font-medium ${darkThemeToggler ? 'text-white' : 'text-black'} leading-snug mb-1`}>
                    {video.title}
                  </h2>
                  
                  <div className="flex items-center text-sm text-gray-500 space-x-2 mb-2">
                    <span>{video.views.toLocaleString()} views</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {video.uploadDate}
                    </span>
                  </div>

                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                    <span className={`text-sm ${darkThemeToggler ? 'text-white' : 'text-black'} font-medium`}>
                      {video.channelName}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 line-clamp-2">
                    {video.description}
                  </p>


                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No results found for "{query}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;