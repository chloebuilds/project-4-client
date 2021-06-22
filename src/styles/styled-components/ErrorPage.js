import styled from 'styled-components'
// import gradientBackground from '../../assets/gradient-background.jpg'

const StyledErrorPage = styled.div`
  /* margin-top: 50px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Space Grotesk', Helvetica, Sans-Serif;
  div.light-card {
    border-radius: 1rem;
    display: inline-block;
    width: ${p => p.width || '70%'};
    background: rgba(247, 247, 247, 0.89);
    padding: 1.5em;
    z-index: 1;
    backdrop-filter: blur(40px);
    border: solid 1.5px transparent;
    background-clip: padding-box;
    box-shadow: 5px 5px 20px -3px rgba(46, 54, 68, 0.2);
    color: white;
  }
  div.error-card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100% - var(--navbar-height));
  }
  h1,
  h2 {
    text-transform: uppercase;
    color: #7b81ec;
  }
  p {
    color: #d38a84;
    text-align: center;
  }
`

export default StyledErrorPage
