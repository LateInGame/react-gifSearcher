/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

class SearchBar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  handleUpdate = (event) => {
    // eslint-disable-next-line react/destructuring-assignment
    this.setState({
      term: event.target.value
    });
    this.props.searchFunction(event.target.value);
  }

  render () {
    return (
      <input
        value={this.state.term}
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
