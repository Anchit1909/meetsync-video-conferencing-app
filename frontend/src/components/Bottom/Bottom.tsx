import { Mic, Video, PhoneOff, MicOff, VideoOff } from "lucide-react";

interface BottomProps {
  muted: boolean;
  playing: boolean;
  toggleAudio: () => void;
  toggleVideo: () => void;
  leaveRoom: () => void;
}

const Bottom: React.FC<BottomProps> = ({
  muted,
  playing,
  toggleAudio,
  toggleVideo,
  leaveRoom,
}) => {
  return (
    <div className="absolute flex justify-between bottom-5 left-0 right-0 mx-auto w-[300px]">
      {muted ? (
        <MicOff
          className="p-4 rounded-full text-white cursor-pointer bg-secondary hover:bg-buttonPrimary"
          size={55}
          onClick={toggleAudio}
        />
      ) : (
        <Mic
          className="p-4 rounded-full text-white cursor-pointer bg-secondary hover:bg-buttonPrimary"
          size={55}
          onClick={toggleAudio}
        />
      )}
      {playing ? (
        <Video
          className="p-4 rounded-full text-white cursor-pointer bg-secondary hover:bg-buttonPrimary"
          size={55}
          onClick={toggleVideo}
        />
      ) : (
        <VideoOff
          className="p-4 rounded-full text-white cursor-pointer bg-secondary hover:bg-buttonPrimary"
          size={55}
          onClick={toggleVideo}
        />
      )}
      <PhoneOff
        className="p-4 rounded-full text-white cursor-pointer bg-secondary hover:bg-buttonPrimary"
        size={55}
        onClick={leaveRoom}
      />
    </div>
  );
};

export default Bottom;
