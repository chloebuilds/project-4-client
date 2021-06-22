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
    display: inline-block;
    width: 90%;
    font-size: 14px;
    &::placeholder {
      color: #434457;
    }
  `,
  ButtonContainer: styled.div`
    margin: 0 auto;
    padding: 10px;
    display: flex;
  `,
}

export default FormStyle
