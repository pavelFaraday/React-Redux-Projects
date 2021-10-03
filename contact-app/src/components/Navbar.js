import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand'>
                    React Redux Contact App
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
