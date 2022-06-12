import React from 'react'
import '../SideVideos/SideVideos.scss'




export default function SideVideos(props) {
    const NextVideo = props.videoList.map((video,index) => {
        return (
          <div key={video.id}  onClick={() => props.clickHandler(video.id)} className="sidevideo__container-one">
            <div className="sidevideo__container-two">
              <img className="sidevideo__image" src={video.image} alt="Video poster" />
              <div className="sidevideo__container-three">
                <h4 className="sidevideo__video">{video.title}</h4>
                <h4 className="sidevideo__channel">{video.channel}</h4>
              </div>
            </div>
          </div>
        );
      });
    
      return (
        <>
          <div className="sidevideo">
            <h5 className="sidevideo__title">NEXT VIDEOS</h5>
            {NextVideo}
          </div>
        </>
      );
};