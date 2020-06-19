/* eslint-disable max-len */
import React from 'react';
import CardContainer from './card-container';
import Card from './card';

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Totam perspiciatis, <a href="#">non dolore</a> in facere asperiores omnis atque optio, dignissimos rem quod obcaecati nulla quia veniam, eligendi iste praesentium. Reiciendis dolor velit quasi quam.
            Voluptates, perferendis modi earum cum id atque <a href="#" className="cl-a-secondary">dolorem praesentium</a>.
            Architecto enim magni debitis animi laudantium culpa quis tenetur, odio velit tempora maiores dignissimos dolorem saepe consequuntur recusandae voluptatum, itaque rerum eligendi quo ad accusantium unde laboriosam ratione!
            Magnam soluta perspiciatis labore perferendis inventore, et ab vero eveniet aliquid delectus dignissimos molestiae voluptatem consequuntur ipsum nulla ipsa maiores qui illum porro excepturi ratione quos laborum enim. Ipsa nulla maxime suscipit dicta! Ipsum quam sequi animi neque accusamus facere natus asperiores quo.
            At, <a href="#" className="cl-a-tertiary">doloremque voluptatibus</a> explicabo odio adipisci cupiditate consequuntur illo itaque molestias nam quo iure. Provident voluptate rem soluta blanditiis autem tenetur inventore, eos a nulla fugit asperiores perferendis accusantium tempora iste nemo harum, sed sunt repellat! Dignissimos, repellendus molestias quae incidunt fugiat consequuntur, doloremque suscipit impedit mollitia illum sapiente rem laboriosam ex quam perspiciatis illo libero est magnam? Placeat possimus quaerat adipisci, doloremque accusamus voluptate pariatur! Aperiam veritatis saepe neque accusamus, non praesentium numquam ipsum dolores perferendis suscipit eligendi quis sapiente, doloribus, nisi quibusdam corporis doloremque facilis.
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
            <button className="cl-btn-primary">Primary</button>
            <button className="cl-btn-secondary">Secondary</button>
            <button className="cl-btn-tertiary">Tertiary</button>
          </div>
          <div>
            <h2>Forms</h2>
            <hr />
            <p>Form Elements</p>
            <form action="" className='cl-form'>
              <label htmlFor="name" className="cl-label">Name</label>
              <input className="cl-input" type="text" name="name" id="name" placeholder="Earl Jones" />
              <label htmlFor="message" className="cl-label">Enter a Message</label>
              <textarea className="cl-textarea" name="" id="" cols="30" rows="10" name="message" id="message" placeholder="lorem ipsum..."></textarea>
              <button className="cl-btn-primary">Submit</button>
            </form>
          </div>
          <div>
            <h2>Cards</h2>
            <CardContainer>
              <Card bgImage={'optimized/autumn.jpeg'} cardTitle="With Background Image" />
              <Card backupImage={'optimized/autumn.jpeg'} cardTitle="With Backup Image" />
              <Card cardTitle="No Image" />
            </CardContainer>
          </div>
          <div>
            <h2>Footer</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Styleguide;
