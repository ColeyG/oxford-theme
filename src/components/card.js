import React from 'react';

class Card extends React.Component {
  render() {
    if (this.props.bgImage) {
      return (
        <div className="cl-card">
          <img className="cl-card-image" src={this.props.bgImage} alt={this.props.cardTitle} />
          <div className="cl-card-body">
            <h4>{this.props.cardTitle}</h4>
          </div>
        </div>
      );
    }
    return (
      <div className="cl-card">
        <div className="cl-card-body">
          <h4>{this.props.cardTitle}</h4>
        </div>
      </div>
    );
  }
}

export default Card;
