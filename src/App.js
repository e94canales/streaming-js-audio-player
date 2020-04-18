import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import MusicCard from '../src/components/MusicCard';
import ProgressBar from '../src/components/ProgressBar';

function App() {

  const [songInfo, setSongInfo] = useState([])



  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/3155776842')
      .then ( response => {
        console.log(response.data.tracks.data);
        setSongInfo(response.data.tracks.data)
      })
      .catch (error => {
        console.log(error);
        
      })
  }, [])

  return (
    <div className="App">


      {
        songInfo.slice(0,9).map((info) => {

          return (
            <div key={info.id}>
              <MusicCard imgSrc={info.album.cover} title={info.title} artist={info.artist.name}/>
              <ProgressBar id={info.id} preview={info.preview}/>
              <audio id={info.id} src={info.preview}></audio> {/* audio source */}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
