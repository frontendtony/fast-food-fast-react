import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MenuList from '../containers/MenuList';

class Menu extends Component {
  render() {
    return (
      <div className="section">
        <SearchBar />
        <MenuList addCommaToNum={this.props.addCommaToNum} />
      </div>
    );
  }
}

export default Menu;
