import styled from 'styled-components'

export const HomeButton = styled.button`
  margin: 1em auto;
  display: block;
  -webkit-appearance: none;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 50px;
  padding: 0.75em 1em;
  background-repeat: no-repeat;
  background-size: 100%;
  background-clip: padding-box;
  position: relative;
  color: #fff;
  width: ${props => props.width || '170px'};
  background-image: linear-gradient(90deg, #7b81ec, #898dda);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 16px;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
  Z &:before {
    content: '';
    width: 100%;
    height: 100%;
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
    content: '';
    width: 100%;
    height: 100%;
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
