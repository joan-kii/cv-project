import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 

class EducationForm extends Component {
  constructor(props) {
    super(props)

    this.toggleEditMode = this.toggleEditMode.bind(this);

    this.state = {
      editMode: true      
    }
  }

  toggleEditMode() {
    this.setState((prevState) => ({
      editMode: !prevState.editMode
    }))
  }
    
  render() {
    const {updateState, info, rootName} = this.props;
    const {school, title, endDate} = info;
    
    const editMode = this.state.editMode;

    return (
      <Form className='mt-4' onSubmit={(e)=>e.preventDefault()}>

        <Form.Group controlId='formGridSchool'>
          <Form.Label>Centro Educativo</Form.Label>

          {editMode ?
          <Form.Control 
            value={school}
            type='text' 
            placeholder='Centro Educativo'
            onChange={(e) => updateState(rootName,
              {...this.props.info, school: e.target.value})}
              />
            : <p>{school}</p>
            }

        </Form.Group>

        <Form.Group controlId='formGridTitle'>
          <Form.Label>Titulación</Form.Label>

          {editMode ?
          <Form.Control 
            value={title} 
            type='text' 
            placeholder='Titulación'
            onChange={(e) => updateState(rootName,
              {...this.props.info, title: e.target.value})}
              />
            : <p>{title}</p>
            }

        </Form.Group>

        <Form.Row className='justify-content-between'>
          <Col>
            <Form.Group controlId='formGridEndDate'>
                <Form.Label>Fecha de Finalización</Form.Label>

                {editMode ?
                <Form.Control 
                  value={endDate} 
                  type='date' 
                  placeholder='Fecha'
                  onChange={(e) => updateState(rootName,
                    {...this.props.info, endDate: e.target.value})}
                    />
                  : <p>{endDate}</p>
                  }

            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row className='justify-content-between'>
          <Button
            className='submitButton'
            variant={editMode ? 'primary' : 'secondary'}
            size='lg'
            onClick={this.toggleEditMode}>
              {editMode ? 'Enviar' : 'Editar'}
          </Button>
          <Button
            className='deleteButton'
            variant='danger'
            size='lg'
            /* onClick={} */>
              Eliminar
          </Button>
        </Form.Row>   
      </Form>
    )
  }
}

export default EducationForm
