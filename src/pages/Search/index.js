import React, { Component, useEffect, useState } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";

function Search() {
  const [searchWik, setSearchWik] = useState({
    search: "Wikipedia",
    title: "",
    url: "",
    error: ""
  })

};

// When the component mounts, update the title to be Wikipedia Searcher
useEffect(() => {
  document.title = "Wikipedia Searcher";

  API.searchTerms(useState.search)
    .then(res => {
      if (res.data.length === 0) {
        throw new Error("No results found.");
      }
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      this.setState({
        title: res.data[1][0],
        url: res.data[3][0],
        error: ""
      });
    })
    .catch(err => this.setState({ error: err.message }));
};


const handleInputChange = event => {
  this.setState({ search: event.target.value });
};



const handleFormSubmit = event => {
  event.preventDefault();
  if (!this.state.search) {
    return;
  }
  API.searchTerms(this.state.search)
    .then(res => {
      if (res.data.length === 0) {
        throw new Error("No results found.");
      }
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      this.setState({
        title: res.data[1],
        url: res.data[3][0],
        error: ""
      });
    })
    .catch(err => this.setState({ error: err.message }));
};
render() {
  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Anything on Wikipedia</h1>
        <Alert type="danger" style={{ opacity: usestate.error ? 1 : 0, marginBottom: 10 }}>
          {this.state.error}
        </Alert>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          results={state.search}
        />
        <SearchResults
          title={state.title}
          url={state.url}
        />
      </Container>
    </div>
  );
}
}

export default Search;
