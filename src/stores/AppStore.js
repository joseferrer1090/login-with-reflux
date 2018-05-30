import Reflux from "reflux";
import Actions from "./../actions/Actions";
//import * as HTTP from "./../services/http";

const baseUrl = "https://reqres.in";

class AppStore extends Reflux.Store {
  constructor() {
    super();
    this.listenables = Actions;
    this.state = {
      data: [],
      email: "",
      password: ""
    };
  }
  getUsers() {
    //alert("Desde el AppStore");
    fetch(baseUrl + "/api/users")
      .then(res => res.json())
      .then(result => {
        this.setState({
          data: result.data
        });
        console.log(this.state.data);
      });
  }

  Login() {
    const email = this.state.email;
    const pass = this.state.password;

    fetch(baseUrl + "/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email: { email },
        password: { pass }
      })
    }).then(response =>
      response.json().then(data => {
        if (response.ok) {
          localStorage.setItem("token", data.token);
          window.location.replace("/home");
        } else {
          alert(" Error en el envio de los datos ");
          console.log(" Error al enviar los datos");
        }
      })
    );
  }
}
export default AppStore;
