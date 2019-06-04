import React from 'react';
import { Route } from 'react-router-dom';
import WeatherDataContainer from './Containers/WeatherDataContainer';
import Navigation from './Components/Navigation';
import Header from './Components/Header';

const App = () => {
  return (
    <div>
      <Header/>
      <Route exact path='/' component={Navigation}/>
      <Route path='/:towns' component={WeatherDataContainer}/>
    </div>
  );
}

export default App;