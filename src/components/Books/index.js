import React, { Component } from 'react';
import request from 'superagent';
import SearchArea from '../../components/SearchArea';
import BookList from '../../components/BookList';


class books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            seachField: ''
        }

    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.seachField })
            .then((data) => {
                this.setState({ books: [...data.body.items] })
            })
    }

    handleSearch = (e) => {
        this.setState({ seachField: e.target.value })

    }

    render() {
        return (
            <div>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
                <BookList books={this.state.books} />
            </div>
        )
    }


}

export default books;