import React, { Component } from "react";
import "../../container/App.scss";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import ListItem from "../ListItem/listItem";
import AddProduct from "../AddProduct/addProduct";
import axios from "axios";
import { getAllUsers } from "../../API/user";

class UserList extends Component {
  state = {
    users: [],
    products: []
  };
  baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

  componentDidMount() {
    axios.get(`${this.baseUrl}/users/`).then(res => {
      console.log(res.data);
      this.setState({ users: res.data });
      console.log(this.state.users);
    });
  }

  render() {
    return (
      <>
        {this.state.users.map(user => {
          return (
            <>
              <div className="userCard">
                <h4>
                  <span>Name :</span>
                  {user.username}
                </h4>
                <br />
                <hr />
                <h4>
                  <span>Email :</span>
                  {user.email}
                </h4>
                <hr />
              </div>
            </>
          );
        })}
      </>
    );
  }
}
export default UserList;
