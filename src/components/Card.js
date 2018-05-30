import React, { Component } from "react";
import PropTypes from "prop-types";

export class Card extends Component {
  static propType = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  };
  render() {
    const { first_name, last_name, avatar } = this.props;
    const styleCard = {
      display: "flex !important",
      flexWrap: "wrap !important",
      justifyContent: "space-between",
      padding: "10px",
      marginTop: "40px"
    };
    return (
      <div>
        <div className="card" style={styleCard}>
          <div className="card-image">
            <figure className="image">
              <img src={avatar} alt={first_name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={avatar} alt={first_name} />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{first_name}</p>
                <p className="subtitle is-6">{last_name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
