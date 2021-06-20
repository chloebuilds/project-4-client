import styled from 'styled-components'


export const Button = styled.button`
  margin: 2em auto;
  display: block;
  -webkit-appearance: none;
  border: 1px solid rgba(255,255,255,0.45);
  border-radius: 50px;
  padding: 1em 3em;
  background-repeat: no-repeat;
  background-size: 100%;
  background-clip: padding-box;
  position: relative;
  color: #FFF;
  width: ${props => props.width || '170px'};
  margin: 2px;
  background-image: linear-gradient(90deg, #7b81ec, #898dda);
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
Z
  &:before {
    content: "";
    width: 100%;
    height:100%;
    position: absolute;
    top: 5px;
    left: 5px;
    border-radius: 50px;
    z-index: -1;
    filter: blur(14px);
    background-image: linear-gradient(90deg, #7b81ec, transparent);
    
    &:hover {
      transform: scale(1.05);
    }
  }

  &:after {
    content: "";
    width: 100%;
    height:100%;
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 50px;
    z-index: -1;
    filter: blur(14px);
    background-image: linear-gradient(90deg, transparent, #898dda);
    
    &:hover {
      transform: scale(1.05);
    }
  }
`

/* url(${gradientBackground}) */
