import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import addImage from "../../img/products/product-grey-7.jpg";
import axios from "axios";

class CardItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="item-medium-1 text-center">
          {this.props.discount === null ? null : (
            <div className="item-medium-1__alert">{this.props.discount}%</div>
          )}
          <div
            className="item-medium-1__image image"
            style={{ backgroundImage: `url(${addImage})` }}
          >
            <a href="#" className="item-medium-1__action">
              Add to Cart
            </a>
          </div>

          <h4>{this.props.productName}</h4>
          <h4>{this.props.price}</h4>
          <h4>{this.props.category}</h4>
          <h4>
            <span>Description :</span>
          </h4>
          <p> {this.props.description}</p>
          <div className="flex-row">
            <div>
              <h4>
                <span>price after sale :</span>
                {this.props.isOnSale === null ? (
                  <span>${this.props.price}</span>
                ) : (
                  <del>${this.props.price}</del>
                )}
                {this.props.isOnSale === null ? (
                  <span className="lable" />
                ) : (
                  <span className="lable">
                    $
                    {this.props.price -
                      this.props.price * (this.props.discount / 100)}
                  </span>
                )}
              </h4>
            </div>

            <div className="crud-actions">
              <Link to={`/detailProduct/${this.props.id}`}>
                <i className="far fa-eye" />
              </Link>
              {localStorage.getItem("userid") === this.props.userId ? (
                <>
                  <Link to={`/editProduct/${this.props.id}`}>
                    <i className="fas fa-edit" />
                  </Link>
                  <a onClick={() => this.props.deleted(this.props.id)}>
                    <i className="fas fa-trash-alt" />
                  </a>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CardItem;
