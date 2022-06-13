import React from 'react'
import './Description.scss'

export default function Description({ vidInfo }) {
    return (
        <div className='info__description'>
            <p>{vidInfo.description}</p>
            <h5 className='info__comments'> {vidInfo.comments.length} Comments</h5>

        </div>
    )
}