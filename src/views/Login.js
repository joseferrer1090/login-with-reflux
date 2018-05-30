import React, { Component } from "react";
import Reflux from "reflux";
import Actions from "./../actions/Actions";
import AppStore from "./../stores/AppStore";

export class Login extends Reflux.Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
    this.store = AppStore;
    this.storeKeys = ["email", "password"];
  }

  // checkLocalStorage = () => {
  //   if (!(localStorage.getItem("token") == undefined)) {
  //     console.log("====================================");
  //     console.log("no hay localstorage");
  //     console.log("====================================");
  //   }
  // };

  componentDidMount() {
    this.checkLocalStorage;
  }

  

  _handleChangeUsersame = e => {
    this.setState({
      email: e.target.value
    });
    console.log(this.state.email);
  };

  _handleChangePassword = e => {
    this.setState({
      password: e.target.value
    });
    console.log(this.state.password);
  };

  _handleSubmit = e => {
    e.preventDefault();
    Actions.Login();
  };

  render() {
    const space = {
      marginTop: "10%"
    };
    return (
      <div>
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-3 is-offset-4" style={space}>
              <div className="panel">
                <div className="panel-heading">
                  <p> Login </p>
                </div>
                <div className="panel-block">
                  <form onSubmit={this._handleSubmit}>
                    <div className="container">
                      <div className="columns">
                        <div className="column is-3">
                          <div className="field">
                            <div className="control has-icons-left has-icons-right">
                              <input
                                className="input is-small"
                                type="text"
                                placeholder="user"
                                value={this.state.email}
                                onChange={this._handleChangeUsersame}
                              />
                              <span className="icon is-small is-left">
                                <i className="fas fa-user" />
                              </span>
                            </div>
                          </div>
                          <div className="field">
                            <div className="control has-icons-left has-icons-right">
                              <input
                                className="input is-small"
                                type="password"
                                placeholder={" Password "}
                                value={this.state.password}
                                onChange={this._handleChangePassword}
                              />
                              <span className="icon is-small is-left">
                                <i className="fas fa-lock" />
                              </span>
                            </div>
                          </div>
                          <div className="">
                            <div className="field is-grouped ">
                              <p className="control">
                                <button
                                  type="submit"
                                  className="button is-link"
                                >
                                  Login &nbsp;
                                  <i className="fas fa-arrow-right" />
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
