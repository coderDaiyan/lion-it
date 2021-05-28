import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-none">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5 text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/admin">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="#">Bloogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="#">Contact</Link>
                    </li>
                    <li className="nav-item">
                                 <Link className="nav-link mr-5 text-white" to="/login">Login</Link>
                        
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;