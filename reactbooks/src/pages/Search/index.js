import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";


function Search() {

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey,] = useState("AIzaSyAr79RwppPlS_C2BqoGfcnC7lT11s5wYcg");

  function handleChange(event) {
    const book = event.target.value;

    setBook(book);

  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=10")
      .then(data => {
        console.log(data.data.items)
        setResult(data.data.items);
      })
  }

  return (

    <div className="container">
      <h1>Book Search App</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text" onChange={handleChange}
            className="input-control mt-10"
            style={{ width: "500px" }}
            placeholder="Search for Books"
            autoComplete="off" />
        </div>
        <button type="submit" className="btn btn-danger">Search</button>
      </form>
      {result.map(book => (
        <a target="_blank" href={book.volumeInfo.previewLink}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
        </a>
      ))}
    </div>
  );
};

export default Search;
