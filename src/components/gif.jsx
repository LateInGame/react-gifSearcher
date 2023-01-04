/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

class Gif extends Component {
  render () {
    // eslint-disable-next-line react/destructuring-assignment
    const src = `https://media4.giphy.com/media/${this.props.id}/giphy.webp`;
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
