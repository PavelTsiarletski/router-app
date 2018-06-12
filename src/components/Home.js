import React, { Component } from 'react';
import Header from './Header';
import {Route} from 'react-router-dom';
// import { Router } from 'react-router-dom';
import Carousel from './Carousel';
import Colums from './Colums';

export default class Home extends Component {
    render() {
      return (
            <div>
                <Header />
                <div>
                    <Route exact path='/home/' component={Carousel}/>
                    <Route path='/home/colums/' component={Colums}/>
                </div>
            </div>
      )
    } 
  }