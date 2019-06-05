import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import WeatherDataContainer from './Containers/WeatherDataContainer';
import Navigation from './Components/Navigation';
import Header from './Components/Header';

class App extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <Route exact path='/' component={Navigation}/>
        <Route path='/:towns' component={WeatherDataContainer}/>
      </div>
    );
  } 
}

export default App;