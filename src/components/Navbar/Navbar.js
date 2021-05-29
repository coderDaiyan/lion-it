import React from "react";

const Navbar = () => {
<<<<<<< HEAD
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
=======
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-none container">

            <button style={{backgroundColor: 'white'}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
>>>>>>> 3d1e7e993f008facac0d8918a8b9ed732b20b770
};

export default Navbar;
