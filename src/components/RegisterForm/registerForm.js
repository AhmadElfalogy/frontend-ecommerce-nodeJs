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
        alert("registeration Failed ..Please Try Again");
      });
  };

  render() {
    if (
      localStorage.getItem("token") === null &&
      localStorage.getItem("useris") === null
    ) {
      return (
        <>
          <div className="form">
            <div className="add-product container">
              <form
                onSubmit={this.registerHandler}
                className="mx-auto w-50"
                method="post"
              >
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
        <div className="container">
          <div className="alert alert-danger">
            <h4> You Are already signed in</h4>
          </div>
        </div>
      );
    }
  }
}
export default RegisterForm;
