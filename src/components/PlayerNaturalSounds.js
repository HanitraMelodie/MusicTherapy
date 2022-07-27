import React from 'react'
import ReactPlayer from 'react-player'
import "./Player.css"


function PlayerNaturalSounds(){
    return (
        <div>
            <div className='video-div'><ReactPlayer url= "https://www.youtube.com/watch?v=Nd7e4SNjGBM&list=PL5UVYXAb1-Wq2Z9hTakYTP1DXXHD5QE3C&index=1&ab_channel=MusicforBodyandSpirit-MeditationMusic" controls="1" /></div>
            <div className='video-div'> <ReactPlayer url= "https://www.youtube.com/watch?v=02NQkhbjALg&ab_channel=johnnielawson" controls="1"/></div>
            <div className='video-div'><ReactPlayer url= "https://www.youtube.com/watch?v=VeIhRdR2jsU&ab_channel=AcertingArt" controls="1" /></div>
            <div className='video-div'> <ReactPlayer url= "https://www.youtube.com/watch?v=q76bMs-NwRk&ab_channel=TheRelaxedGuy" controls="1"/></div>          
        
        </div>)
}

export default PlayerNaturalSounds;