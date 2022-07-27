import React from 'react'
import ReactPlayer from 'react-player'
import "./Player.css"


function Player_dance() {
    return (
        <div>
            <div className='video-div'><ReactPlayer url="https://www.youtube.com/watch?v=FVAO2HSknb0" controls="1" /></div>
            <div className='video-div'> <ReactPlayer url="https://youtu.be/KRyks99Y9Qc" controls="1" /></div>
            <div className='video-div'><ReactPlayer url="https://youtu.be/7TGbssGDvIA" controls="1" /></div>
            <div className='video-div'> <ReactPlayer url="https://youtu.be/sqe_AoQb3Q0" controls="1" /></div>


        </div>)
}

export default Player_dance;