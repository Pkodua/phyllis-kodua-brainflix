import React from 'react'
import '../SideVideos/SideVideos.scss'
import { Link } from 'react-router-dom'




export default function SideVideos(props) {
    const selectId = props.match.params.id
    let filterVideo = props.vidList.filter(video => video.id !== selectId)
  
    if (props.match.path === "/") {
      filterVideo = props.vidList.filter(video => video.id !== props.vidList[0].id)
  
  
  
    }
  
    return (
  
      <div className="sidevideo">
        <h5 className="sidevideo__title">NEXT VIDEOS</h5>
        {filterVideo.map((video) => {
          return <div key={video.id} className="sidevideo__container-one">
            <Link to={`/videos/${video.id}`} >
              <div className="sidevideo__container-two"><img className="sidevideo__image" src={video.image} alt="Video poster" /></div>
            </Link>
            <div className="sidevideo__container-three">
              <h4 className="sidevideo__video">{video.title}</h4>
              <h4 className="sidevideo__channel">{video.channel}</h4>
            </div>
          </div>
        }
        )}
      </div>
  
    )
  }