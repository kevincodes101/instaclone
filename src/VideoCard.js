import React, { useRef, useState } from 'react';
import './Css/VideoCard.css';
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideoCard(probs) {


    const [isVideoPlaying, setisVideoPlaying] = useState(false)
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (isVideoPlaying) {
            videoRef.current.pause();
            setisVideoPlaying(false)

        }
        else {
            videoRef.current.play();
            setisVideoPlaying(true);

        }

    }

    return (
        <div className="VideoCard">

            <VideoHeader
                channel={probs.channel}
            />



            <video ref={videoRef} onClick={onVideoPress} className="videoSequence" loop src={probs.url} ></video>

            <VideoFooter
                like={probs.likes}
                share={probs.share}
                song={probs.song}
                channel={probs.channel}



            />


        </div>
    )
}

export default VideoCard
