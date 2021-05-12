import  React, { Component } from 'react'
import Home from './pages/Home/Home'

import GlobalStyles from './styles/globalStyles'
class App extends Component {
  render() {
    return(
      <>
        <GlobalStyles />
        <Home />
      </>
    )
  }
}

export default App;
