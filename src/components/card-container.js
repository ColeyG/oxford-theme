import React from 'react';

class CardContainer extends React.Component {
  render() {
    if (this.props.cardConTitle) {
      return (
        <div className={`cl-card-con-title ${this.props.exClassName}`}>
          <h3>{this.props.cardConTitle}</h3>
          <div className="cl-card-container">
            {this.props.children}
          </div>
        </div >
      );
    }
    return (
      <div className={`cl-card-container ${this.props.exClassName}`}>
        {this.props.children}
      </div>
    );
  }
}

export default CardContainer;
