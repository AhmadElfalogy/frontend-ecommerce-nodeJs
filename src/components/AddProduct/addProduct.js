import React, { Component } from "react";
import addImage from "../../img/products/product-grey-7.jpg";
import "../../css/style.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionProduct";
import { Redirect } from "react-router-dom";
import { addProduct } from "../../API/product";

class AddProduct extends Component {
  addProductHandler = e => {
    e.preventDefault();
    const {
      productName: { value: productName },
      description: { value: description },
      price: { value: price },
      isOnSale: { value: isOnSale },
      discount: { value: discount },
      category: { value: category }
    } = e.target.elements;
    let product = {
      productName,
      description,
      price,
      isOnSale,
      discount,
      category
    };
    this.props
      .onAdd(product)
      .then(res => {
        this.props.history.push("/listItem");
      })
      .catch(err => {
        alert("Added Failed Try Again");
      });
  };
  render() {
    if (
      localStorage.getItem("token") === null &&
      localStorage.getItem("useris") === null
    ) {
      return (
        <div className="rl">
          <h4>Must be Register or Login in our Ecommerce Website :)</h4>
        </div>
      );
    } else {
      return (
        <>
          <div className="add-product container">
            <form onSubmit={this.addProductHandler} className="w-50 mx-auto py-3">
              <div className="form-group">
                <label htmlFor="">Name</label>

                <input
                  className="form-control"
                  type="text"
                  name="productName"
                  id=""
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  id=""
                  cols="30"
                  rows="4"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Price</label>
                <input
                  className="form-control"
                  type="text"
                  name="price"
                  id=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Satus</label>
                <div className="form-group__radios">
                  <div className="form-group__radio">
                    <input type="radio" name="isOnSale" id="" value="true" />
                    <span>On Sale</span>
                  </div>
                  <div className="form-group__radio">
                    <input type="radio" name="isOnSale" id="" value="false" />
                    <span>Not On Sale</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Discount</label>
                <input
                  className="form-control"
                  type="text"
                  name="discount"
                  id=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Category</label>
                <select className="form-control" name="category" id="">
                  <option value="Arts & Crafts">Arts & Crafts</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Baby">Baby</option>
                  <option value="Books">Books</option>
                  <option value="Eletronics">Eletronics</option>
                  <option value="Women's Fashion">Women's Fashion</option>
                  <option value="Men's Fashion">Men's Fashion</option>
                  <option value="Health & Household">Health & Household</option>
                  <option value="Home & Kitchen">Home & Kitchen</option>
                  <option value="Military Accessories">
                    Military Accessories
                  </option>
                  <option value="Movies & Television">
                    Movies & Television
                  </option>
                  <option value="Sports & Outdoors">Sports & Outdoors</option>
                  <option value="Tools & Home Improvement">
                    Tools & Home Improvement
                  </option>
                  <option value="Toys & Games">Toys & Games</option>
                </select>
              </div>
              <button className="btn btn-primary btn-block" type="submit">
                Add
              </button>
            </form>
          </div>
        </>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: product => dispatch(actionTypes.addProduct(product))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddProduct);
