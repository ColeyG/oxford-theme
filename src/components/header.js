import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.mainTitle}</h1>
      </header>
    );
  }
}

export default Header;
