import React, { useState } from "react";

export interface Video {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  views: string;
  channelName: string;
}

export interface Playlist {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  videoCount: number;
  totalDuration: string;
  videos: Video[];
}

// PlaylistPage.tsx

const PlaylistPage: React.FC = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(
    null
  );
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [newPlaylistName, setNewPlaylistName] = useState<string>("");
  const [newPlaylistDescription, setNewPlaylistDescription] =
    useState<string>("");

  // Sample data with proper typing
  const [playlists, setPlaylists] = useState<Playlist[]>([
    {
      id: 1,
      name: "React Tutorials",
      description: "Best React tutorials and tips",
      thumbnail: "/api/placeholder/320/180",
      videoCount: 15,
      totalDuration: "2h 30m",
      videos: [
        {
          id: 1,
          title: "React Hooks Explained",
          duration: "12:34",
          thumbnail: "/api/placeholder/320/180",
          views: "15K",
          channelName: "React Masters",
        },
        {
          id: 2,
          title: "Advanced State Management",
          duration: "15:20",
          thumbnail: "/api/placeholder/320/180",
          views: "10K",
          channelName: "React Masters",
        },
        {
          id: 3,
          title: "Building Custom Hooks",
          duration: "08:45",
          thumbnail: "/api/placeholder/320/180",
          views: "8K",
          channelName: "React Masters",
        },
      ],
    },
    {
      id: 2,
      name: "TypeScript Basics",
      description: "Complete TypeScript guide for beginners",
      thumbnail: "/api/placeholder/320/180",
      videoCount: 8,
      totalDuration: "1h 45m",
      videos: [
        {
          id: 4,
          title: "TypeScript Setup",
          duration: "10:15",
          thumbnail: "/api/placeholder/320/180",
          views: "12K",
          channelName: "TS Guide",
        },
        {
          id: 5,
          title: "Types and Interfaces",
          duration: "14:30",
          thumbnail: "/api/placeholder/320/180",
          views: "9K",
          channelName: "TS Guide",
        },
      ],
    },
  ]);

  const handleCreatePlaylist = (): void => {
    if (newPlaylistName.trim()) {
      const newPlaylist: Playlist = {
        id: playlists.length + 1,
        name: newPlaylistName,
        description: newPlaylistDescription,
        thumbnail: "/api/placeholder/320/180",
        videoCount: 0,
        totalDuration: "0m",
        videos: [],
      };
      setPlaylists([...playlists, newPlaylist]);
      setNewPlaylistName("");
      setNewPlaylistDescription("");
      setShowCreateModal(false);
    }
  };

  // Modal component with TypeScript
  const CreatePlaylistModal: React.FC = () => (
    <div
      className={`fixed inset-0 z-50 ${
        showCreateModal ? "flex" : "hidden"
      } items-center justify-center`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setShowCreateModal(false)}
      />
      <div className="relative bg-white rounded-lg w-full max-w-md p-6 mx-4">
        <h2 className="text-xl font-bold mb-4">Create New Playlist</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={newPlaylistName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewPlaylistName(e.target.value)
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter playlist name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={newPlaylistDescription}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setNewPlaylistDescription(e.target.value)
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter playlist description"
              rows={3}
            />
          </div>
          <div className="flex space-x-3">
            <button
              onClick={handleCreatePlaylist}
              className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Create
            </button>
            <button
              onClick={() => setShowCreateModal(false)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Video card component with TypeScript
  const VideoCard: React.FC<{ video: Video }> = ({ video }) => (
    <div className="flex gap-4 bg-white p-4 rounded-lg hover:bg-gray-50">
      <div className="relative w-48 flex-shrink-0">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full aspect-video object-cover rounded-lg"
        />
        <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{video.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{video.channelName}</p>
        <p className="text-sm text-gray-500 mt-1">{video.views} views</p>
      </div>
      <button className="text-gray-500 hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </button>
    </div>
  );

  // Playlist card component with TypeScript
  const PlaylistCard: React.FC<{ playlist: Playlist }> = ({ playlist }) => (
    <div
      onClick={() => setSelectedPlaylist(playlist)}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="relative">
        <img
          src={playlist.thumbnail}
          alt={playlist.name}
          className="w-full aspect-video object-cover rounded-t-lg"
        />
        <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          {playlist.videoCount} videos
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold line-clamp-1">{playlist.name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {playlist.description}
        </p>
        <p className="text-sm text-gray-500 mt-2">{playlist.totalDuration}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {!selectedPlaylist ? (
        // Playlists Overview
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Your Playlists</h1>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Create Playlist</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {playlists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </div>
      ) : (
        // Playlist Detail View
        <div className="max-w-7xl mx-auto space-y-6">
          <button
            onClick={() => setSelectedPlaylist(null)}
            className="flex items-center text-sm hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to playlists
          </button>

          <div className="flex items-start gap-6">
            <img
              src={selectedPlaylist.thumbnail}
              alt={selectedPlaylist.name}
              className="w-64 aspect-video object-cover rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold">{selectedPlaylist.name}</h1>
              <p className="text-gray-600 mt-2">
                {selectedPlaylist.description}
              </p>
              <p className="text-sm text-gray-500 mt-4">
                {selectedPlaylist.videoCount} videos •{" "}
                {selectedPlaylist.totalDuration}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {selectedPlaylist.videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      )}

      <CreatePlaylistModal />
    </div>
  );
};

export default PlaylistPage;
