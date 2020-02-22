import React from 'react';



const BookCard = (props) => {
    return (

        <div className="card-container">
            <img className="img_container" src={props.image} alt="" />
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>Published: {props.published}</p>
            </div>

        </div >
    )
}

export default BookCard;