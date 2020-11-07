import React, { Component } from 'react';
import Topbar from './components/TopBar';
import Jumbo from './components/Jumbo';
import Personal from './components/Personal';

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
        <Personal />
      </div>
    )
  }
}

export default App

