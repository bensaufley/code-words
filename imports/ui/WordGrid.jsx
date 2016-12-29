import React, { Component, PropTypes } from 'react';
import Word from './Word.jsx';
import Game from '../classes/game.js';

export default class WordGrid extends Component {
  renderWords() {
    return [...this.props.game.words].map(([string, info]) => (
      <Word string={string} info={info} handleClick={this.handleWordClick.bind(this)} key={string} />
    ));
  }

  handleWordClick(wordString) {
    this.props.game.words.get(wordString).revealed = true;
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
  game: PropTypes.instanceOf(Game)
};
