import React from 'react';
import ReactCardFlip from 'react-card-flip';


class BookCard extends React.Component {

    constructor() {
        super();
        this.state = {
            isFlipped: false,

        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));

    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">

                < div className="card-container" >
                    <img className="img_container" src={this.props.image} alt="" />
                    <div className="desc">
                        <h2>{this.props.title}</h2 >
                        <h3>{this.props.author}</h3>
                        <p>Published: {this.props.published}</p>
                    </div>
                    <div className="click-container">
                        <button onClick={this.handleClick} className="flip_button" >More</button>
                    </div>
                </div >
                <div>
                    < div className="card-container_back" >
                        <div className="desc">
                            <h2>{this.props.title}</h2 >
                            <h3>{this.props.author}</h3>
                            <p>Published: {this.props.published}</p>
                            <h3>Description:</h3>
                        </div>
                        <div className="desc-container">
                            <h3>{this.props.description}</h3>
                        </div>

                        <div className="click-container">
                            <button onClick={this.handleClick} className="flip_button" >back</button>
                        </div>

                    </div>

                </div>
            </ReactCardFlip >
        )
    }
}


export default BookCard;