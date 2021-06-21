import styled, { css } from 'styled-components'

const flexStyles = css`
  display: flex;
  flex-direction: ${(p) => p.flexDirection};
  align-items: ${(p) => p.alignItems};
  justify-content: ${(p) => p.justifyContent};
`

export const StyledCard = styled.div`
  margin: ${(p) => p.margin || '0 0 1rem'};
  padding: ${(p) => p.padding || '1rem'};
  background: ${(p) => p.background || '#100F10'};
  border: ${(p) => p.border};
  ${(p) => p.isFlex && flexStyles};
  border-radius: 0.75rem;
  color: ${(p) => p.color || 'white'};
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px
  //rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`


export default StyledCard