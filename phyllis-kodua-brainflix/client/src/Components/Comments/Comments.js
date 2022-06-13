import { API_KEY, API_URL } from '../../apiConfig/apiConfig';
import './Comments.scss'
import Avatar from './../../Assets/Images/grey-circle.png';
import React, { Component } from 'react'
import axios from 'axios';
import Profile from './../../Assets/Images/profile.jpg';

export default class Comments extends Component {
    state = {

        comments: this.props.vidInfo.comments
    }
    axiosGet = (id) => {
        return axios.get(`${API_URL}videos/${id}/?api_key=${API_KEY}`).then(response => {
            this.setState({
                comments: response.data.comments
            })
        }).catch(err => console.log(err))
    }
    axiosPost = (id, newComment) => {
        return axios.post(`${API_URL}videos/${id}/comments?api_key=${API_KEY}`, newComment).then(response => {
            this.axiosGet(id)
        }).catch(err => console.log("Error! it's about", err))
    }



    submitHandler = (event) => {
        event.preventDefault()
        const newComment = {
            "name": "Phyllis",
            "comment": event.target.comments.value
        }
        if (this.props.match.path === "/") {
            this.axiosPost(this.props.vidArray[0].id, newComment);
            event.target.comments.value = ""
        }
        else {
            this.axiosPost(this.props.match.params.id, newComment);
            event.target.comments.value = ""
        }
    }

    componentDidUpdate(prevProps) {

        if (this.props.match.path === "/" && prevProps.match.params.id !== this.props.match.params.id) {
            this.axiosGet(this.props.vidArray[0].id)
        }

        if (prevProps.match.params.id !== this.props.match.params.id && this.props.match.path !== "/") {
            this.axiosGet(this.props.match.params.id)

        }
    }
    dateGet = (dateVar) => {
        return ('0' + (dateVar.getMonth() + 1)).slice(-2) + '/' + ('0' + dateVar.getDate()).slice(-2) + '/' + dateVar.getFullYear()
    }

    getStamp = (timestamp) => {
        const msPerSec = 1000
        const msPerMin = msPerSec * 60
        const msPerHr = msPerMin * 60
        const msPerDay = msPerHr * 24

        const currentTime = Date.now()
        const timeElapsed = currentTime - timestamp

        if (timeElapsed < msPerMin) {
            return Math.round(timeElapsed / msPerSec) + ' seconds ago'
        } else if (timeElapsed < msPerHr) {
            return Math.round(timeElapsed / msPerMin) + ' minutes ago'
        } else if (timeElapsed < msPerDay) {
            return Math.round(timeElapsed / msPerHr) + ' Hours ago'
        } else {
            return Math.round(timeElapsed / msPerDay) + ' days ago'
        }

    }
    newComment = (className, comment, behaviour) => {
        return (<form id={comment.id} key={comment.id} className="comments" onSubmit={this.deleteHandler}>
            <div className="comments__top-container">
                <div className='comments__avatar'>
                    <img src={Avatar} alt="Avatar"></img>
                </div>
                <p className="comments__name">{comment.name}</p>
                <p className="comments__date">{this.dateGet(new Date(Number(comment.timestamp)))}</p>
               
            </div>
            <div className="comments-bottom">
                <p className="comments__content">{comment.comment}</p>
            </div>
        </form>
        )
    }
    render() {
        return (
        <div className='form__container'>
            <form className='form'>
                <div className='form__avatar'>
                    <img src={Profile} alt='avatar'></img>
                </div>

                <div className='form__container'>
                    <div className='form__text-container'>
                        <label > JOIN THE CONVERSATION</label>
                        <input type="text" name='textArea' id='textArea' placeholder='Add a new comment'></input>
                    </div>
                    <div className='form__button-container'>
                        <button className='form__button'>COMMENT</button>
                    </div>


                </div>
            </form>

            
         
         

        
           {this.state.comments.sort((a, b) => {
                return b.timestamp - a.timestamp
            }).map((comment) => {

                if (comment.name !== "Anonymous") {
                    return this.newComment("commentsLoaded-top__circle", comment,)
                }
                else {

                    return this.newComment("commentsLoaded-top__circle", comment)

                }
            })}
        
        </div >

     )
    }
}
//onSubmit={this.submitHandler
