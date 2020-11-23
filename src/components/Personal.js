/* import React, { Component } from 'react'; */
import React, { useState } from 'react';
import CardStyled from './CardStyled';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

// FUNCTIONAL HOOKS

const Personal = (props) => {

  const [personalData, setPersonalData] = useState(props.personalData);
  const [editMode, setEditMode] = useState(true);

  return (
    <CardStyled>
      <Container id='personal' className='mt-5 card' as='section'>
        <h2 className='title'>Información Personal</h2>

        <Form className='mt-4' onSubmit={(e)=>e.preventDefault()}>

          <Form.Row className='justify-content-between'>
            <Col>
              <Form.Group controlId='formGridName'>
                <Form.Label>Nombre</Form.Label>

                {editMode ?
                <Form.Control 
                  value={personalData.name} 
                  type='text' 
                  placeholder='Nombre' 
                  onChange={(e) => setPersonalData({...personalData, name: e.target.value})}
                  />
                  : <p>{personalData.name}</p>
                  }

              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='formGridSecondName'>
                <Form.Label>Apellidos</Form.Label>

                {editMode ?
                <Form.Control 
                  value={personalData.secondName} 
                  type='text' 
                  placeholder='Apellidos' 
                  onChange={(e) => setPersonalData({...personalData, secondName: e.target.value})}/>
                  : <p>{personalData.secondName}</p>
                  }

              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Group controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>

            {editMode ?
            <Form.Control 
              value={personalData.email} 
              type='email' 
              placeholder='joankii@theodinproject.com' 
              onChange={(e) => setPersonalData({...personalData, email: e.target.value})}/>
              : <p>{personalData.email}</p>
              }

          </Form.Group>
          <Form.Row className='justify-content-between'>
            <Col>
              <Form.Group controlId='formGridPhone'>
                <Form.Label>Teléfono</Form.Label>

                {editMode ?
                <Form.Control 
                  value={personalData.phone} 
                  type='text' 
                  placeholder='Teléfono' 
                  onChange={(e) => setPersonalData({...personalData, phone: e.target.value})}/>
                  : <p>{personalData.phone}</p>
                  } 

              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='formGridPortfolio'>
                <Form.Label>Portfolio</Form.Label>

                {editMode ?
                <Form.Control 
                  value={personalData.portfolio} 
                  type='url' 
                  placeholder='https://github.com/joan-kii' 
                  onChange={(e) => setPersonalData({...personalData, portfolio: e.target.value})}/>
                  : <p>{personalData.portfolio}</p>
                  }

              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row className='justify-content-between'>
            <Col>
              <Form.Group controlId='formGridCity'>
                <Form.Label>Ciudad</Form.Label>

                {editMode ?
                <Form.Control 
                  value={personalData.city} 
                  type='text' 
                  placeholder='Ciudad' 
                  onChange={(e) => setPersonalData({...personalData, city: e.target.value})}/>
                  : <p>{personalData.city}</p>
                  }

              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='formGridCountry'>
                <Form.Label>País</Form.Label>

                {editMode ?
                <Form.Control 
                  value={personalData.country} 
                  type='text' 
                  placeholder='País' 
                  onChange={(e) => setPersonalData({...personalData, country: e.target.value})}/>
                  : <p>{personalData.country}</p>
                  }

              </Form.Group>
            </Col>
          </Form.Row>

          <Button 
            className='submitButton'
            variant={editMode ? 'primary' : 'secondary'}
            size='lg'
            onClick={() => setEditMode(!editMode)}>
              {editMode ? 'Enviar' : 'Editar'}
          </Button>

        </Form>
      </Container>
    </CardStyled>    
  )
}

export default Personal;

// CLASS COMPONENT

/* class Personal extends Component {
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
    const { name, secondName, email, phone, 
      portfolio, city, country } = info;

    const editMode = this.state.editMode;  

    return (
      <CardStyled>
        <Container id='personal' className='mt-5 card' as='section'>
          <h2 className='title'>Información Personal</h2>

          <Form className='mt-4' onSubmit={(e)=>e.preventDefault()}>

            <Form.Row className='justify-content-between'>
              <Col>
                <Form.Group controlId='formGridName'>
                  <Form.Label>Nombre</Form.Label>

                  {editMode ?
                  <Form.Control 
                    value={name} 
                    type='text' 
                    placeholder='Nombre' 
                    onChange={(e) => updateState(rootName, 
                      {...this.props.info, name: e.target.value})}
                    />
                    : <p>{name}</p>
                    }

                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='formGridSecondName'>
                  <Form.Label>Apellidos</Form.Label>

                  {editMode ?
                  <Form.Control 
                    value={secondName} 
                    type='text' 
                    placeholder='Apellidos' 
                    onChange={(e) => updateState(rootName, 
                      {...this.props.info, secondName: e.target.value})}/>
                    : <p>{secondName}</p>
                    }

                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Group controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>

              {editMode ?
              <Form.Control 
                value={email} 
                type='email' 
                placeholder='joankii@theodinproject.com' 
                onChange={(e) => updateState(rootName, 
                  {...this.props.info, email: e.target.value})}/>
                : <p>{email}</p>
                }

            </Form.Group>
            <Form.Row className='justify-content-between'>
              <Col>
                <Form.Group controlId='formGridPhone'>
                  <Form.Label>Teléfono</Form.Label>

                  {editMode ?
                  <Form.Control 
                    value={phone} 
                    type='text' 
                    placeholder='Teléfono' 
                    onChange={(e) => updateState(rootName, 
                      {...this.props.info, phone: e.target.value})}/>
                    : <p>{phone}</p>
                    } 

                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='formGridPortfolio'>
                  <Form.Label>Portfolio</Form.Label>

                  {editMode ?
                  <Form.Control 
                    value={portfolio} 
                    type='url' 
                    placeholder='https://github.com/joan-kii' 
                    onChange={(e) => updateState(rootName, 
                      {...this.props.info, portfolio: e.target.value})}/>
                    : <p>{portfolio}</p>
                    }

                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row className='justify-content-between'>
              <Col>
                <Form.Group controlId='formGridCity'>
                  <Form.Label>Ciudad</Form.Label>

                  {editMode ?
                  <Form.Control 
                    value={city} 
                    type='text' 
                    placeholder='Ciudad' 
                    onChange={(e) => updateState(rootName, 
                      {...this.props.info, city: e.target.value})}/>
                    : <p>{city}</p>
                    }

                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='formGridCountry'>
                  <Form.Label>País</Form.Label>

                  {editMode ?
                  <Form.Control 
                    value={country} 
                    type='text' 
                    placeholder='País' 
                    onChange={(e) => updateState(rootName, 
                      {...this.props.info, country: e.target.value})}/>
                    : <p>{country}</p>
                    }

                </Form.Group>
              </Col>
            </Form.Row>

            <Button 
              className='submitButton'
              variant={editMode ? 'primary' : 'secondary'}
              size='lg'
              onClick={this.toggleEditMode}>
                {editMode ? 'Enviar' : 'Editar'}
            </Button>

          </Form>
        </Container>
      </CardStyled>    
    )
  }
}

export default Personal */