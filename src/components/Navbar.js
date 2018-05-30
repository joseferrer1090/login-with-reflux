import React from "react";

export const Navbar = () => {
  const logout = () => {
    alert("Cerrar Sesion");
    localStorage.getItem("token");
    localStorage.clear();
    window.location.replace("/");
  };
  return (
    <div>
      <nav className="navbar has-shadow">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="../">
              <img
                src="http://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
              />
            </a>
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu is-light">
            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable ">
                <a className="navbar-link">Cuenta</a>
                <div className="navbar-dropdown">
                  <a className="navbar-item" onClick={logout}>
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
