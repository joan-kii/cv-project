import React, { Component } from 'react';
import CardStyled from './CardStyled';
import CareerForm from './CareerForm'; 
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


class Career extends Component {
  constructor(props) {
    super(props)

    this.addCareer = this.addCareer.bind(this);
  }

  addCareer() {
    const {updateState, info, rootName} = this.props;
    const newCompany = Object.keys(info['companies'][0]).reduce((prev, current) => {
      return {
        ...prev,
        [current]: '',
      }})

    info['companies'].push(newCompany);

    updateState(rootName, 
      {companies: info})
  }
  
  render() {
    const {updateState, info, rootName} = this.props;
    const {companies} = info;
    console.log(companies)

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

export default Career