import React from 'react';

class Hi extends React.Component {
  someMethod = () => {
    console.log('hello');
  }

  render() {
    return (
      <p onClick={this.someMethod}>hi</p>
    );
  }
}

export default Hi;
