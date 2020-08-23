import React from 'react'
import './Css/VideoHeader.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIcon from '@material-ui/icons/CameraAlt';


function VideoHeader({ channel }) {
    return (
        <div className="videoHeader">
            <div className="videohead">
                <ArrowBackIosIcon />
                <h3>{channel}</h3>
                <CameraAltIcon /></div>


        </div>
    )
}

export default VideoHeader
