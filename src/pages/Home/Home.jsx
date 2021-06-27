import { Component } from 'react';
import { Link } from "react-router-dom";

import Header from './../../components/Header/Header'
import { Card, Wrapper } from './styles'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      movie: []
    }
  }

  componentDidMount() {
    const URL = 'https://ghibliapi.herokuapp.com/films/'

    fetch(URL)
    .then(response => response.json())
    .then(data => {
      this.setState({       
        movie: data
      })
    })
    .catch(err => {
      console.error('Erro ao retornar as informações', err);
    })
  }

  render() {
    return (
      <>
        <Header />
        <Wrapper> 
        {this.state.movie.map((item, index) => (
          <>
            <Card>
              <h2>{item.title}</h2>
              <h3>{item.original_title}</h3>
            </Card>
          </>
          )
        )}
        </Wrapper>
   
          <Link to="/single">
            <div>Ir para a página Sobre</div>
          </Link>
      </>
    )
  }
}

export default Home
