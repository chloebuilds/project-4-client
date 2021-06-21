import styled from 'styled-components'

const FormStyle = {
  P: styled.p`
    display: inline-block;
    font-size: 14px;
  `,
  Input: styled.input`
    outline: none;
    border: none;
    background: rgba(247, 247, 247, 0.2);
    color: #262526;
    padding: 7px;
    margin: 10px;
    display: block;
    width: 250px;
    &::placeholder {
      color: #434457;
    }
  `,
}

export default FormStyle
