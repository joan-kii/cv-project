import React, { Component } from 'react';
import Topbar from './components/TopBar';
import Jumbo from './components/Jumbo';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        <Topbar />
        <Jumbo />
      </div>
    )
  }
}

export default App

