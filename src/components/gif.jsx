/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render () {
    // eslint-disable-next-line react/destructuring-assignment
    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
