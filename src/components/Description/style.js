import styled from 'styled-components'

const Desc = styled.section`
  margin: 60px 20px;
  min-height: 300px;
  max-width: 1200px;

  @media(min-width: 1300px) { 
    margin: 60px auto;
  }
`

const DescWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;

  @media(min-width: 992px) {
    grid-gap: 60px;
    grid-template-columns: repeat(2, 1fr);
  }
`

const DescImage = styled.div`
  img {
    border-radius: 20px;
    width: 100%;
  }
`

const DescText = styled.div`
  color: #FFF;
`

const DescTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`

const DescDetail = styled.p`
  font-size: 16px;
  font-weight: 700;
`

const DescSinopse = styled.p`
  font-size: 18px;
  line-height: 1.5;
`

export { 
  Desc, 
  DescWrapper, 
  DescImage, 
  DescText,
  DescTitle,
  DescDetail,
  DescSinopse
}