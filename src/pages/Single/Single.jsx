import React, { Component } from 'react';

import GlobalStyles from './../../assets/styles/globalStyles';
import Header from './../../components/Header/Header';
import Description from './../../components/Description/Description';

import SingleWrapper from './style';
class createSingle extends Component {
  state = {
    activeMovie: []
  }

  componentDidMount() {
    const movie_id = this.props.location.state.item
    const API_SINGLE_URL = `https://ghibliapi.herokuapp.com/films/${movie_id}`

    fetch(API_SINGLE_URL)
    .then(response => response.json())
    .then(data => {
      this.setState({ activeMovie: data })
    })
    .catch(err => {
      console.error('Erro ao retornar as informações', err);
    })
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <Header />
        <SingleWrapper>
            <Description activeMovies = { this.state.activeMovie }/>
        </SingleWrapper>
      </>
    )
  }
}

export default createSingle
