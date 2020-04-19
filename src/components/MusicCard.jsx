import React from 'react';
import CardStyle from '../components/styles/cardStyle'

const MusicCard = props => {

    return (
        <CardStyle>
            <img className='cardImg' src={props.imgSrc} alt={props.title}/>
            <div className='cardInfoContainer'>
                <h3>{props.title}</h3>
                <h4>{props.artist}</h4>
            </div>
        </CardStyle>
    )
}


export default MusicCard