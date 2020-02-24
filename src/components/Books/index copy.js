import React, { Component, useState, useEffect } from 'react';
import request from 'superagent';
import SearchArea from '../../components/SearchArea';
import BookList from '../../components/BookList';



function books(props) {

    const [search, setSearch] = useState({ books: [] });

    function searchBook(event) {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: state.seachField })
            .then((data) => {
                setSearch({ books: [...data.body.items] })
            })
    } [],

        function handleSearch(event) {
            setState({ seachField: e.target.value })
        })

}




export default books;