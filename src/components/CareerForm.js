import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 

class CareerForm extends Component {
  constructor(props) {
    super(props)

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.updateCompany = this.updateCompany.bind(this);
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

  updateCompany(property, indexCompany, value) {
    const {updateState, companies, rootName} = this.props;

    companies[indexCompany] = {...companies[indexCompany],
    [property]: value};

    updateState(rootName, 
      {companies: companies})
  }

  deleteCompany(indexCompany) {
    const {updateState, companies, rootName} = this.props;

    companies[indexCompany].splice(indexCompany, 1);

    updateState(rootName, 
      {companies: companies})
  }

  updateCareer(indexCompany, indexTask, value) {
    console.log(indexCompany, indexTask, value)
    const {updateState, companies, rootName} = this.props; 
    console.log(companies)

    companies[indexCompany].tasks[indexTask] = value;

    updateState(rootName, 
      {...companies[indexCompany], tasks: companies[indexCompany].tasks})
  }

  addTask(indexCompany) {
    const {updateState, companies, rootName} = this.props; 

    companies[indexCompany].tasks.push('');

    updateState(rootName, 
      {...companies[indexCompany], tasks: companies[indexCompany].tasks})
  }

  deleteTask(indexCompany, indexTask) {
    const {updateState, companies, rootName} = this.props; 

    companies[indexCompany].tasks.splice(indexTask, 1);

    updateState(rootName, 
      {...companies[indexCompany], tasks: companies[indexCompany].tasks})
  }
    
  render() {
    const {index, companies} = this.props;
    const {company, position, tasks, duration, endDate} = companies[index];
    
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
            onChange={(e) => this.updateCompany('company', index, e.target.value)}
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
            onChange={(e) => this.updateCompany('position', index, e.target.value)}
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
              onClick={() => this.addTask(index)}>+</Button>)}
          </Form.Label>

          {editMode ? companies[index].tasks.map((task, indexTask) => 
            <div key={indexTask} >
              <Form.Row>
                <Col>
                  <Form.Control 
                    className='inputTask'
                    value={task} 
                    type='text' 
                    placeholder='Tareas'
                    onChange={(e) => this.updateCareer(index, indexTask, e.target.value)}
                    />
                </Col>
                <Col>
                {companies[index].tasks.length > 1 &&
                  (<Button 
                    className='deleteTaskButton'
                    variant='outline-danger'
                    size='sm'
                    onClick={() => this.deleteTask(index, indexTask)}>
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
                  onChange={(e) => this.updateCompany('duration', index, e.target.value)}
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
                  onChange={(e) => this.updateCompany('endDate', index, e.target.value)}
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

          {companies[index].length > 1 &&
            <Button
              className='deleteButton'
              variant='danger'
              size='lg'
              onClick={() => this.deleteCompany(index)} >
                Eliminar
            </Button>}

        </Form.Row>   
      </Form>
    )
  }
}

export default CareerForm