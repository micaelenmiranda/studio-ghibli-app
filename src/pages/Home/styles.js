import styled from 'styled-components'

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 100%;
  padding: 20px;
  max-width: 1200px;
  margin: 20px auto;

  @media(min-width: 768px) { 
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  @media(min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
    padding: 40px;
  }
`

export { Wrapper }
