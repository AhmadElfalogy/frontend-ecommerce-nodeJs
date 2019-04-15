import React, { Component } from "react";
import CardItem from "../CardItem/cardItem";
import Category from "../Category/category";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionProduct";

class AllProduct extends Component {
  state = {
    products: []
  };

  render() {
    return (
      <>
        <div className="container">
          <Category />
          <section class="item-listing">
            <div class="item-listing__tools">
              <select class="form-control" name="" id="">
                <option value="1">Featured</option>
                <option value="2">Price low to high</option>
                <option value="3">Price high to low</option>
                <option value="4">Name</option>
              </select>
              <a class="action-btn" href="#">
                <i class="fas fa-plus" />
              </a>
            </div>
            <div
              class="item-listing__items item-listing--3items"
              style={{ width: "100%" }}
            >
              {this.props.products.map(product => {
                return (
                  <>
                    <CardItem
                      productName={product.productName}
                      description={product.description}
                      price={product.price}
                      discount={product.discount}
                      category={product.category}
                      isOnSale={product.isOnSale}
                      id={product._id}
                      key={product._id}
                      deleted={() => this.props.onDelete(product._id)}
                    />
                  </>
                );
              })}
            </div>
          </section>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onShow: () => dispatch(actionTypes.GettAllProduct()),
    onDelete: id => dispatch(actionTypes.deleteProduct(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProduct);
