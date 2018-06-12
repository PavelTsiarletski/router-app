import React, { Component } from 'react'
import pencil from '../img/pencil.svg'
import cubes from '../img/cubes.svg'
import customization from '../img/customization.svg'
import marketing from '../img/marketing.svg'
import './style.css'

export default class Colums extends Component {
  render() {
      let widthFor4 = {
          width: '200px',
          textAlign: 'center'
      }
    return (
      <div className='card-deck'>
        <div className='mx-auto' style={widthFor4}>
            <img src={pencil} alt='pencil'></img>
            <h5 className='card-title'>Web-Design</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className='mx-auto' style={widthFor4}>
            <img src={cubes} alt='cubes'></img>
            <h5 className='card-title'>Development</h5>
            <p className='card-text'>Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
        </div>
        <div className='mx-auto' style={widthFor4}>
            <img src={customization} alt='pencil'></img>
            <h5 className='card-title'>Customization</h5>
            <p className='card-text'>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
        </div>
        <div className='mx-auto' style={widthFor4}>
            <img src={marketing} alt='pencil'></img>
            <h5 className='card-title'>Marketing</h5>
            <p className='card-text'>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
        </div>
      </div>
    )
  }
}
