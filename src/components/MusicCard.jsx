import React from 'react';

const MusicCard = props => {

    return (
        <div className='cardContainer'>
            <img className='cardImg' src={props.imgSrc} alt={props.title}/>
            <div className='cardInfoContainer'>
                <h3>{props.title}</h3>
                <h4>{props.artist}</h4>
            </div>
        </div>
    )
}


export default MusicCard