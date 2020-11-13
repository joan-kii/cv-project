import React, { Component } from 'react';
import CardStyled from './CardStyled';
import EducationForm from './EducationForm'; 
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


class Education extends Component {
  constructor(props) {
    super(props)
    this.addSchool = this.addSchool.bind(this);
  }

  addSchool(schools) {
    const {updateState, rootName} = this.props;
    const newSchool = Object.keys(schools[0]).reduce((prev, current) => {
      return {
        ...prev,
        [current]: '',
      }})

    schools.push(newSchool);

    updateState(rootName, 
      {schools: schools})
  }
  
  render() {
    const {updateState, info, rootName} = this.props;
    const {schools} = info;
    
    return (
      <CardStyled>
        <Container id='education' className='mt-5 card' as='section'>
        <h2 className='title'>Formación</h2>
        <Button 
          variant='primary' 
          onClick={() => this.addSchool(schools)}
          block>+ Anadir Formación +</Button>
        {schools.map((school, index) => 
          <EducationForm 
            key={index}
            index={index}
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

