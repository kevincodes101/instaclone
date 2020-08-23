import React, { useState, useEffect } from 'react';
import './Css/App.css';
import logo from './Media/Img/insta.png';
import VideoCard from './VideoCard';
import db from './firebase';

function App() {
  const [Instaclone, setInstaclone] = useState([]);
  useEffect(() => {
    db.collection('Instaclone').onSnapshot(Snapshot => (
      setInstaclone(Snapshot.docs.map(doc => doc.data()))
    )
    )



  }, [])

  return (
    <div className="App">

      <div className="appTop" >
        <div align="center">
          <img className="appLogo" src={logo} alt="Logo " />
          <h1 className="h1img"> Insta Reels</h1>


        </div>

        {/* image on the top */}
        {/* Reas text */}
      </div>
      <div className="appVideo" >
        {Instaclone.map(({ channel, song, likes, share, url }) => (
          <VideoCard
            channel={channel}
            song={song}
            url={url}
            likes={likes}
            share={share}

          />
        ))}


        {/* Cpntainer of the app video*/}




      </div>






    </div>
  );
}

export default App;
