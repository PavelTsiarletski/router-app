import React, { Component } from 'react';
import  './style.css';
// import { Link } from 'react-router-dom';

export default class WelcomePage extends Component {
  render() {
    return (
      <div className='welcome-page'>
        <h1 className="wp_title">Welcome!</h1>
        <form action='/home/'> <button className='wp_btn' type='submit'>Get Stared</button></form>
      </div>
    )
  } 
}
