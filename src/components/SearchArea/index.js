import React from 'react';
import "./style.css";


const SearchArea = (props) => {
    return (
        <div>
            <nav className="navbar   nav_color">
                <h1 className="navbar-brand" to="/">
                    GOOGLE Books
        </h1>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="search-area">
                                <form className="form-inline" onSubmit={props.searchBook} action="">
                                    <input onChange={props.handleSearch} type="text"
                                        className="form-control "
                                        placeholder="Search for Books"
                                        autoComplete="off"
                                        style={{ width: "300px" }} />
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