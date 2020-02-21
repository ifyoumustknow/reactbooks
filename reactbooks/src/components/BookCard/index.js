import React from 'react';


const BookCard = (props) => {
    return (
        <div className="card-container">
            <img src={props.image} alt="" />
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <h4>{props.pubilished}</h4>

            </div>
        </div>
    )
}

export default BookCard;