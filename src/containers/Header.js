import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthLinks from '../components/AuthLinks';
import NavLinks from '../components/NavLinks';

class Header extends Component {
  constructor(props) {
    super(props);

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = { 
      openMenuClass: '',
      menuCoverClass: ''
    };
  }

  openMenu() {
    this.setState({ 
      openMenuClass: 'animate',
      menuCoverClass: 'dim'
    });
  }
  
  closeMenu() {
    this.setState({ 
      openMenuClass: '',
      menuCoverClass: ''
    });
  }
  
  toggleMenu() {
    if (!this.state.openMenuClass) {
      return this.openMenu();
    }
    this.closeMenu();
  }

  render() {
    return(
      <nav id="navbar">
        <i className="fa fa-bars fa-2x nav-toggle"
          aria-hidden='true' id='nav-toggle-open'
          onClick={this.toggleMenu}>
        </i>
        <div id="nav-container">
          <h3 className="nav-title" onClick={this.closeMenu}>
            <Link to="/">Fast Food Fast​</Link>
            <i className="fas fa-shipping-fast" id="logo"></i>
          </h3>
          <div className={`nav-links-wrapper ${this.state.openMenuClass}`}>
            <NavLinks closeMenu={this.closeMenu} />
            <AuthLinks closeMenu={this.closeMenu} />
            <div className={`menu-page-cover ${this.state.menuCoverClass}`} 
              onClick={this.toggleMenu}>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
