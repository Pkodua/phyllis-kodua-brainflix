import React from 'react'
import ViewIcon from './../../Assets/Icons/views.svg'
import Likes from './../../Assets/Icons/likes.svg'
import './Details.scss'

export default function Details({ vidInfo }) {
    const getDate = (date => {
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

    })
    return (
        <div className='info'>
            <div className='info__tittle-container'>
                <div className='info__tittle'>
                    <h2>{vidInfo.title}</h2>
                </div>
            </div>
            <div className='info__details-container'>
                <div className='info__containter-one'>
                    <p className="info__details-channel">By {vidInfo.channel}</p>
                    <p className="info__details">{getDate(new Date(Number(vidInfo.timestamp)))}</p>

                </div>
                <div className='info__containter-two'>
                    <p className="info__details">
                        <img src={ViewIcon} alt="view Icon" /> {vidInfo.views}</p>

                    <p className="info__details">
                        <img src={Likes} alt="like Icon" /> {vidInfo.likes}</p>
                </div>
            </div>
            <div className='info__content'>
                <p></p>

            </div>
        </div >

    )
}