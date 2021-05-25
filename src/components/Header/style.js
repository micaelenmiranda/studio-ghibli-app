import styled from 'styled-components'
import wallpaper from '../../assets/images/ghibli-forest.jpg';

const Header = styled.header`
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.4);
  background-image: url(${wallpaper});
  background-repeat: no-repeat;
  background-size: cover;
  height: 210px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  color: #fff;

  img {
    max-width: 200px;
    width: 100%;
  }
`

export { Header, Title }
