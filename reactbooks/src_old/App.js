import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import ReactDOM from "react-dom";
import axios from "axios";


import "./App.css";


function App() {

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey] = useState("AIzaSyAr79RwppPlS_C2BqoGfcnC7lT11s5wYcg");

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

  document.title = "Google Books Searcher";
  return (
    <BrowserRouter>
      <div
        style={{ height: "100%" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            GOOGLE Books
      </Link>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <form onSubmit={handleSubmit}>
                  <div className="form-inline">
                    <input
                      type="text" onChange={handleChange}
                      className="form-control mr-md-12"
                      placeholder="Search for Books"
                      autoComplete="off" />

                    <button type="submit" className="btn btn-outline-success my-2 my-sm-0" style={{ margin: "10px", float: "right" }}>Search</button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </nav>
        <div style={{ height: "80vh" }}>
          <Wrapper>
            {result.map(book => (
              <a target="_blank" href={book.volumeInfo.previewLink}>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
              </a>
            ))}
          </Wrapper>
          <Footer />
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
