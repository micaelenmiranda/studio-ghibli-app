import { BrowserRouter as Router, Link } from 'react-router-dom'; 

import { Header, Title } from './style'
import logo from '../../assets/images/studio-ghibli-logo.png'

export default function createHeader() {
  return(
    <>
     <Header>
       <Link to="/">
        <Title>
          <img src={ logo } alt="Studio Ghibli logo"/>
        </Title>
       </Link>
     </Header>
    </>
  )
}
