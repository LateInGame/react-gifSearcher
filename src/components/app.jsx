/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  render () {
    const gifs = [
      { id: "wuBfF1AvGhTHyR1879" },
      { id: "KeEqnLBNI4TmvmhUE5" }
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="wuBfF1AvGhTHyR1879" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
