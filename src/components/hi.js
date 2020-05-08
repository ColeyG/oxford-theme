// Keeping this file to leave examples of things
import React from 'react';

class Hi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'dropped',
    };
  }

  componentDidMount() {
    // Note: This renders dropped on the production version
    this.setState({ word: 'yo' });
  }

  // This is also not rendered
  arbitrary = () => 'arbitratry'

  render() {
    // Something like this could fetch data.
    const renderConst = this.arbitrary();
    // const renderData = this.querySomeData();

    return (
      <p onClick={this.someMethod}>{this.state.word}. {this.arbitrary()}. {renderConst}.</p>
    );
  }
}

export default Hi;
