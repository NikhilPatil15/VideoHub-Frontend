import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { MessageCircle, ThumbsUp, ThumbsDown, Share2, X, ArrowLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosInstance";
import Avatar from "react-avatar";

interface CommentForm{
    comment:string;
}

const VideoDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showComments, setShowComments] = useState(false);
  const darkThemeToggler = useSelector(
      (state: RootState) => state.DarkTheme.dark
    );

  const {register, handleSubmit} = useForm<CommentForm>()  
  // Mock data
  const videoData = {
    title: "Sample Video Title That Could Be Really Long and Span Multiple Lines When Needed",
    description: "This is a sample video description. Replace this with actual data. It can be quite long and contain multiple paragraphs of information about the video content.\n\nYou can include links and other details here.",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    views: 12345678,
    likes: 678900,
    uploadedAt: "Jan 1, 2025",
    uploader: "John Doe",
    subscriberCount: "1.2M"
  };

  const comments = [
    { id: 1, user: "Alice Cooper", avatar: "/api/placeholder/40/40", content: "Great video! Very informative and well-presented.", likes: 1245, time: "2 days ago" },
    { id: 2, user: "Bob Wilson", avatar: "/api/placeholder/40/40", content: "This helped me understand the concept much better!", likes: 832, time: "1 day ago" },
    { id: 3, user: "Charlie Brown", avatar: "/api/placeholder/40/40", content: "Please make more videos like this! The examples were perfect.", likes: 428, time: "5 hours ago" },
  ];

  const relatedVideos = [
    { id: "1", title: "Related Video with a Long Title That Will Wrap to Multiple Lines", uploader: "Jane Smith", views: 234523, uploadedAt: "2 days ago", thumbnail: "/api/placeholder/150/150" },
    { id: "2", title: "Another Interesting Video Related to This Topic", uploader: "Alice Johnson", views: 453234, uploadedAt: "1 week ago", thumbnail: "/api/placeholder/150/150" },
    { id: "3", title: "Similar Content That Viewers Might Enjoy Watching Next", uploader: "Michael Brown", views: 789345, uploadedAt: "3 days ago", thumbnail: "/api/placeholder/150/150" },
    { id: "4", title: "More Related Content For The Viewer", uploader: "Chris Walker", views: 1023423, uploadedAt: "5 hours ago", thumbnail: "/api/placeholder/150/150" },
  ];

  const handleSubmitComment = async(data:CommentForm) => {
   
    // const response = await axiosInstance.post()

   console.log("Comment added!")
  };

  const CommentInput = () => (
    <form onSubmit={handleSubmit(handleSubmitComment)} className="flex items-start gap-4 mb-6">
      <div className={`${darkThemeToggler ? 'bg-black' : 'bg-white'} w-10 h-10 rounded-full flex-shrink-0`} />
      <div className="flex-1">
        <input
          type="text"
         
          
          placeholder="Add a comment..."
          className={`${darkThemeToggler ? 'bg-[#1a1a1a]' : 'bg-white'} w-full px-0 py-2 border-b border-gray-200 focus:outline-none`}
          {...register("comment",{required:true})}
        />
        
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              
              className="px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 rounded-full"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-full"
            >
              Comment
            </button>
          </div>
        
      </div>
    </form>
  );

  return (
    <div className={` ${darkThemeToggler ? 'bg-[#1a1a1a]' : 'bg-white'}  transition-all duration-300 ease-in-out min-h-screen  mt-14`}>
      {/* Main Container */}
      <div className="max-w-[1800px] mx-auto px-4 lg:px-6 pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            {/* Video Player Section */}
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
              <ReactPlayer
                url={videoData.url}
                controls
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
                playing
              />
            </div>

            {/* Video Title */}
            <h1 className="text-xl font-bold mt-4 mb-3">{videoData.title}</h1>

            {/* Video Stats & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{videoData.views.toLocaleString()} views</span>
                <span>•</span>
                <span>{videoData.uploadedAt}</span>
              </div>
              <div className="flex items-center gap-1">
                <button className={`${darkThemeToggler ? 'bg-[#1a1a1a] hover:bg-white hover:text-black ' : 'bg-white hover:bg-black hover:text-white ' }  flex items-center gap-2 transition-all duration-300 ease-in-out px-3 py-2 rounded-md  `}>
                  <ThumbsUp size={20} /> {videoData.likes.toLocaleString()}
                </button>
                <button className={`${darkThemeToggler ? 'bg-[#1a1a1a] hover:bg-white hover:text-black ' : 'bg-white hover:bg-black hover:text-white ' }  flex items-center gap-2 transition-all duration-300 ease-in-out px-4 py-2 rounded-md `}>
                  <ThumbsDown size={20} />
                </button>
                <button className={`${darkThemeToggler ? 'bg-[#1a1a1a] hover:bg-white hover:text-black ' : 'bg-white hover:bg-black hover:text-white ' }  flex items-center gap-2 transition-all duration-300 ease-in-out px-4 py-2 rounded-md `}>
                  <Share2 size={20} /> Share
                </button>
              </div>
            </div>

            {/* Channel Info */}
            <div className={`flex items-center justify-between mb-6 p-4 ${darkThemeToggler ? 'bg-[#1a1a1a] text-white' : 'bg-white text-black'} rounded-xl`}>
              <div className="flex items-center gap-4">
                
                <Avatar size="50px" className=" rounded-full"/>
                <div>
                  <div className="font-medium">{videoData.uploader}</div>
                  <div className="text-sm text-gray-500 bold">{videoData.subscriberCount} subscribers</div>
                </div>
              </div>
              <button className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800">
                Subscribe
              </button>
            </div>

            {/* Description */}
            <div className={` rounded-xl p-4 mb-6 ${darkThemeToggler ? 'bg-[#2a2a2a] text-white' : 'bg-white text-black'}`}>
              <p className="whitespace-pre-wrap text-sm">{videoData.description}</p>
            </div>

            {/* Desktop Comments Section */}
            <div className="hidden lg:block">
              <h3 className="text-xl font-bold mb-6">{comments.length} Comments</h3>
              
              {/* Desktop Comment Input */}
              <CommentInput />

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map(comment => (
                  <div key={comment.id} className="flex gap-4">
                    <img
                      src={comment.avatar}
                      alt={comment.user}
                      className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{comment.user}</span>
                        <span className="text-sm text-gray-500">{comment.time}</span>
                      </div>
                      <p className="mt-1">{comment.content}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <button className="flex items-center gap-1 text-sm hover:bg-gray-100 p-2 rounded-full">
                          <ThumbsUp size={16} /> {comment.likes.toLocaleString()}
                        </button>
                        <button className="flex items-center gap-1 text-sm hover:bg-gray-100 p-2 rounded-full">
                          <ThumbsDown size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Videos Sidebar */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {relatedVideos.map((video) => (
                <div key={video.id} className="flex gap-2 cursor-pointer group">
                  <div className="w-40 aspect-video bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-600">
                      {video.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">{video.uploader}</p>
                    <p className="text-xs text-gray-600">
                      {video.views.toLocaleString()} views • {video.uploadedAt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Comments Button */}
      <button
        onClick={() => setShowComments(true)}
        className="lg:hidden fixed bottom-4 right-4 bg-gray-900 text-white rounded-full p-4 shadow-lg"
      >
        <MessageCircle size={24} />
      </button>

      {/* Mobile Comments Drawer */}
      {showComments && (
        <div className="lg:hidden fixed inset-0 bg-white z-50">
          {/* Header */}
          <div className="flex items-center gap-4 p-4 border-b">
            <button 
              onClick={() => setShowComments(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ArrowLeft size={24} />
            </button>
            <h3 className="text-xl font-bold">{comments.length} Comments</h3>
          </div>

          {/* Mobile Comment Input */}
          <div className="p-4 border-b">
            <CommentInput />
          </div>

          {/* Comments List */}
          <div className="p-4 space-y-4 overflow-y-auto" style={{ height: "calc(100vh - 180px)" }}>
            {comments.map(comment => (
              <div key={comment.id} className="flex gap-4">
                <img
                  src={comment.avatar}
                  alt={comment.user}
                  className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{comment.user}</span>
                    <span className="text-sm text-gray-500">{comment.time}</span>
                  </div>
                  <p className="mt-1">{comment.content}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <button className="flex items-center gap-1 text-sm">
                      <ThumbsUp size={16} /> {comment.likes.toLocaleString()}
                    </button>
                    <button className="flex items-center gap-1 text-sm">
                      <ThumbsDown size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDetailsPage;