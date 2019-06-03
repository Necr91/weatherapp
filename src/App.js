import React from 'react';
import { Route } from 'react-router-dom';
import WeatherDataContainer from './Containers/WeatherDataContainer';
import Navigation from './Components/Navigation';
import Header from './Components/Header';


function App() {
  return (
    <div>
      <Header/>
      <Route exact path='/' component={Navigation}/>
      <Route exact path='/1' component={WeatherDataContainer} />
      <Route exact path='/2' component={WeatherDataContainer} />
      <Route exact path='/3' component={WeatherDataContainer} />
    </div>
  );
}

export default App;