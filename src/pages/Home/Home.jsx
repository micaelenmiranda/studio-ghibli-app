import { Component } from 'react';

import Header from './../../components/Header/Header'
import Card from './../../components/Card/Card'

import { Wrapper } from './styles'

class Home extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    const API_URL = 'https://ghibliapi.herokuapp.com/films/'

    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      this.setState({ movies: data })
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
          <Card movies={this.state.movies} />
        </Wrapper>
      </>
    )
  }
}

export default Home
