import React, { Component } from 'react';
import  './style.css';
import { Link } from 'react-router-dom';

export default class WelcomePage extends Component {
  render() {
    return (
      <div className='welcome-page'>
        <h1 className="wp_title">Welcome!</h1>
          <Link to='/home/' className='wp_btn'>Get Stared</Link>
      </div>
    )
  } 
}
