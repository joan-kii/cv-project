import React, { Component } from 'react';
import CardStyled from './CardStyled';
import EducationForm from './EducationForm'; 
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


class Education extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      
    }
  }
  
  render() {
    const {updateState, info, rootName} = this.props;
    const {schools} = info;
    console.log(info)
    console.log(schools)
    
    return (
      <CardStyled>
        <Container id='education' className='mt-5 card' as='section'>
        <h2 className='title'>Formación</h2>
        <Button variant='primary' block>+ Anadir Formación +</Button>
        {schools.map((school, index) => 
          <EducationForm 
            key={index}
            updateState={updateState} 
            schools={schools} 
            rootName={rootName} />
            )}
        </Container>
      </CardStyled>
    )
  }
}

export default Education

