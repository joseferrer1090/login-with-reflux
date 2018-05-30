import React, { Component } from "react";
import { Navbar } from "./../components/Navbar";
import { ListUsers } from "./../components/ListUsers";
import { Footer } from "./../components/Footer";
import Reflux from "reflux";
import AppStore from "./../stores/AppStore";
import Actions from "./../actions/Actions";

export class Home extends Reflux.Component {
  constructor() {
    super();
    this.state = {};
    this.store = AppStore;
    this.storeKeys = ["data"];
  }

  componentDidMount() {
    Actions.getUsers();
  }

  render() {
    const users = this.state.data;
    console.log(users);
    return (
      <div>
        <Navbar />
        <section className="section">
          <div className="container is-fluid">
            <h2 className="title"> Bienvenido </h2>
            {/*<button onClick={this._handleGetUsers}> Mostrar Usuarios </button>*/}
          </div>
          <br />
        </section>
        <section
          className=""
          style={{ display: "block", border: "1px solid red" }}
        >
          <div className="container">
            <div className="">
              <div className="column is-3">
                <ListUsers users={users} />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
