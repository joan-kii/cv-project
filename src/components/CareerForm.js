import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 

class CareerForm extends Component {
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
    const {company, position, tasks, duration, endDate} = info;
    
    const editMode = this.state.editMode;

    return (
      <Form className='mt-4' onSubmit={(e)=>e.preventDefault()}>

        <Form.Group controlId='formGridCompany'>
          <Form.Label>Empresa</Form.Label>

          {editMode ?
          <Form.Control 
            value={company}
            type='text' 
            placeholder='Empresa'
            onChange={(e) => updateState(rootName,
              {...this.props.info, company: e.target.value})}
              />
            : <p>{company}</p>
            }

        </Form.Group>

        <Form.Group controlId='formGridPosition'>
          <Form.Label>Cargo</Form.Label>

          {editMode ?
          <Form.Control 
            value={position} 
            type='text' 
            placeholder='Cargo'
            onChange={(e) => updateState(rootName,
              {...this.props.info, position: e.target.value})}
              />
            : <p>{position}</p>
            }

        </Form.Group>

        <Form.Group controlId='formGridTasks'>
          <Form.Label>
            Tareas {editMode && (
              <Button
              className='plusButton'
              variant='outline-primary'
              size='sm'>+</Button>)}
          </Form.Label>

          {editMode ?
          <Form.Control 
            value={tasks} 
            type='text' 
            placeholder='Tareas'
            onChange={(e) => updateState(rootName,
              {...this.props.info, tasks: e.target.value})}
              />
            : <p>{tasks}</p>
            }

        </Form.Group>

        <Form.Row className='justify-content-between'>
          <Col>
            <Form.Group controlId='formGridDuration'>
                <Form.Label>Duración</Form.Label>

                {editMode ?
                <Form.Control 
                  value={duration} 
                  type='text' 
                  placeholder='3 años y 6 meses'
                  onChange={(e) => updateState(rootName,
                    {...this.props.info, duration: e.target.value})}
                    />
                  : <p>{duration}</p>
                  }

            </Form.Group>
          </Col>

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

export default CareerForm