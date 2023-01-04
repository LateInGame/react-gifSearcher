/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.searchFunction(event.target.value);
    console.log(event.target.value);
  }

  render () {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
