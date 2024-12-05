import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "./VideoCard";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setToggle } from "../redux/Features/ToggleSlice";
import ContentLoader from "react-content-loader"; // Import react-content-loader
import { RootState, useAppDispatch } from "../redux/store/store";
import VideoHubBackend from '../assets/VideoHubBackend.png'
import youtubeClone from '../assets/youtubeClone.png'
const VideoContainer = () => {
  const [isLoading, setIsloading] = useState(true);
  const [video, setVideo] = useState<any>();
  const toggle = useSelector((state: RootState) => state.Toggle.open);
  const dispatch = useDispatch<useAppDispatch>();

  console.log("Type: ", typeof VideoHubBackend);
  
  const fetchStaticVideos = async () => {
    // Mock static data for frontend testing
    const staticData = [
      {
        id: "1",
        snippet: {
          title: "Frontend Development Tips",
          thumbnails: {
            high: {
              url: VideoHubBackend,
            },
          },
          channelTitle: "DevChannel",
          channelId: "channel_1",
          videoDuration: "20:00",
          channelAvatar:
            "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      },
      {
        id: "2",
        snippet: {
          title: "JavaScript Best Practices",
          thumbnails: {
            high: {
              url: youtubeClone,
            },
          },
          channelTitle: "CodeWithMe",
          channelId: "channel_2",
          videoDuration: "20:00",
          channelAvatar:
            "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      },
      {
        id: "3",
        snippet: {
          title: "JavaScript Best Practices",
          thumbnails: {
            high: {
              url: youtubeClone,
            },
          },
          channelTitle: "CodeWithMe",
          channelId: "channel_2",
          videoDuration: "20:00",
          channelAvatar:
            "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      },
      {
        id: "4",
        snippet: {
          title: "JavaScript Best Practices",
          thumbnails: {
            high: {
              url: youtubeClone,
            },
          },
          channelTitle: "CodeWithMe",
          channelId: "channel_2",
          videoDuration: "20:00",
          channelAvatar:
            "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      },
      {
        id: "5",
        snippet: {
          title: "JavaScript Best Practices",
          thumbnails: {
            high: {
              url: youtubeClone,
            },
          },
          channelTitle: "CodeWithMe",
          channelId: "channel_2",
          videoDuration: "20:00",
          channelAvatar:
            "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      },
      {
        id: "6",
        snippet: {
          title: "JavaScript Best Practices",
          thumbnails: {
            high: {
              url: youtubeClone,
            },
          },
          channelTitle: "CodeWithMe",
          channelId: "channel_2",
          videoDuration: "20:00",
          channelAvatar:
            "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      },
      {
        id: "7",
        snippet: {
          title: "JavaScript Best Practices",
          thumbnails: {
            high: {
              url: youtubeClone,
            },
          },
          channelTitle: "CodeWithMe",
          channelId: "channel_2",
          videoDuration: "20:00",
          channelAvatar:
            "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      },
      {
        id: "8",
        snippet: {
          title: "JavaScript Best Practices",
          thumbnails: {
            high: {
              url: youtubeClone,
            },
          },
          channelTitle: "CodeWithMe",
          channelId: "channel_2",
          videoDuration: "20:00",
          channelAvatar:
            "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      },
      {
        id: "9",
        snippet: {
          title: "JavaScript Best Practices",
          thumbnails: {
            high: {
              url: youtubeClone,
            },
          },
          channelTitle: "CodeWithMe",
          channelId: "channel_2",
          videoDuration: "20:00",
          channelAvatar:
            "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      },
      {
        id: "10",
        snippet: {
          title: "JavaScript Best Practices",
          thumbnails: {
            high: {
              url: youtubeClone,
            },
          },
          channelTitle: "CodeWithMe",
          channelId: "channel_2",
          videoDuration: "20:00",
          channelAvatar:
            "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      },
      {
        id: "11",
        snippet: {
          title: "JavaScript Best Practices",
          thumbnails: {
            high: {
              url: youtubeClone,
            },
          },
          channelTitle: "CodeWithMe",
          channelId: "channel_2",
          videoDuration: "20:00",
          channelAvatar:
            "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      },
      {
        id: "12",
        snippet: {
          title: "JavaScript Best Practices",
          thumbnails: {
            high: {
              url: youtubeClone,
            },
          },
          channelTitle: "CodeWithMe",
          channelId: "channel_2",
          videoDuration: "20:00",
          channelAvatar:
            "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      },

    ];

    // Simulate async behavior for testing purposes
    setTimeout(() => {
      setVideo(staticData);
      setIsloading(false);
    }, 1000);
  };

//   const fetchVideos = async() => {
//     const response = axios.get(backendUrl)
//   }

  useEffect(() => {
    fetchStaticVideos(); // Using static data for testing
  }, []);

  const handleClick = () => {
    dispatch(setToggle(false));
  };

  // Custom Loader for the Video Thumbnails
  const VideoThumbnailLoader = () => (
    <ContentLoader
      speed={2}
      width={400}
      height={300}
      viewBox="0 0 400 300"
      backgroundColor={toggle ? "#5a5a5a" : "#f3f3f3"}
      foregroundColor={toggle ? "#4a4a4a" : "#ecebeb"}
    >
      <rect x="0" y="0" rx="10" ry="10" width="400" height="200" />
      <rect x="0" y="220" rx="5" ry="5" width="300" height="20" />
      <rect x="0" y="250" rx="5" ry="5" width="150" height="15" />
    </ContentLoader>
  );

  if (isLoading)
    return (
      <div
        className={`grid ${
          toggle ? "grid-cols-3 gap-3" : "grid-cols-4 gap-4"
        } m-4 mt-14 max-[640px]:grid-cols-1 max-[1024px]:grid-cols-2`}
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <div className="w-full" key={index}>
            <VideoThumbnailLoader /> {/* Use custom loader */}
          </div>
        ))}
      </div>
    );

  return (
    <div
      className={`grid  ${
        toggle ? "grid-cols-3 gap-3" : "grid-cols-4 gap-4"
      } mt-14 max-[640px]:grid-cols-1  max-[1024px]:grid-cols-2 `}
    >
      {video.map((video: any, index: number) => (
        <Link
          key={index}
          to={`/video?videoId=${
            typeof video.id === "object" ? video.id.videoId : video.id
          }`}
          onClick={handleClick}
          
        >
          <VideoCard
            thumbnailUrl={video.snippet.thumbnails.high.url}
            videoTitle={video.snippet.title}
            channelName={video.snippet.channelTitle}
            channelId={video.snippet.channelId}
            videoDuration={video.snippet.videoDuration}
            channelAvatar={video.snippet.channelAvatar}
          />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
