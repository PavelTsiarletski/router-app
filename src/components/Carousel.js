import React, { Component } from 'react'
import carousel1 from '../img/carousel_1.png'
import carousel2 from '../img/carousel_2.png'
import carousel3 from '../img/carousel_3.png'


export default class Carousel extends Component {
  render() {
      
    let marginBottomS = {
        marginBottom: '20%'
    }

    let marginBottomXs = {
        marginBottom: '5%'
    }

    return (
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  className="d-block h-100 w-100" src={carousel1} alt="First slide" />
      <div className="carousel-caption d-none d-md-block"  style={marginBottomS}>
      <h2 style={marginBottomXs}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum, sequi modi sunt obcaecati consequuntur maxime impedit itaque aspernatur molestias vitae expedita asperiores est magnam accusantium fuga nemo praesentium porro!
    </h2>
      <button className='btn btn-outline-warning'>GET STARTED</button>
      </div>    
    </div>
    <div className="carousel-item">
      <img height='100vh' className="d-block h-100 w-100" src={carousel2} alt="Second slide" />
      <div className="carousel-caption d-none d-md-block" style={marginBottomS}>
      <h2 style={marginBottomXs}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum, sequi modi sunt obcaecati consequuntur maxime impedit itaque aspernatur molestias vitae expedita asperiores est magnam accusantium fuga nemo praesentium porro!
    </h2>
      <button className='btn btn-outline-warning'>GET STARTED</button>
      </div>
    </div>
    <div className="carousel-item">
      <img height='100vh' className="d-block h-100 w-100" src={carousel3} alt="Third slide" />
      <div className="carousel-caption d-none d-md-block" style={marginBottomS}>
      <h2 style={marginBottomXs}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum, sequi modi sunt obcaecati consequuntur maxime impedit itaque aspernatur molestias vitae expedita asperiores est magnam accusantium fuga nemo praesentium porro!
    </h2>
      <button className='btn btn-outline-warning'>GET STARTED</button>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    )
  }
}
