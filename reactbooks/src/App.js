import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import ReactDOM from "react-dom";
import Books from "./components/Books"





import "./App.css";

function App() {

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
                <form>
                  <div className="form-inline">

                  </div>
                </form>
              </li>
            </ul>
          </div>
        </nav>
        <div style={{ height: "80vh" }}>
          <Wrapper>
            <Books />
          </Wrapper>
          <Footer />
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
