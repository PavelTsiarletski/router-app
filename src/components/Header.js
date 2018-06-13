import React, { Component } from 'react';
import logo from '../img/logo.svg'
import './style.css'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <h3 class="text-light header-brand"><img src={logo} className="logo" alt="logo" />EXAMPLE</h3>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav mr-auto'>
           <li className="nav-item">
               <Link to='/home/' className='nav-link'>Home</Link></li>
             <li className="nav-item">
               <Link to='/home/colums/' className='nav-link'>Colums</Link></li>
               <li className="nav-item">
               <Link to='/home/video/' className='nav-link'>Video</Link></li>
               <li className="nav-item">
               <Link to='/home/galery/' className='nav-link'>Galery</Link></li>
           </ul>
      </div>
    </nav>
        )
    }
}
