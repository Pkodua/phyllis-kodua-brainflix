import React, { Component } from 'react'
import Details from '../Details/Details';
import MainVideo from '../MainVideo/MainVideo';
import Description from '../Description/Description';
import Comments from '../Comments/Comments';
import SideVideos from '../SideVideos/SideVideos';
import axios from 'axios'
import { API_KEY, API_URL } from '../../apiConfig/apiConfig';

export default class MainPage extends Component {

    state = {
        selectedVideo: null,
        Videos: null,
        selectedId: null,

    }
    currentId = this.props.match.params.id
    currentPath = this.props.match.path
    AxiosGet = (id) => {
        return axios.get(`${API_URL}videos/${id}/?api_key=${API_KEY}`).then(response => {
            this.setState({
                selectedVideo: response.data
            })
        }).catch(err => console.log(err))
    }
    componentDidMount() {
        axios.get(`${API_URL}videos/?api_key=${API_KEY}`).then(response => {

            if (this.currentPath === "/") {
                this.AxiosGet(response.data[0].id)
            } else {
                this.AxiosGet(this.currentId)
            }
            this.setState({
                Videos: response.data,
                selectedId: response.data[0].id,
            })
        }).catch(error => { console.log("ERROR! Third Axios Inside!", error) })

    }
    componentDidUpdate(prevProps) {

        const currentId = this.props.match.params.id;
        const prevId = prevProps.match.params.id;
        const currentPath = this.props.match.path


        if (currentPath === "/" && currentId !== prevId) {
            this.AxiosGet(this.state.Video[0].id)
        }
        else
            if (currentId !== prevId) {
                this.AxiosGet(currentId)
            }
    }
    render() {
        if (this.state.Videos === null || this.state.selectedVideo === null) {
            return <main className="load-screen">Loading...</main>
        }
        return (
            <>
                <MainVideo vidInfo={this.state.selectedVideo} />
                <Details vidInfo={this.state.selectedVideo} />
                <Description vidInfo={this.state.selectedVideo} />
                <Comments vidInfo={this.state.selectedVideo} {...this.props} vidArray={this.state.Videos} />
                <SideVideos vidList={this.state.Videos} {...this.props} />
            </>


        )


    }
}


