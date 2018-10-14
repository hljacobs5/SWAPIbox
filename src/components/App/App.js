import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar.js';
import SideText from '../SideText/SideText.js';
import CardContainer from '../CardContainer/CardContainer.js';
import * as Cleaner from '../../helper.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: {},
      planets: {},
      vehicles: {},
      filmText: {},
      selected: '',
      display: {}
    }
  }

  async componentDidMount() {
    const starWarsApi = 'https://swapi.co/api/films/';
    const response = await fetch(starWarsApi);
    const data = await response.json();
    const filmText = await this.formatFilmText(data)
    this.setState({
      filmText: filmText
    })
  }

  getData = async (buttonName) => {
    await this.setState({selected: buttonName});
    await this.setState({ display: await Cleaner.fetchData(buttonName) });
    await this.setState({ [buttonName]: this.state.display});
  }

  addToLocalStorage(buttonName) {
    localStorage.setItem((`${buttonName}`), JSON.stringify(this.state[buttonName]))
  }

  handleNavClick = (event) => {
    let buttonName = event.target.getAttribute('name')
    this.getData(buttonName)
  }

  async formatFilmText(data) {
    const randomNumber = await Math.round(Math.random() * 6);
    const filmText = await data.results[randomNumber].opening_crawl
    const filmTitle = await data.results[randomNumber].title
    const episode = await data.results[randomNumber].episode_id
    const formattedFilm = await {
      text: filmText,
      title: filmTitle,
      episode: episode
    }  
    return formattedFilm
  }

  render() {
    const { people, selected, filmText, display, planets, vehicles } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <h1 className="site-heading">SWAPI Box</h1>
          <NavBar 
            getData={ this.getData } 
            selected={ selected } 
            handleNavClick={ this.handleNavClick }
          />
        </header>
        <aside className="app-aside">
          <SideText 
            filmText={ filmText } 
          />
        </aside>
        <main>
          <CardContainer 
            display={ display } 
            people={ people } 
            vehicles={ vehicles } 
            planets={ planets }
            selected={ selected }
          />
        </main>
      </div>
    );
  }
}

export default App;
