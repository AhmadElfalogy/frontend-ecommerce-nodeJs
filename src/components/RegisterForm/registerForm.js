import React, { Component } from "react";
import { register, login } from "../../API/user";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  registerHandler = async e => {
    e.preventDefault();
    const {
      username: { value: username },
      email: { value: email },
      password: { value: password }
    } = e.target.elements;
    console.log(username, email, password);
    const res = await register({ username, email, password })
      .then(res => {
        this.props.history.push("/userLogin");
      })
      .catch(err => {
        alert("Registeration Failed");
      });
  };

  //   registerHandler = async e => {
  //     e.preventDefault();
  //     const {
  //       username: { value: username },
  //       password: { value: password },
  //       email: { value: email }
  //     } = e.target.elements;
  //     console.log(username, password, email);
  //     const res = await register({ username, password, email });
  //     alert("you are registers");
  //   };

  render() {
    if (
      localStorage.getItem("token") === null &&
      localStorage.getItem("useris") === null
    ) {
      return (
        <>
          <div className="form">
            <div className="add-product container">
              <form onSubmit={this.registerHandler} className="mx-auto w-50">
                <div className="form-group">
                  <input
                    className="form-control input-block"
                    placeholder="name"
                    name="username"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control input-lg"
                    placeholder="email"
                    name="email"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control input-lg"
                    placeholder="password"
                    name="password"
                    type="password"
                  />
                </div>
                <button className="btn btn-primary btn-block" type="submit">
                  Register
                </button>
              </form>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className="rl">
          <h4> You Are Registerd In Our Website</h4>
        </div>
      );
    }
  }
}
export default RegisterForm;
