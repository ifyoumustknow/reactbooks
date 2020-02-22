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
