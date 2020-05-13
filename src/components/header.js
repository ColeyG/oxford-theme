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
            <li><a href="#" className="cl-a-primary">Work</a></li>
            <li><a href="#" className="cl-a-secondary">Resume</a></li>
            <li><a href="#" className="cl-a-tertiary">Contact</a></li>
            <li><a href="#" className="cl-a-reverse">Blog</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
