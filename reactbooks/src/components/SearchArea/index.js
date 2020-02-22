import React from 'react';



const SearchArea = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand" to="/">
                    GOOGLE Books
        </h1>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="search-area">
                                <form className="form-inline" onSubmit={props.searchBook} action="">
                                    <input onChange={props.handleSearch} type="text"
                                        className="form-control mr-md-12"
                                        placeholder="Search for Books"
                                        autoComplete="off" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" style={{ margin: "10px", float: "right" }} type="submit">Search</button>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>


            </nav>
        </div>
    )
}

export default SearchArea;