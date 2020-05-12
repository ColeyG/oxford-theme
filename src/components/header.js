import React from 'react';
import { Link } from 'gatsby';

class Header extends React.Component {
  render() {
    return (
      <header className="cl-primary-header">
        <Link className="head-logo" to="/">
          <h1>{this.props.mainTitle}</h1>
        </Link>
        <nav>
          <ul>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Work</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
