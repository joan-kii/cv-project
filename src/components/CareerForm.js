import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 

class CareerForm extends Component {
  constructor(props) {
    super(props)

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.updateCareer = this.updateCareer.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

    this.state = {
      editMode: true      
    }
  }

  toggleEditMode() {
    this.setState((prevState) => ({
      editMode: !prevState.editMode
    }))
  }

  updateCareer(index, value) {
    const {updateState, info, rootName} = this.props; 

    info.tasks[index] = value;

    updateState(rootName, 
      {...info, tasks: info.tasks})
  }

  addTask() {
    const {updateState, info, rootName} = this.props; 

    info.tasks.push('');

    updateState(rootName, 
      {...info, tasks: info.tasks})
      console.log(info.tasks)
  }

  deleteTask(index) {
    const {updateState, info, rootName} = this.props; 

    info.tasks.splice(index, 1);

    updateState(rootName, 
      {...info, tasks: info.tasks})
      console.log(info.tasks)
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
              className='addTaskButton'
              variant='light'
              onClick={this.addTask}>+</Button>)}
          </Form.Label>

          {editMode ? tasks.map((task, index) => 
            <div key={index} >
              <Form.Row>
                <Col>
                  <Form.Control 
                    className='inputTask'
                    value={task} 
                    type='text' 
                    placeholder='Tareas'
                    onChange={(e) => this.updateCareer(index, e.target.value)}
                    />
                </Col>
                <Col>
                {tasks.length > 1 &&
                  (<Button 
                    className='deleteTaskButton'
                    variant='outline-danger'
                    size='sm'
                    onClick={() => this.deleteTask(index)}>
                      Borrar
                    </Button>)}
                </Col>
              </Form.Row>      
            </div>)
              : <p>{tasks.join(' - ')}</p>
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

          {editMode &&
            <Button
              className='deleteButton'
              variant='danger'
              size='lg'
              /* onClick={} */>
                Eliminar
            </Button>}

        </Form.Row>   
      </Form>
    )
  }
}

export default CareerForm