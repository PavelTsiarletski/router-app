import React, { Component } from 'react';
import './style.css'

export default class Video extends Component {
    render(){
        return(
            <iframe className='video' title='how_to_learn_react' src="https://www.youtube.com/embed/gbTSl88k5pk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        )
    }
}
