import React from 'react';
import { Link } from 'gatsby';

class Card extends React.Component {
  render() {
    let bgColor;
    let type;
    let image;

    if (this.props.colorOverride) {
      bgColor = { backgroundColor: this.props.colorOverride };
    }

    if (this.props.type) {
      type = <p className='tag'>{this.props.type}</p>;
    }

    if (this.props.bgImage) {
      image = <img className="cl-card-image" src={this.props.bgImage} alt={this.props.cardTitle} />;
    }

    return (
      <div className="cl-card" style={bgColor} >
        {image}
        <Link to={this.props.link}>
          <div className="cl-card-body">
            <h4>{this.props.cardTitle}</h4>
            {type}
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;
