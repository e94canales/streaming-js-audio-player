import React, { useState } from 'react';
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

    function convert(){
        if (currentPos <= 10){
            return `0:0${Math.floor(currentPos)}`
        }
        else if (currentPos >= 10){
            return `0:${Math.floor(currentPos)}`
        }
    }

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

            <p className='position'>{convert()}</p>

        </ProgressBarContainer>


    )
}

export default ProgressBar