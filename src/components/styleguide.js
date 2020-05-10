import React from 'react';

class Styleguide extends React.Component {
  render() {
    return (
      <div className="styleguide">
        <h2>Styleguide</h2>
        <div>
          <hr />
          <h1>h1</h1>
          <h1>Cole Geerts</h1>
          <hr />
          <h2>h2</h2>
          <h2>Cole Geerts</h2>
          <hr />
          <h3>h3</h3>
          <h3>Cole Geerts</h3>
          <hr />
          <h4>h4</h4>
          <h4>Cole Geerts</h4>
          <hr />
          <h5>h5</h5>
          <h5>Cole Geerts</h5>
          <hr />
          <h6>h6</h6>
          <h6>Cole Geerts</h6>
          <hr />
          <p>p</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Sequi possimus placeat praesentium harum assumenda laudantium voluptatem ipsum quos odio! Facilis harum fugit cupiditate aspernatur assumenda?
            Fugiat quia aut praesentium autem!
          </p>
          <hr />
          <p>
            <em>em</em>
          </p>
          <p>
            <em>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Harum maiores deserunt ipsam, deleniti odit quasi vel nobis et perspiciatis iusto laboriosam praesentium possimus debitis consequuntur dignissimos perferendis.
              Harum, voluptates repudiandae.
            </em>
          </p>
          <hr />
          <div>
            <h2>Buttons</h2>
            <hr />
            <p>assorted buttons</p>
            <hr />
            <button className="cl-button-primary">Primary</button>
            <button className="cl-button-secondary">Primary</button>
            <button className="cl-button-tertiary">Primary</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Styleguide;
