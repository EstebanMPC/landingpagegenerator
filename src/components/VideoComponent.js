import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../styles/VideoComponent.css'

class ResponsivePlayer extends Component {
  render () {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        />
      </div>
    )
  }
}

export default ResponsivePlayer;