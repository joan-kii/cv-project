import React, { Component } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

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
  render() {
    return (
      <CardStyled>
        <Container id='personal' className='mt-5 card' as='section'>
          <h2 className='title'>Información Personal</h2>

          <Form className='mt-4' onSubmit={(e)=>e.preventDefault()}>
            <Form.Row>
              <Form.Group controlId='formGridName'>
                <Col>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control placeholder='Nombre' />
                </Col>
              </Form.Group>
              <Form.Group controlId='formGridSecondName'>
                <Form.Label>Apellidos</Form.Label>
                <Form.Control placeholder='Apellidos' />
              </Form.Group>
            </Form.Row>
          </Form>
        </Container>
      </CardStyled>    
    )
  }
}

export default Personal
export  { CardStyled }