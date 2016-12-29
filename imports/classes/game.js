import NOUNS from '../data/nouns.json';

export default class Game {
  constructor(record) {
    record = record || {};
    this.words = record.words || this.generateWords();
    this.startingTeam = this.startingTeam || record.startingTeam;
  }

  determineStartingTeam() {
    let strings = [...this.words.keys()];
    strings.reduce((count, str) => { return count + (str == 'red') ? 1 : 0; }, 0) > 8 ? 'red' : 'blue';
  }

  generateWords() {
    let possibleAssignments = [ ...Array(8).fill('red'), ...Array(8).fill('blue'), ...Array(7).fill('bystander'), 'assassin' ],
        wordSet = this.generateWordSet();
    this.startingTeam = Math.round(Math.random()) ? 'red' : 'blue';
    possibleAssignments.push(this.startingTeam);
    return [...wordSet].reduce((map, word) => {
      return map.set(word, {
        assignment: possibleAssignments.splice(Math.round(Math.random() * possibleAssignments.length - 1), 1)[0],
        revealed: false
      });
    }, new Map());
  }

  generateWordSet() {
    let wordSet = new Set();
    while (wordSet.size < 25) {
      wordSet.add(NOUNS[Math.round(Math.random() * NOUNS.length)]);
    }
    return wordSet;
  }
}
