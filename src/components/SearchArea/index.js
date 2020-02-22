import React from 'react';
import "./style.css";
import { FaSearch } from 'react-icons/fa';


const SearchArea = (props) => {
    return (
        <div>
            <nav className="navbar nav_color">
                <a href>
                    <img src="/googlelogo_color_92x30dp.png" width="110px" alt="" />
                </a>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div>
                                <form onSubmit={props.searchBook} action="">
                                    <input onKeyDown={props.handleSearch} type="text"
                                        className="search_bar"
                                        placeholder="Search for Books"
                                        autoComplete="off"
                                    />
                                    <div className="search_icon">
                                        <FaSearch />
                                    </div>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    )
}

export default SearchArea;