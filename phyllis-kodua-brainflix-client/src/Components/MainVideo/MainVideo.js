import React from 'react'
import './MainVideo.scss'

function MainVideo({vidInfo}) {
  return (
      <div className='video'>
          <div className='video__container'>
              <video className='video_img'  poster={vidInfo.image}   controls ></video>
          </div>
      </div>
  )
    
}
export default MainVideo