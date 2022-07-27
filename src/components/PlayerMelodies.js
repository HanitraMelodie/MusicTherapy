import React from 'react'
import ReactPlayer from 'react-player'
import "./Player.css"


function Player_Melodies(){
    return (
        <div>
            <div className='video-div'><ReactPlayer url= "https://www.youtube.com/watch?v=XS7D_0EIcgs&ab_channel=alexrainbirdMusic" controls="1" /></div>
            <div className='video-div'> <ReactPlayer url= "https://www.youtube.com/watch?v=3NycM9lYdRI&ab_channel=SoothingRelaxation" controls="1"/></div>
            <div className='video-div'><ReactPlayer url= "https://www.youtube.com/watch?v=0JNxsGTatWo&ab_channel=MusicforBodyandSpirit-MeditationMusic" controls="1" /></div>
            <div className='video-div'> <ReactPlayer url= "https://www.youtube.com/watch?v=bn-ERrsr_wk&ab_channel=relaxdaily" controls="1"/></div>          
        
        </div>)
}

export default Player_Melodies;