import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import WelcomePage from './components/WelcomePage';
import { BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact component={WelcomePage}/>
          <Route path='/home/' component={Home}/>
        </div>
      </BrowserRouter>
        
    );
  }
}


export default App;