import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page"><NavLink exact to="/"> Home </NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" > <NavLink exact to="/about"> About US </NavLink> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" > <NavLink exact to="/contact"> Contact US </NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" > <NavLink exact to="/user"> User </NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" > <NavLink exact to="/demo"> Demo </NavLink></a>
                            </li>
                           
                            
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <NavLink exact to="/"> Home </NavLink>  |
            <NavLink exact to="/about"> About US </NavLink>  |
            <NavLink exact to="/contact"> Contact US </NavLink> |
            <NavLink exact to="/demo"> Demo </NavLink> |
            <NavLink exact to="/user"> User </NavLink> | */}
        </>
    );
}

export default Menu;