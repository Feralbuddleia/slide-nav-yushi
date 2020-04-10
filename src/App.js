import React, { Component } from 'react';
import './App.css';

import data from './data/navigation.json';
import Nav from './components/nav/index';
import CurTime from './components/cur-time/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: data.cities,
      curCity: '',
      timezonelist: [
        {name: "Cupertino", timezone: "America/Los_Angeles"},
        {name: "New York City", "timezone": "America/New_York"},
        {name: "London", timezone: "Europe/London"},
        {name: "Amsterdam", timezone: "Europe/Amsterdam"},
        {name: "Tokyo", timezone: "Japan"},
        {name: "Hong Kong", timezone: "Hongkong"},
        {name: "Sydney", timezone: "Australia/Sydney"}
    ]
    };
  }

  buttonClick = text => {
    const {timezonelist} = this.state;
    this.setState({ 
      curCity: text,
      timezonelist: timezonelist.filter(tz=>tz.name===text).concat(timezonelist.filter(tz=>tz.name!==text))
     })
  }

  render() {
    const { navigation, curCity, timezonelist } = this.state;
    return (
      <div className="App">
        <div className="nav-container">
          {navigation.map(city => (
            <Nav
              key={city.section}
              city={city.label}
              curCity={curCity}
              buttonClick={this.buttonClick}
            />
          ))}
        </div>
        <div className="time-container">
          {timezonelist.map(cty => (
            <CurTime 
              key={cty.name} 
              city={cty.name} 
              timezone={cty.timezone}
              curCity={curCity}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
