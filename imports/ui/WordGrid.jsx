import React, { Component, PropTypes } from 'react';
import Word from './Word.jsx';

export default class WordGrid extends Component {
  renderWords() {
    return this.props.words.map((obj, i) => (
      <Word word={obj} assignment={this.props.assignments[i]} />
    ));
  }

  render() {
    return (
      <div className="word-grid">
        {this.renderWords()}
      </div>
    );
  }
}

WordGrid.propTypes = {
  words: PropTypes.array.isRequired,
  assignments: PropTypes.array.isRequired
};
