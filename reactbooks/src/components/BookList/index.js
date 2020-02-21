import React from 'react';
import BookCard from "./components/BookCard"

const BookList = (props) => {
    return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.tile}
                        author={book.volumeInfo.authors}
                        published={book.volumeInfo.published}
                    />
                })

            }
        </div>
    )
}

export default BookList;