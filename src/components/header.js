import React from 'react';
import { Link } from 'gatsby';

function Header(props) {
  function refresh(e) {
    // e.preventDefault();

    // This is incase the logo area doesn't cause a refresh (rare bug)
    // window.location.assign('/');
  }

  return (
    <header className="cl-primary-header">
      <Link className="head-logo" to="/" onClick={refresh}>
        <h1>{props.mainTitle}</h1>
      </Link>
      <nav>
        <ul>
          <li><Link to="/about" className="cl-a-primary">About My Work</Link></li>
          <li><Link to="/resume" className="cl-a-secondary">R&eacute;sum&eacute;</Link></li>
          <li><Link to="/contact" className="cl-a-tertiary">Contact</Link></li>
          <li><Link to="/blog" className="cl-a-reverse">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
