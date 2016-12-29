import React, { Component, PropTypes } from 'react';

export default class Word extends Component {
  constructor(props) {
    super(props)
    this.state = {
      revealed: props.info.revealed
    };
  }

  className() {
    return this.props.info.revealed ? `word ${this.props.info.assignment}` : 'word';
  }

  handleClick() {
    this.props.handleClick(this.props.string);
    this.setState({ revealed: true });
  }

  render() {
    return (
      <div className="word-container">
        <div className={this.className()} onClick={this.handleClick.bind(this)}>
          {this.props.string}
        </div>
      </div>
    );
  }
}

Word.propTypes = {
  string: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired
}
