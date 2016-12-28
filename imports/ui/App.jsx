import React, { Component } from 'react';
import WordGrid from './WordGrid.jsx';
import NOUNS from '../data/nouns.json';

export default class App extends Component {
  assignments() {
    if (this.assignments && this.assignments.size == 25) return this.assignments;
    let possibleAssignments = [ ...Array(8).fill('red'), ...Array(8).fill('blue'), ...Array(7).fill('bystander'), 'assassin' ];
    this.startingTeam = Math.round(Math.random()) ? 'red' : 'blue';
    possibleAssignments.push(this.startingTeam);
    this.assignments = [];
    while (possibleAssignments.length) {
      this.assignments.push(possibleAssignments.splice(Math.round(Math.random() * possibleAssignments.length - 1), 1)[0]);
    }
    return this.assignments;
  }

  words() {
    if (this.words && this.words.size == 25) return this.words;
    this.words = new Set();
    while (this.words.size < 25) {
      this.words.add(NOUNS[Math.round(Math.random() * NOUNS.length)]);
    }
    return [...this.words];
  }

  render() {
    return (
      <main>
        <h1>Code Words</h1>
        <WordGrid words={this.words()} assignments={this.assignments()} />
      </main>
    )
  }
}
