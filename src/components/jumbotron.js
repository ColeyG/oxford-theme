import React from 'react';

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="cl-jumbotron">
        <div className="content">
          <h2>Hi! I'm Cole Geerts and I'm a Web Developer out of London Ontario. You can find some important links like those to my
            <a href="#" className="cl-a-primary">github</a>
             and
            <a href="#" className="cl-a-secondary">web resume</a>.
             Otherwise if you've landed here from somewhere else you can check out my
            <a href="#" className="cl-a-tertiary">blog</a>
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
