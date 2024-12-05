import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

interface VideoCard {
  thumbnailUrl: string;
  videoTitle: string;
  channelName: string;
  channelId: string;
  videoDuration: string;
  channelAvatar: string;
}

const VideoCard = ({
  thumbnailUrl,
  videoTitle,
  channelName,
  channelId,
  videoDuration,
  channelAvatar,
}: VideoCard) => {
    
    const darkTheme = useSelector((state:RootState) => state.DarkTheme.dark)
    
    console.log("thumbnail url: ", thumbnailUrl);
    

  return (
    <div className={`w-90 cursor-pointer m-2 ${darkTheme ? `hover:brightness-50`: `hover:brightness-75`}  hover:rounded-none hover:transition-all`}>
      <img
        src={thumbnailUrl}
        className="w-full rounded-xl "
        width={400}
        height={300}
/>
      <div className="flex items-center m-2">
        <Avatar
          src={channelAvatar}
          size={"38px"}
          round={true}
          className="w-[20%]"
        />
        <div className="ml-4 w-[90%]">
          <h1 className=" text-lg text-pretty tracking-normal">
            {videoTitle}
          </h1>
          <p className="text-sm "> {channelName}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
