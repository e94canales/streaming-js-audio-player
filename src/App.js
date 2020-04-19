import React, { useState, useEffect } from 'react';
import './appStyles.css';
import axios from 'axios';
import MusicCard from '../src/components/MusicCard';
import ProgressBar from '../src/components/ProgressBar';

function App() {

  const [songInfo, setSongInfo] = useState([])
  const [ page , setPage ] = useState(1)
  const [ beginSlice, setBeginSlice ] = useState(0)
  const [ endSlice, setEndSlice ] = useState(9)



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

  useEffect(() => {
    if (page <= 0){
      setPage(1)      
    }
    setBeginSlice((page * 9) - 9)
    setEndSlice(page * 9) 
  }, [page])



  return (
    <div className="App">
      <div className='buttonContainer'>

      <button onClick={() => {
            
            setPage(page - 1)
          }}>prev</button>
        
        <button onClick={() => {
            setPage(page + 1)
          }}>next</button>
      </div>
        
      {
        songInfo.slice(beginSlice, endSlice).map((info) => {

          return (
            <div className='card' key={info.id}>
              <MusicCard imgSrc={info.album.cover_xl} title={info.title} artist={info.artist.name}/>
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
