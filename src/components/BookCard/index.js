import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';


function BookCard(props) {
    const [flip, setFlip] = useState(false);

    return (
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">

            < div className="card-container" >
                <img className="img_container" src={props.image} alt="" />
                <div className="desc">
                    <h2>{props.title}</h2 >
                    <h3>{props.author}</h3>
                    <p>Published: {props.published}</p>
                </div>
                <div className="click-container">
                    <button onClick={() => { setFlip(true) }} className="flip_button" >More</button>
                </div>
            </div >
            <div>
                < div className="card-container_back" >
                    <div className="desc">
                        <h2>{props.title}</h2 >
                        <h3>{props.author}</h3>
                        <p>Published: {props.published}</p>
                        <h3>Description:</h3>
                    </div>
                    <div className="desc-container">
                        <h3>{props.description}</h3>
                    </div>

                    <div className="click-container">
                        <button onClick={() => { setFlip(false) }} className="flip_button" >back</button>
                    </div>

                </div>

            </div>
        </ReactCardFlip >
    )
}



export default BookCard;