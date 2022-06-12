import React from 'react'
import ViewIcon from './../../Assets/Icons/views.svg'
import Likes from './../../Assets/Icons/likes.svg'
import './Details.scss'

export default function Details({ content }) {
    const getDate = (date => {
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

    })
    return (
        <div className='info'>
            <div className='info__tittle-container'>
                <div className='info__tittle'>
                    <h2>{content.title}</h2>
                </div>
            </div>
            <div className='info__details-container'>
                <div className='info__containter-one'>
                    <p className="info__details-channel">By {content.channel}</p>
                    <p className="info__details">{getDate(new Date(Number(content.timestamp)))}</p>

                </div>
                <div className='info__containter-two'>
                    <p className="info__details">
                        <img src={ViewIcon} alt="view Icon" /> {content.views}</p>

                    <p className="info__details">
                        <img src={Likes} alt="like Icon" /> {content.likes}</p>
                </div>
            </div>
            <div className='info__content'>
                <p></p>

            </div>
        </div >

    )
}