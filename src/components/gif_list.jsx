/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render () {
    return this.props.gifs.map((gif) => {
      return <Gif id={gif.id} />;
    });
  }
}
export default GifList;
