import React from 'react';
import './UploadPage.scss';
import thumbnail from '../../Assets/Images/thumbnail.jpg';






function Upload(props) {

    function pushBack(event) {
        event.preventDefault()
        alert("Upload complete!")
        props.history.push('/')
    }

    return (

        <div className="upload">
            <h1 className="upload__header">Upload Video</h1>
            <div className="inner-load">

                <form className="form" onSubmit={pushBack}>
                    <div className="form-one">

                        <div className="form-left">
                            <p className="form__description-left">VIDEO THUMBNAIL</p>
                            <div className="form__wrapper">
                                <img className="form__img-left" src={thumbnail} alt="thumbnail"/>
                            </div>
                        </div>
                        <div className="form-right">
                            <label htmlFor="title" className="form__label">TITLE YOUR VIDEO</label>
                            <input className="form__input" name="title" placeholder="Add a title to your video"></input>
                            <label htmlFor="description" className="form__label">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="form__text-area" name="description" placeholder="Add a description of your video"
                            ></textarea>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="buttons__publish" type="submit">PUBLISH</button>
                        <button className="buttons__cancel" onClick={(e) => e.preventDefault()}>CANCEL</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Upload