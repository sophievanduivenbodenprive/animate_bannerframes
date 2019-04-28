import React from 'react';
import logo from '../../public/logo.svg';
import './App.scss';
import Creatives from '../Creatives/Creatives';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Creatives />
      </div>
    );
  }
}

export default App;
