import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            isLoggedIn: false
        };
    }

    componentDidMount() {
        // পেজ লোড হওয়ার সময় লগইন স্টেট চেক করা
        const loggedIn = localStorage.getItem('esco_logged_in') === 'true';
        this.setState({ isLoggedIn: loggedIn });
    }

    toggleMenu = () => {
        this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
    };



    render() {
        const { isMenuOpen, isLoggedIn } = this.state;

        return (
            <header className="site-header">
                <title>{this.props.title}</title>
                <div className="site-container">
                    <div className="site-header-inner">
                        <Link className="brand" to="/" aria-label="ESCO Commodity Exchange home">
              <span className="brand-mark">
                <img src="/Logo-Final.png" alt="" aria-hidden="true"/>
              </span>
                            <span className="brand-copy">
                <span className="brand-name">ESCO Commodity Exchange</span>
                <span className="brand-subtitle">Digital commodity ecosystem</span>
              </span>
                        </Link>
                        <div className="header-actions">
                            <a className="btn-download" href="#download-app">Download App</a>
                        </div>
                    </div>
                </div>
            </header>

        );
    }
}

export default Header;