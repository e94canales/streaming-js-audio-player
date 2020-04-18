import React, { useState, useEffect } from 'react';
import ProgressBarContainer from '../components/styles/ProgressBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const playButton = <FontAwesomeIcon icon={faPlay}/>
const pauseButton = <FontAwesomeIcon icon={faPause}/>

const ProgressBar = props => {

    const [currentPos, setCurrentPos] = useState(0)
    // const [active , setActive] = useState(false)

    // useEffect(() => {
    //     if (active){
    //         console.log(document.getElementById(`${props.id}`).currentTime)

    //     }
    // },[active, props.id])

    return (
        

        <ProgressBarContainer>
            <div className="player">
                <div className="progress"></div>
            </div>

            <div onClick={() => {
                document.querySelectorAll('audio').forEach(e => {e.pause()}) // stop all other active instances
                document.getElementById(`${props.id}`).play() // play button
                // setActive(true)
                document.getElementById(`${props.id}`).addEventListener('timeupdate', e => {
                    setCurrentPos(e.target.currentTime)
                })
            }} className="play">{playButton}</div>


            <div className='pause' onClick={() => {
                document.getElementById(`${props.id}`).pause() //pause button
            }}>
                {pauseButton}
            </div>

            <p className='position'>{currentPos}</p>

        </ProgressBarContainer>


    )
}

export default ProgressBar