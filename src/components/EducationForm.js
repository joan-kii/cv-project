/* import React, { Component } from 'react'; */
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 

// FUNCTIONAL HOOKS

const EducationForm = (props) => {
  
  const {index, deleteSchool} = props;
  const [schoolsList, setSchoolsList] = useState(props.schoolsList);
  const [editMode, setEditMode] = useState(true);

  useEffect(() => { 
    setSchoolsList(props.schoolsList)
  }, [props.schoolsList])

  return (
    <Form className='mt-4' onSubmit={(e) => e.preventDefault()} >

      <Form.Group controlId='formGridSchool'>
        <Form.Label>Centro Educativo</Form.Label>

        {editMode ?
        <Form.Control 
          value={schoolsList[index].school}
          type='text' 
          placeholder='Centro Educativo'
          onChange={(e) => setSchoolsList([...schoolsList], 
            schoolsList[index].school = e.target.value)} />
          : <p>{schoolsList[index].school}</p>
          }

      </Form.Group>

      <Form.Group controlId='formGridTitle'>
        <Form.Label>Titulación</Form.Label>

        {editMode ?
        <Form.Control 
          value={schoolsList[index].title} 
          type='text' 
          placeholder='Titulación'
          onChange={(e) => setSchoolsList([...schoolsList], 
            schoolsList[index].title = e.target.value)} />
          : <p>{schoolsList[index].title}</p>
          }

      </Form.Group>

      <Form.Row className='justify-content-between'>
        <Col>
          <Form.Group controlId='formGridEndDate'>
              <Form.Label>Fecha de Finalización</Form.Label>

              {editMode ?
              <Form.Control 
                value={schoolsList[index].endDate} 
                type='date' 
                placeholder='Fecha'
                onChange={(e) => setSchoolsList([...schoolsList], 
                  schoolsList[index].endDate = e.target.value)} />
                : <p>{schoolsList[index].endDate}</p>
                }

          </Form.Group>
        </Col>
      </Form.Row>

      <Form.Row className='justify-content-between'>
        <Button
          className='submitButton'
          variant={editMode ? 'primary' : 'secondary'}
          size='lg'
          onClick={() => setEditMode(!editMode)}>
            {editMode ? 'Enviar' : 'Editar'}
        </Button>

        {schoolsList.length > 1 &&
          <Button
            className='deleteButton'
            variant='danger'
            size='lg'
            onClick={() => deleteSchool(index)}>
              Eliminar
          </Button>}
      </Form.Row>   
    </Form>
  )
}

export default EducationForm;

// CLASS COMPONENT

/* class EducationForm extends Component {
  constructor(props) {
    super(props)

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.updateSchool = this.updateSchool.bind(this);
    this.deleteSchool = this.deleteSchool.bind(this);

    this.state = {
      editMode: true      
    }
  }

  toggleEditMode() {
    this.setState((prevState) => ({
      editMode: !prevState.editMode
    }))
  }

  updateSchool(property, index, value) {
    const {updateState, schools, rootName} = this.props;

    schools[index] = {...schools[index],
    [property]: value};

    updateState(rootName, 
      {schools: schools})
  }

  deleteSchool(index) {
    const {updateState, schools, rootName} = this.props;

    schools.splice(index, 1);

    updateState(rootName, 
      {schools: schools})
  }
    
  render() {
    const {index, schools} = this.props;
    const {school, title, endDate} = schools;
    
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
            onChange={(e) => this.updateSchool('school', index, e.target.value)}
              />
            : <p>{schools[index].school}</p>
            }

        </Form.Group>

        <Form.Group controlId='formGridTitle'>
          <Form.Label>Titulación</Form.Label>

          {editMode ?
          <Form.Control 
            value={title} 
            type='text' 
            placeholder='Titulación'
            onChange={(e) => this.updateSchool('title', index, e.target.value)}
            />
            : <p>{schools[index].title}</p>
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
                  onChange={(e) => this.updateSchool('endDate', index, e.target.value)}
                  />
                  : <p>{schools[index].endDate}</p>
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

          {schools.length > 1 &&
            <Button
              className='deleteButton'
              variant='danger'
              size='lg'
              onClick={() => this.deleteSchool(index)} >
                Eliminar
            </Button>}
        </Form.Row>   
      </Form>
    )
  }
}

export default EducationForm; */
