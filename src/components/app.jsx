/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'ND6xkVPaj8tHO'
    };
    // this.search("disney");
    this.search = this.search.bind(this);
    this.selectGif = this.selectGif(this);
  }

  // WPQ9aBGtsihYFC9Pee06ndayO8CTXjLz

  search = (query) => {
    giphy('WPQ9aBGtsihYFC9Pee06ndayO8CTXjLz').search({
      q: query,
      rating: 'g'
    }, (_error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  };

  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
  }


  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
