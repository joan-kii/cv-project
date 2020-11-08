import React from 'react';
import styled from 'styled-components';
import Jumbotron from 'react-bootstrap/Jumbotron';
import jumboImage from '../images/jumboImage.jpg';
import Container from 'react-bootstrap/Container';

const JumboStyled = styled.div`
  .jumbo {
    background: url(${jumboImage}) no-repeat fixed top;
    background-size: cover;
    height: 164px;
    position: relative;
    z-index: -2;
    color: white;
  }
`;

const Jumbo = () => (
  <JumboStyled>
    <Jumbotron fluid className='jumbo'>
      <Container>
          <h1>Crea tu Curriculum Vitae</h1>
          <p>Cuéntale al mundo quién eres.</p>
      </Container>
    </Jumbotron>
  </JumboStyled>  
)

export default Jumbo
