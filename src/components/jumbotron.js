import React from 'react';
import { Link } from 'gatsby';

class Jumbotron extends React.Component {
  render() {
    return (
      <div className={`cl-jumbotron ${this.props.exClassName}`}>
        <div className="content">
          <h2>Hi! I'm Cole Geerts and I'm a Web Developer out of London Ontario. You can find some important links like those to my
            <a href="https://github.com/ColeyG" target="_blank" rel="noopener noreferrer" className="cl-a-primary">github</a>
             and
            <Link to="/resume" className="cl-a-secondary">web resume</Link> here.
             Otherwise if you've landed here from somewhere else you can check out my
            <Link to="/blog" className="cl-a-tertiary">blog</Link>
              for notes on things I am particularly interested in and assorted rants.
          </h2>
        </div>
        <div className="interactive">
          <div className="image">
            <img src={require('../../assets/optimized/portrait.jpeg')} alt="" />
          </div>
          <Link to="/contact" className='cl-a-reverse'>Get In Touch</Link>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
