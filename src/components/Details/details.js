import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import addImage from '../../img/products/product-grey-7.jpg';
import * as actionTypes from '../../store/actions/actionProduct';
class DetailsItem extends Component {

    state = {
        product: {}
    }
componentDidMount(){
    this.props.onDetails(this.props.match.params.productId)
}


    render() {
       
        return (
            <>
                <div class="product-details container">
                    <section class="product-details__main">
                        {/* <!-- images slider --> */}
                        <div class="slider">
                            <div class="slider__items">
                                <div class="slider__item active" style={{backgroundImage:`url(${addImage})`}}></div>
                            </div>
                            <div class="slider__indicators">
                                <span class="slider__indicator active"></span>
                                <span class="slider__indicator"></span>
                                <span class="slider__indicator"></span>
                            </div>
                        </div>
                        {/* <!-- product info --> */}
                        <div class="product-details__info">
                            <h1>{this.props.product.productName}</h1>
                            <div class="rating">
                                <div class="rating__stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                                <div class="rating__data">
                                    2 reviews
                    </div>
                            </div>
                            <div class="product-details__amount">
                                price:  {this.props.product.price }

                            </div>
                            <div class="product-details__amount">
                                Sale:  {this.props.product.discount }%

                            </div>
                            <div class="product-details__amount">
                                price after sale : {this.props.product.price-(this.props.product.price*(this.props.product.discount/100))}

                            </div>

                            <p class="product-details__desc">
                            <h4>Description:</h4>{this.props.product.description}
                            <br/>
                            <br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div class="product-details__add">
                                <div class="increment-control">
                                    <a href="#" class="increment-control__action">-</a>
                                    <input type="text" class="form-control" title="Qty" value="1" />
                                    <a href="#" class="increment-control__action">+</a>
                                </div>
                                <button href="#" class="btn btn--primary">Add to cart</button>
                            </div>
                            <div class="product-details__meta">
                                Categories: <a rel="tag" href="#">{this.props.product.category}</a>.
                </div>
                        </div>
                    </section>
                    <section class="tabs">
                        <div class="tabs__headers">
                            <div class="tabs__header active">
                                Description
                </div>
                            <div class="tabs__header">
                                Additional Information
                </div>
                            <div class="tabs__header">
                                Reviews (2)
                </div>
                        </div>
                        <div class="tabs__bodies">
                            <div class="tabs__body active">
                                <div class="product-details__desc">
                                    <p>
                                       
                        </p>
                                    <p>
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa fringilla consequat blandit,
                                        mauris ligula porta nisi, non tristique enim sapien vel nisl. Suspendisse vestibulum lobortis
                                        dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                        </p>
                                </div>
                            </div>
                            <div class="tabs__body ">
                                tab2
                </div>
                            <div class="tabs__body">
                                tab3
                </div>
                        </div>
                    </section>
                    
                {/* <!-- footer --> */}
                <div class="footer">
                    {/* <!-- subscription --> */}
                    <div></div>
                    {/* <!-- menu --> */}
                    <div></div>
                    {/* <!-- contact info --> */}
                    <div></div>
                </div>
</div>
            </>
        )
    }
}
const mapStateToProp =(state)=>{
    return{
        product:state.productDetails
    }
}

const mapDispatchToProp =(dispatch)=>{
    return{
        onDetails:(id)=>dispatch(actionTypes.detailsProduct(id))
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(DetailsItem);