import React from 'react';

class Hi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'dropped',
    };
  }

  componentDidMount() {
    // Note: This renders dropped on the cached version
    this.setState({ word: 'yo' });
  }

  render() {
    return (
      <p onClick={this.someMethod}>{this.state.word}</p>
    );
  }
}

export default Hi;
