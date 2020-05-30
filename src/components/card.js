import React from 'react';
import { Link } from 'gatsby';

class Card extends React.Component {
  render() {
    let bgColor;
    if (this.props.colorOverride) {
      bgColor = { backgroundColor: this.props.colorOverride };
    }

    if (this.props.bgImage) {
      return (
        <div className="cl-card" style={bgColor}>
          <img className="cl-card-image" src={this.props.bgImage} alt={this.props.cardTitle} />
          <Link to={this.props.link}>
            <div className="cl-card-body">
              <h4>{this.props.cardTitle}</h4>
            </div>
          </Link>
        </div>
      );
    }
    return (
      <div className="cl-card" style={bgColor}>
        <Link to={this.props.link}>
          <div className="cl-card-body">
            <h4>{this.props.cardTitle}</h4>
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;
