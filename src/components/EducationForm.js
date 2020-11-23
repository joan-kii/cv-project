/* import React, { Component } from 'react'; */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 

// FUNCTIONAL HOOKS

const EducationForm = (props) => {

  const {index, schools} = props;
  const [schoolsList, setSchoolsList] = useState(schools);
  console.log(schoolsList)
  const [schoolData, setSchoolData] = useState(schoolsList[index]);
  console.log(schoolData)
  const [editMode, setEditMode] = useState(true);
  const submitHandler = () => {
    setEditMode(!editMode);
    setSchoolsList(schoolsList.concat(schoolData));
  };

  return (
    <Form className='mt-4' onSubmit={(e)=>e.preventDefault()}>

      <Form.Group controlId='formGridSchool'>
        <Form.Label>Centro Educativo</Form.Label>

        {editMode ?
        <Form.Control 
          value={schoolData.school}
          type='text' 
          placeholder='Centro Educativo'
          onChange={(e) => setSchoolData({...schoolData, school: e.target.value})}
            />
          : <p>{schoolData.school}</p>
          }

      </Form.Group>

      <Form.Group controlId='formGridTitle'>
        <Form.Label>Titulación</Form.Label>

        {editMode ?
        <Form.Control 
          value={schoolData.title} 
          type='text' 
          placeholder='Titulación'
          onChange={(e) => setSchoolData({...schoolData, title: e.target.value})}
          />
          : <p>{schoolData.title}</p>
          }

      </Form.Group>

      <Form.Row className='justify-content-between'>
        <Col>
          <Form.Group controlId='formGridEndDate'>
              <Form.Label>Fecha de Finalización</Form.Label>

              {editMode ?
              <Form.Control 
                value={schoolData.endDate} 
                type='date' 
                placeholder='Fecha'
                onChange={(e) => setSchoolData({...schoolData, endDate: e.target.value})}
                />
                : <p>{schoolData.endDate}</p>
                }

          </Form.Group>
        </Col>
      </Form.Row>

      <Form.Row className='justify-content-between'>
        <Button
          className='submitButton'
          variant={editMode ? 'primary' : 'secondary'}
          size='lg'
          onClick={() => submitHandler()}>
            {editMode ? 'Enviar' : 'Editar'}
        </Button>

        {schools.length > 1 &&
          <Button
            className='deleteButton'
            variant='danger'
            size='lg'
            onClick={() => setSchoolsList(schoolsList.splice(index, 1))}>
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
