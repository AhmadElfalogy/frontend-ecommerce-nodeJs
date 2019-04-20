import React, { Component } from "react";
import "./App.scss";
import ListItem from "../components/ListItem/listItem";
import Navbar from "../components/Navbar/navbar";
import AddProduct from "../components/AddProduct/addProduct";
import DetailsItem from "../components/Details/details";
import "../API/user";

import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import RegisterForm from "../components/RegisterForm/registerForm";
import LoginForm from "../components/LoginForm/loginForm";
import UserList from "../components/Users/userList";
import AllProduct from "../components/AllProducts/allProduct";
import EditProduct from "../components/EditProduct/editProduct";

class App extends Component {
  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />
        <BrowserRouter>
          <Navbar />
          <div className="App">
            <div className="container" />

            <Route path="/" exact component={AllProduct} />
            <Route path="/home" component={AllProduct} />
            <Route path="/listItem" component={ListItem} />
            <Route path="/addProduct" component={AddProduct} />
            <Route path="/detailProduct/:productId" component={DetailsItem} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/userLogin" component={LoginForm} />
            <Route path="/usersList" component={UserList} />
            <Route path="/allproduct" component={AllProduct} />
            <Route path="/editProduct/:productId" component={EditProduct} />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
