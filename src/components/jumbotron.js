import React from 'react';
import { Link } from 'gatsby';

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="cl-jumbotron">
        <div className="content">
          <h2>Hi! I'm Cole Geerts and I'm a Web Developer out of London Ontario. You can find some important links like those to my
            <a href="https://github.com/ColeyG" target="_blank" rel="noopener noreferrer" className="cl-a-primary">github</a>
             and
            <Link to="/resume" className="cl-a-secondary">web resume</Link> here.
             Otherwise if you've landed here from somewhere else you can check out my
            <Link to="/blog" className="cl-a-tertiary">blog</Link>
              for tech notes on things I am particularly interested in.
          </h2>
        </div>
        <div className="interactive">
          <h2>asdf</h2>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
