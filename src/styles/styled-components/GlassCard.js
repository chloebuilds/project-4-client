import styled, { css } from 'styled-components'

const flexStyles = css`
  display: flex;
  flex-direction: ${p => p.flexDirection};
  align-items: ${p => p.alignItems};
  justify-content: ${p => p.justifyContent};
`

const GlassCard = styled.div`
  border-radius: 1rem;
  display: inline-block;
  width: ${p => p.width || '70%'};
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5em;
  margin: ${p => p.margin || '0.5em'};
  z-index: 1;
  backdrop-filter: blur(40px);
  border: solid 1.5px transparent;
  background-clip: padding-box;
  box-shadow: 5px 5px 20px -3px rgba(46, 54, 68, 0.2);
  color: white;
  ${p => p.isFlex && flexStyles};
  flex: ${p => p.flex};
`

export default GlassCard
