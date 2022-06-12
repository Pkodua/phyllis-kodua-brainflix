import React from 'react'
import Profile from '../../Assets/Images/profile.jpg'
import avatar from '../../Assets/Images/grey-circle.png'

import '../Comments/Comments.scss'

export default function Comments({content}) {
    const getDate = (date => {
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

    })
    return (
        

        <>
            <form className='form'>
                <div className='form__avatar'>
                    <img src={Profile} alt='avatar'></img>
                </div>

                <div className='form__container'>
                    <div className='form__text-container'>
                        <label> JOIN THE CONVERSATION</label>
                        <input type="text" name='textArea' id='textArea' placeholder='Add a new comment'></input>
                    </div>
                    <div className='form__button-container'>
                        <button className='form__button'>COMMENT</button>
                    </div>


                </div>
            </form>
            {content.comments.map((comment) => {
                return (
                    <div key={comment.id} className="comments" >
                        <div className="comments__top">
                          
                        <img className="comments__avatar" src={avatar}></img>
                            
                            <div className="comments__top-container">
                                <p className="comments__name">{comment.name}</p>
                                <p className="comments__date">{getDate(new Date(Number(comment.timestamp)))}</p>
                            </div>
                        </div>
                        <p className="comments__content">{comment.comment}</p>
                    </div>)
            })}
        </>

    )
}
