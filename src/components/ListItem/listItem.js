import React, { Component } from 'react';
import CardItem from '../CardItem/cardItem';
import Category from '../Category/category';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionProduct';
export class ListItem extends Component {
    
    state={
        products:[]
    }
    componentDidMount(){
        const userId = localStorage.getItem('userid');
        // console.log(userId);
        this.props.onShow(userId);
    }

    render(){
        if(localStorage.getItem('token')===null&& localStorage.getItem('useris')===null)
        {
            return(<div className="rl"><h4>Must be Register or Login in our Ecommerce Website :)</h4></div>)
        }
        else{
        return(
            <>
            <div className="container">
            <Category></Category>
            <section class="item-listing">

                        <div class="item-listing__tools">
                            <select class="form-control" name="" id="">
                                <option value="1">Featured</option>
                                <option value="2">Price low to high</option>
                                <option value="3">Price high to low</option>
                                <option value="4">Name</option>
                            </select>
                            <a class="action-btn" href="#">
                                <i class="fas fa-plus"></i>
                            </a>
                        </div>
            <div class="item-listing__items item-listing--3items" style={{ width: "100%" }}>
           
            {this.props.products.map(product=>{
                return(
                    <>
                    <CardItem 
                productName={product.productName}
                description={product.description}
                price={product.price}
                discount={product.discount}
                category={product.category}
                id={product._id}
                userId={product.userId}
                key={product._id}
                deleted={()=>this.props.onDelete(product._id)}

                ></CardItem>
                    </>
                )
            
                
            })}
            
           </div>
           </section>
            </div>
            
           
            </>
        )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onShow:(id)=>dispatch(actionTypes.GettAllProductFromOneUser(id)),
        onDelete:(id)=> dispatch(actionTypes.deleteProduct(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListItem);