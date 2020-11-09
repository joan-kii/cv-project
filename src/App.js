import React, { Component } from 'react';
import Topbar from './components/TopBar';
import Jumbo from './components/Jumbo';
import Personal from './components/Personal';
import Education from './components/Education';

class App extends Component {
  constructor() {
    super()
  
    this.updateState = this.updateState.bind(this);

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
  
  updateState(property, data) {
    this.setState({
      [property]: data
    })
  }
  
  render() {
    const {personal, education, career} = this.state;

    return (
      <div>
        <Topbar />
        <Jumbo />
        <Personal updateState={this.updateState} info={personal} rootName='personal' />
        {/* <Education updateState={this.updateState} info={education} rootName='education' /> */}
      </div>
    )
  }
}

export default App

