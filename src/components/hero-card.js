import React from 'react';

class HeroCard extends React.Component {
  render() {
    let image = '';

    if (this.props.bgImage) {
      image = <img src={require(`../../assets/${this.props.bgImage}`)} alt="" />;
    }

    return (
      <div className="cl-card-soft-shadow">
        <div className="cl-card-hero">
          <div className="cl-card-body">
            {image}
          </div>
        </div>
      </div>
    );
  }
}

export default HeroCard;
