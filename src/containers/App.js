import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
