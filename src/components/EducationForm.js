import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class EducationForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
            
    }
}
    
  render() {
    const {school, title, endDate} = this.props.schools;
    const {updateState, rootName} = this.props;
    
    return (
      <Form className='mt-4' onSubmit={(e)=>e.preventDefault()}>

        <Form.Group controlId='formGridSchool'>
          <Form.Label>Centro Educativo</Form.Label>
          <Form.Control value={school} type='text' placeholder='Centro Educativo' />
        </Form.Group>

        <Form.Group controlId='formGridTitle'>
          <Form.Label>Titulación</Form.Label>
          <Form.Control value={title} type='text' placeholder='Titulación' />
        </Form.Group>

        <Form.Row className='justify-content-between'>
          <Col>
            <Form.Group controlId='formGridEndDate'>
                <Form.Label>Fecha de Finalización</Form.Label>
                <Form.Control value={endDate} type='date' placeholder='Fecha' />
            </Form.Group>
          </Col>
        </Form.Row>
            
      </Form>
    )
  }
}

export default EducationForm
