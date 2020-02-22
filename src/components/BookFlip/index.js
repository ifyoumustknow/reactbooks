import React from 'react';
import ReactCardFlip from 'react-card-flip';
import BookCard from 'BookCard';

class BookFlip extends React.Component {

    constructor(props) {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">

                <div className="card-container">
                    <a target="_blank" href={props.previewLink} rel="noopener noreferrer">
                        <img className="img_container" src={props.image} alt="" />
                        <div className="desc">
                            <h2>{props.title}</h2 >
                            <h3>{props.author}</h3>
                            <p>Published: {props.published}</p>
                        </div>
                    </a>
                    <button onClick={this.handleClick}>Click to flip</button>
                </div >
                <div>
                    This is the back of the card.
                    <button onClick={this.handleClick}>Click to flip</button>
                </div>
            </ReactCardFlip >
        )
    }
}


export default BookFlip;

