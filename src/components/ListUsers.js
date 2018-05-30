import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "./Card";

export class ListUsers extends Component {
  static propTypes = {
    users: PropTypes.array
  };
  render() {
    const { users } = this.props;
    return (
      <div className="">
        {users.map(user => {
          return (
            <div key={user.id}>
              <Card
                first_name={user.first_name}
                lasst_name={user.lasst_name}
                avatar={user.avatar}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
