import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';
import Navbar from './components/nabvar';
import Home from './components/home';
import Actors from './components/actors';
import Actress from './components/actress';
import Films from './components/films';




class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <div className="App">
          <Navbar title= "Oscars 2019" />
        <Route exact path= "/" render = {() => <Home title = "Oscar Winners" />} />
        <Route path = "/actors" component = {Actors}/>
        <Route path = "/actress" component = {Actress}/>
        <Route path = "/films" component = {Films}/>
        </div>
        </BrowserRouter>

    );
  }
}

export default App;
