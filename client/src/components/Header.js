import React, { Component } from 'react'
import logo from "../assets/lol-logo.svg";
import '../CSS/header.css'

class Header extends Component {
    render() {
        return (
        <span className="block">
            <img src={logo} alt="Img"/>
        </span>
        );
    }
}

export default Header;
