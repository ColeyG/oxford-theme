import React from 'react';
import { Link } from 'gatsby';

class Card extends React.Component {
  render() {
    if (this.props.bgImage) {
      return (
        <Link to={this.props.link}>
          <div className="cl-card">
            <img className="cl-card-image" src={this.props.bgImage} alt={this.props.cardTitle} />
            <div className="cl-card-body">
              <h4>{this.props.cardTitle}</h4>
            </div>
          </div>
        </Link>
      );
    }
    return (
      <Link to={this.props.link}>
        <div className="cl-card">
          <div className="cl-card-body">
            <h4>{this.props.cardTitle}</h4>
          </div>
        </div>
      </Link>
    );
  }
}

export default Card;
