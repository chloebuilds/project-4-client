import styled from 'styled-components'



const GlassCard = styled.div`
  
  border-radius: 1.5rem;
  display: inline-block;
  flex-wrap: wrap;
  width: 30%;
  background: rgba(255,255,255, 0.1);
  padding: 2em;
  margin: 1em;
  z-index: 1;
  backdrop-filter: blur(40px);
  border: solid 1.5spx transparent;
  background-clip: padding-box;
  box-shadow: 5px 5px 20px -3px  rgba(46, 54, 68, 0.2);
  color: white;
`


export default GlassCard