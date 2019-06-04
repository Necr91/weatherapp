import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import WeatherDataContainer from './Containers/WeatherDataContainer';
import Navigation from './Components/Navigation';
import Header from './Components/Header';

const mapStateToProps = state => {
  return {
      loading: state.loading
  };
};

let App = ({loading}) => {
  return (
    <div>
      <Header/>
      <Route exact path='/' component={Navigation}/>
      <Route path='/:towns' component={WeatherDataContainer}/>
    </div>
  );
}
App = connect(mapStateToProps)(App);

export default App;