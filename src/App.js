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
        portfolio: '',
        city: '',
        country: ''
      },
      education: {
          schools: [
            {
              school: '',
              title: '',
              endDate: ''
          }
        ]
      },
      career: {
        companies: [
          {
            company: '',
            position: '',
            tasks: [''],
            duartion: '',
            endDate: ''
          }
        ]
      }
    }
  }
  
  render() {
    const {personal, education, career} = this.state;
    return (
      <div>
        <Topbar />
        <Jumbo />
        <Personal info={personal} rootName='personal' />
      </div>
    )
  }
}

export default App

