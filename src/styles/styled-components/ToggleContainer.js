import styled from 'styled-components'

export const ToggleContainer = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  background: rgb(247, 247, 247);
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  /* align-items: flex-end; */
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.2rem;

  span {
    height: auto;
    width: auto;
    transition: all 0.3s linear;
  }
  :hover {
    background: #f0ebeb;
  }
  .light {
    color: #d38a84;
    transform: ${({ lightTheme }) =>
    lightTheme ? 'translateY(0)' : 'translateY(100px)'};
  }
  .dark {
    color: #7b81ec;
    transform: ${({ lightTheme }) =>
    lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
  }
`
