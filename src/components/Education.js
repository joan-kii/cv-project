import React, { Component } from 'react';
import EducationForm from './EducationForm'; 
import Container from 'react-bootstrap/Container';
import CardStyled from './Personal';


class Education extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           
      }
  }
  
  render() {
    const {schools} = this.props.info;
    const {updateState, rootName} = this.props;

    return (
      <CardStyled>
        <Container id='education' className='mt-5 card' as='section'>
        <h2 className='title'>Formación</h2>
          <EducationForm 
            updateState={updateState} 
            schools={schools} 
            rootName={rootName} />
        </Container>
      </CardStyled>    
    )
  }
}

export default Education
