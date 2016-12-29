import React, { Component, PropTypes } from 'react';

export default class Word extends Component {
  render() {
    return (
      <div className="word-container">
        <div className={`word ${this.props.assignment}`}>
          {this.props.word}
        </div>
      </div>
    );
  }
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
  assignment: PropTypes.string.isRequired
}
