import React, { Component } from 'react';
import CareerForm from './CareerForm'; 
import Container from 'react-bootstrap/Container';
import CardStyled from './CardStyled';


class Career extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      
    }
  }
  
  render() {
    const {updateState, info, rootName} = this.props;
    
    return (
      <CardStyled>
        <Container id='career' className='mt-5 card' as='section'>
        <h2 className='title'>Profesional</h2>
          <CareerForm 
            updateState={updateState} 
            info={info} 
            rootName={rootName} />
        </Container>
      </CardStyled>
    )
  }
}

export default Career