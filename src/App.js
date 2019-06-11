import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import WeatherDataClassContainer from './Containers/ClassContainer';
import WeatherDataFunctionContainer from './Containers/FunctionContainer';
import Navigation from './Components/Navigation';
import Header from './Components/Header';

class App extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <Route exact path='/' component={Navigation}/>
        <Route path='/class/:id' component={WeatherDataClassContainer}/>
        <Route path='/function/:id' component={WeatherDataFunctionContainer}/>
      </div>
    );
  } 
}

export default App;