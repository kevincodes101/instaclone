import React from 'react'
import './Css/VideoFooter.css'
import { Button, Avatar } from '@material-ui/core'
import Ticker from "react-ticker"
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import SendIcon from '@material-ui/icons/Send';

function VideoFooter({ channel, like, share, song }) {
    return (
        <div className="videoFooter">
            <div className="avathar">
                <Avatar />

            </div>


            <div className="videoText">
                <h3>{channel} ...  <Button >Follow</Button> </h3>


            </div>
            <div className="videoFooter_ticker">
                <MusicNoteIcon fontSize="small"
                    className="videoFppter_icon" />
                <Ticker className="ticker" mode="smooth">
                    {
                        ({ index }) => (
                            <>
                                <h1>{song}</h1>
                            </>
                        )
                    }

                </Ticker>

            </div>
            <div className="footerSecond">
                <div className="iconset1">
                    <FavoriteIcon fontSize="Large" />
                    <ChatBubbleIcon fontSize="large" />
                    <SendIcon fontSize="Large" />
                </div>

                <div className="iconset2" >
                    <div className="iconshare">
                        <FavoriteIcon className="medium_icon" fontSize="medium" />
                        <h3>{like}</h3>

                    </div>
                    <div className="iconshare">
                        <ChatBubbleIcon className="medium_icon" fontSize="medium" />
                        <h3>{share}</h3>



                    </div>



                </div>



            </div>
        </div>


    )
}

export default VideoFooter
