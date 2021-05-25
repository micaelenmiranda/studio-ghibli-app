import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #d3d3d3;
  margin: 10px 0;
  text-align: center;

  @media(min-width: 992px) {
    margin: 10px;
  }

  h2 {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
  }

  h3 {
    color: #fff;
    font-size: 14px;
    font-weight: 400;
  }
`

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 100%;
  padding: 20px;

  @media(min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
    padding: 40px;
  }
`

export { Card, Wrapper }