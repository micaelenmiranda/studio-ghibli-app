import { Header, Title } from './style'
import logo from '../../assets/images/studio-ghibli-logo.png'

export default function createHeader() {
  return(
    <>
     <Header>
        <Title>
          <img src={logo} alt="Studio Ghibli logo"/>
        </Title>
     </Header>
    </>
  )
}
