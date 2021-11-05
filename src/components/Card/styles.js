import styled from 'styled-components'

const CardMovie = styled.div`
  border: 1px solid #d3d3d3;
  margin: 10px 0;
  text-align: center;

  @media(min-width: 1200px) {
    height: 460px;
  }
`

const CardImage = styled.img`
  width: 100%;
`

const CardTitle = styled.h2`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  padding: 0 20px;
`

const CardSubTitle = styled.h3`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  padding: 0 20px;
`

export {
  CardMovie, 
  CardImage, 
  CardTitle, 
  CardSubTitle 
}
