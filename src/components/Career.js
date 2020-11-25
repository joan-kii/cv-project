/* import React, { Component } from 'react'; */
import React, { useState } from 'react';
import CardStyled from './CardStyled';
import CareerForm from './CareerForm'; 
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// FUNCTIONAL HOOK

const Career = (props) => {
  
  const [companiesList, setCompaniesList] = useState(props.companiesList);
  const defaultCompany = {
    company: '',
    position: '',
    tasks: [''],
    duration: '',
    endDate: ''
    };

  const deleteCompany = (index) => {
    companiesList.splice(index, 1);
    setCompaniesList([...companiesList]);
    console.log(companiesList)
  };
  

  return (
    <CardStyled>
      <Container id='career' className='mt-5 card' as='section'>
      <h2 className='title'>Profesional</h2>
      <Button 
        variant='primary' 
        onClick={() => setCompaniesList([...companiesList, defaultCompany])}
        block>+ Anadir Experiencia +</Button>
        {companiesList.map((company, index) => 
          <CareerForm 
            key={index}
            index={index}
            companiesList={companiesList} 
            deleteCompany={deleteCompany} />
            )}
      </Container>
    </CardStyled>
  )
};

export default Career;

// CLASS COMPONENT

/* class Career extends Component {
  constructor(props) {
    super(props)

    this.addCareer = this.addCareer.bind(this);
  }

  addCareer() {
    const {updateState, info, rootName} = this.props;
    const {companies} = info;
    const newCompany = Object.keys(companies[0]).reduce((prev, current) => {
      if (Array.isArray(companies[0][current])) {
        return {
          ...prev,
          [current]: ['']
        };
        } else {
          return {  
            ...prev,
            [current]: ''
          };
      }})

    companies.push(newCompany);

    updateState(rootName, 
      {companies: companies})
  }
  
  render() {
    const {updateState, info, rootName} = this.props;
    const {companies} = info;

    return (
      <CardStyled>
        <Container id='career' className='mt-5 card' as='section'>
        <h2 className='title'>Profesional</h2>
        <Button 
          variant='primary' 
          onClick={() => this.addCareer(companies)}
          block>+ Anadir Experiencia +</Button>
          {companies.map((company, index) => 
            <CareerForm 
              key={index}
              index={index}
              updateState={updateState} 
              companies={companies} 
              rootName={rootName} />
              )}
        </Container>
      </CardStyled>
    )
  }
}

export default Career */