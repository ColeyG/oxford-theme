import React from 'react';
import { Link } from 'gatsby';

class Footer extends React.Component {
  render() {
    return (
      <footer className="cl-primary-footer">
        <div className="left">
          <p>Cole Geerts &copy; 2017 - 2020</p>
        </div>
        <div className="right">
          <Link to="/privacy" className="cl-a-reverse">privacy</Link>
          <Link to="https://github.com/ColeyG" target="_blank" rel="noopener noreferrer" className="cl-a-reverse">github</Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
