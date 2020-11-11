import styled from 'styled-components';

const CardStyled = styled.div`
  .title {
    text-align: center;
  }

  .card {
    max-width: 650px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .submitButton, .deleteButton {
    margin-bottom: 1em;
  }

  .addTaskButton {
    border-radius: 10px;
  }

  p {
    color: #007bff;
  }
  `;

  export default CardStyled;