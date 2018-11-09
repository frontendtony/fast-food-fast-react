import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = ({ term: '' });
    this.onInputChange = this.onInputChange.bind(this);
  }
  
  onInputChange(event) {
    return this.setState({
      term: event.target.value
    });
  }
  
  render() {
    return (
      <form className='search-form'>
        <input
          name="textInput"
          type="text"
          value={this.state.term}
          placeholder="Search for food"
          onChange={this.onInputChange}
        />
        <i className='fas fa-search'></i>
      </form>  
    );
  }
}

export default SearchBar;
