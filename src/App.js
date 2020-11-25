/* import React, { Component } from 'react'; */
import React from 'react';
import Topbar from './components/TopBar';
import Jumbo from './components/Jumbo';
import Personal from './components/Personal';
import Education from './components/Education';
import Career from './components/Career';
import Footer from './components/Footer';

const App = () => {

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

  const career = [
    {
    company: '',
    position: '',
    tasks: [''],
    duration: '',
    endDate: ''
    }
  ];

  /* console.log('Infromación personal: ', personal)
  console.log('Formación: ', education) 
  console.log(career)*/

  return (
    <div>
      <Topbar />
      <Jumbo />
      <Personal personalData={personal} />
      <Education schoolsList={education} />
      <Career companiesList={career} />
      <Footer />
    </div>
  )
};

export default App

