import Header from './Components/Header/Header';
import Details from './Components/Details/Details';
import '../src/App.scss';
import MainVideo from './Components/MainVideo/MainVideo';
import VideoInfo from './Data/video-details.json';
import VideoData from './Data/videos.json';
import Description from './Components/Description/Description';
import Comments from './Components/Comments/Comments';
import SideVideos from './Components/SideVideos/SideVideos';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
        list: VideoData.filter(video => video.id !== VideoData[0].id),
        data: VideoInfo,
        selectedVideo: VideoInfo[0],
        selectedId: VideoInfo[0].id,
      }
  
  handleClickvideo = (id) => {
    const newSelection = this.state.data.find(entry => entry.id === id)
    this.setState({ selectedVideo: newSelection, list:VideoData.filter(video => video.id !== VideoData.id)})

  }

  defaultPrevent = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Header preventDefault={this.preventDefault} />
        <MainVideo vidInfo={this.state.selectedVideo} />
        <div>
          <Details content={this.state.selectedVideo} />
          <Description content={this.state.selectedVideo} />
          <Comments content={this.state.selectedVideo} />
          <div>
          <SideVideos clickHandler={this.handleClickvideo}  selectedId={this.state.selectedId }videoList={this.state.list}/>
          </div>

        </div>
        
       
      </div>
    )
  }
}


// class App extends Component {

//   state = {
//     list: VideoData.filter(video => video.id !== VideoData[0].id),
//     data: VideoInfo,
//     selectedVideo: VideoInfo[0],
//     selectedId: VideoInfo[0].id,
//   }


//   handleClickvideo = (id) => {
//     const newSelection = this.state.data.find(entry => entry.id === id)
//     this.setState({ selectedData: newSelection, list:VideoData.filter(video => video.id !== VideoData.id)})

//   }

//   defaultPrevent = (event) => {
//     event.preventDefault();
//   }







//   render() {
    
//     return (
//       <div>
//         <Header preventDefault={this.preventDefault} />
//         <MainVideo content={this.state.selectedVideo} />
//         <Details content={this.state.selectedVideo} />
//         <Description content={this.state.selectedVideo} />
//         <Comments content={this.state.selectedVideo} />
//         <SideVideos clickHandler={this.handleClickvideo} selectedId={this.state.selectedId }videoList={this.state.list}/>
//       </div>
//     );
    
//   }
// }
// export default App;