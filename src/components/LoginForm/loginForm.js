import React, { Component } from "react";
import { login } from "../../API/user";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  loginHandler(e) {
    e.preventDefault();
    const {
      username: { value: username },
      password: { value: password }
    } = e.target.elements;
    console.log(username, password);
    const res = login({ username, password })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userid", res.data.user._id);
        this.props.history.push("/allproduct");
      })
      .catch(err => {
        alert("Error (UnAthorization) Try Again");
      });
  }
  render() {
    return (
      <>
        <div className="add-product container">
          <form onSubmit={e => this.loginHandler(e)} className="mx-auto w-50">
            <div className="form-group">
              <input
                className="form-control"
                placeholder="name"
                name="username"
                type="text"
              />
            </div>

            <div className="form-group">
              <input
                className="form-control"
                placeholder="password"
                name="password"
                type="password"
              />
            </div>
            <button className="btn btn-primary btn-block" type="submit">
              login
            </button>
          </form>
        </div>
      </>
    );
  }
}
export default LoginForm;
