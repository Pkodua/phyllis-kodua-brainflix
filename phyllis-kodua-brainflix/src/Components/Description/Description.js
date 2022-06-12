import React from 'react'
import './Description.scss'

export default function Description({ content }) {
    return (
        <div className='info__description'>
            <p>{content.description}</p>
            <h5 className='info__comments'> 3 Comments</h5>

        </div>
    )
}