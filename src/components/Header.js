import React, { Component } from 'react';
import logo from '../img/logo.svg'

export default class Header extends Component {
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 class="text-light header-brand"><img src={logo} className="logo" alt="logo" />waxom</h1>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav mr-auto'>
           <li className="nav-item">
               <a href='/home/' className='nav-link'>Home</a></li>
             <li className="nav-item">
               <a href='/home/colums/' className='nav-link'>Colums</a></li>
           </ul>
      </div>
    </nav>
        )
    }
}
