import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Games } from '../api/games.js';

import Game from '../classes/game.js';

import WordGrid from './WordGrid.jsx';

class App extends Component {
  render() {
    return (
      <main>
        <h1>Code Words</h1>
        <WordGrid game={this.props.game} />
      </main>
    )
  }
}

App.propTypes = {
  game: PropTypes.instanceOf(Game)
};

export default createContainer(function() {
  return {
    game: new Game(Games.find({}).fetch()[0])
  };
}, App);
