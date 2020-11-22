import React, { Component } from 'react';
import Topbar from './components/TopBar';
import Jumbo from './components/Jumbo';
import Personal from './components/Personal';
import Education from './components/Education';
import Career from './components/Career';
import Footer from './components/Footer';

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
      
      career: {
        companies: [
          {
          company: '',
          position: '',
          tasks: [''],
          duration: '',
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
    const {career} = this.state;
    const personal = {
        name: '',
        secondName: '',
        email: '',
        phone: '',
        portfolio: '',
        city: '',
        country: ''
      };
    const education = [
        {
        school: '',
        title: '',
        endDate: ''
        }
      ];

    return (
      <div>
        <Topbar />
        <Jumbo />
        <Personal info={personal} />
        <Education info={education} />
        <Career updateState={this.updateState} info={career} rootName='career' />
        <Footer />
      </div>
    )
  }
}

export default App

