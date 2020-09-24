import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../Logo.png';

const Navbar = () => {

    const history = useHistory();

    const handleProceedToLogin = () => {
        history.push('/login');
    }

    return (
        <div className="container bg-transparent text-dark">
            <nav className="navbar navbar-expand-lg navbar-light text-white">
                <a className="navbar-brand" href="/"><img src={Logo} alt="logo" style={{ width:'100px' }}/></a>
                <input className="form-control ml-sm-5 bg-transparent text-white" type="search" placeholder="Search Your Destination.." aria-label="Search" />

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mr-5 ml-5">
                            <a className="nav-link" href="/">News<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="/">Destination</a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="/">Blog</a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="/">Contact</a>
                        </li>
                    </ul>
                    <input className="p-2" type="submit" value="Login" onClick={handleProceedToLogin}/>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;