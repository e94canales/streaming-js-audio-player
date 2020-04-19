import React, { useState, useEffect } from 'react';
import ProgressBarContainer from '../components/styles/ProgressBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const playButton = <FontAwesomeIcon icon={faPlay}/>
const pauseButton = <FontAwesomeIcon icon={faPause}/>

const ProgressBar = props => {

    const [currentPos, setCurrentPos ] = useState(0)
    const [ progressBarWidth, setProgressBarWidth ] = useState(0)
    const [duration, setDuration ] = useState(0)
  


    function convert(){
        if (Math.round(currentPos) <= 9){ // 1-9 seconds
            return `0:0${Math.round(currentPos)}`
        }
        
        if (Math.round(currentPos <= 59)){ // double digit seconds
            return `0:${Math.round(currentPos)}`
        }
        return `${Math.round(currentPos / 60)}:${Math.floor((currentPos % 60 / 60 * 100))}` // minutes + seconds 00:00
    }
    useEffect(() => {
        if (currentPos > 0){
            setProgressBarWidth(100 / duration * currentPos)
        }
    }, [currentPos, progressBarWidth, duration])

    const PBWidth = {
        width: `${progressBarWidth}%`
    }
    

    return (
        

        <ProgressBarContainer>
            <div className="player">
                <div className="progress" style={PBWidth} />
            </div>
            <div className='infoControls'>

                <div className='position'>{convert()}</div> {/*timer 00:00*/}

                <span className="control" onClick={() => {
                    document.querySelectorAll('audio').forEach(e => {e.pause()}) // stop all other active instances
                    document.getElementById(`${props.id}`).play() // play button
                    document.getElementById(`${props.id}`).addEventListener('timeupdate', e => { // sets REAL-TIME progress
                        setCurrentPos(e.target.currentTime)
                    })
                    setDuration(document.getElementById(`${props.id}`).duration) // sets total duration
                }}>{playButton}</span>


                <span className='control' onClick={() => {
                    document.getElementById(`${props.id}`).pause() //pause button
                }}>{pauseButton}</span>
            </div>
            

            

        </ProgressBarContainer >


    )
}

export default ProgressBar