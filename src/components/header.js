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
            <li><Link to="/about" className="cl-a-primary">About My Work</Link></li>
            <li><Link to="/resume" className="cl-a-secondary">Resum&eacute;</Link></li>
            <li><Link to="/contact" className="cl-a-tertiary">Contact</Link></li>
            <li><Link to="/blog" className="cl-a-reverse">Blog</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
