import React, { Component } from 'react';
import Topbar from './components/TopBar';
import Jumbo from './components/Jumbo';
import Personal from './components/Personal';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      personal: {
        name: '',
        secondName: '',
        email: '',
        phone: '',
        city: '',
        country: ''
      }
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

