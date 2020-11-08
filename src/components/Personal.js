import React, { Component } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const CardStyled = styled.div`
  .title {
    text-align: center;
  }

  .card {
    max-width: 650px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  `;

class Personal extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
    const {updateState, info, rootName} = this.props;
    const {name, secondName, email, phone, portfolio, city, country} = info;

    return (
      <CardStyled>
        <Container id='personal' className='mt-5 card' as='section'>
          <h2 className='title'>Información Personal</h2>

          <Form className='mt-4' onSubmit={(e)=>e.preventDefault()}>

            <Form.Row className='justify-content-between'>
              <Col>
                <Form.Group controlId='formGridName'>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control 
                    value={name} 
                    type='text' 
                    placeholder='Nombre' 
                    onChange={(e) => updateState(rootName, {...this.props.info, name:e.target.value})}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='formGridSecondName'>
                  <Form.Label>Apellidos</Form.Label>
                  <Form.Control 
                    value={secondName} 
                    type='text' 
                    placeholder='Apellidos' 
                    onChange={(e) => updateState(rootName, {...this.props.info, secondName:e.target.value})}/>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Group controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control 
                value={email} 
                type='email' 
                placeholder='joankii@theodinproject.com' 
                onChange={(e) => updateState(rootName, {...this.props.info, email:e.target.value})}/>
            </Form.Group>

            <Form.Row className='justify-content-between'>
              <Col>
                <Form.Group controlId='formGridPhone'>
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control 
                    value={phone} 
                    type='text' 
                    placeholder='Teléfono' 
                    onChange={(e) => updateState(rootName, {...this.props.info, phone:e.target.value})}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='formGridPortfolio'>
                  <Form.Label>Portfolio</Form.Label>
                  <Form.Control 
                    value={portfolio} 
                    type='url' 
                    placeholder='github.com/joan-kii' 
                    onChange={(e) => updateState(rootName, {...this.props.info, portfolio:e.target.value})}/>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row className='justify-content-between'>
              <Col>
                <Form.Group controlId='formGridCity'>
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control 
                    value={city} 
                    type='text' 
                    placeholder='Ciudad' 
                    onChange={(e) => updateState(rootName, {...this.props.info, city:e.target.value})}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='formGridCountry'>
                  <Form.Label>País</Form.Label>
                  <Form.Control 
                    value={country} 
                    type='text' 
                    placeholder='País' 
                    onChange={(e) => updateState(rootName, {...this.props.info, country:e.target.value})}/>
                </Form.Group>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </CardStyled>    
    )
  }
}

export default Personal
export  { CardStyled }