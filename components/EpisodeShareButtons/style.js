// @flow
import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 0 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;

  button {
    margin-top: 16px;
    margin-right: 8px;
    width: 100%;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    
    button {
      width: 100%;
    }
  }
`