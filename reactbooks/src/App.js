import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "./pages/Search/index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


import "./App.css";

function App() {
  document.title = "Google Books Searcher";
  return (
    <BrowserRouter>
      <div style={{ height: "80vh" }}>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
