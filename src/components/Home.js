import React, { Component } from 'react';
import Header from './Header';
import {Route} from 'react-router-dom';
// import { Router } from 'react-router-dom';
import Carousel from './Carousel';
import Colums from './Colums';
import Video from './Video';
import Galery from './Galery';

export default class Home extends Component {
    render() {
      return (
            <div>
                <Header />
                <div className='content'>
                    <Route exact path='/home/' component={Carousel}/>
                    <Route path='/home/colums/' component={Colums}/>
                    <Route path='/home/video/' component={Video}/>
                    <Route path='/home/galery/' component={Galery}/>
                </div>
            </div>
            )
    }
  }