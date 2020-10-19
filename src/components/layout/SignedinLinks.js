import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">New plan</NavLink></li>
            <li><NavLink to="/">Lot Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-3">NN</NavLink></li>
        </ul>
    )
}


export default SignedInLinks;