import * as actionTypes from '../actions/actionProduct';

const intialState={
    products: [],
    productDetails:{},
  
   
}
const productReducer = (state=intialState,action)=>{

    switch(action.type){

        case actionTypes.GETALL:
            // console.log(action.products);
            let productsArr =[];
            for(const key in action.products){
                productsArr.push({
                     
                    productName:action.products[key].productName,
                    description:action.products[key].description,
                    price:action.products[key].price,
                    isOnSale:action.products[key].isOnSale,
                    discount:action.products[key].discount,
                    category:action.products[key].category,
                    _id:action.products[key]._id,
                    userId:action.products[key].userId,

                });
            }
            return{
                ...state,
                products:productsArr
            } 

        case actionTypes.GETALLPRODUCTSFROMONEUSER:
        //    console.log(action.products);
           let productsArr2 =[];
            for(const key in action.products){
                productsArr2.push({
                     
                    productName:action.products[key].productName,
                    description:action.products[key].description,
                    price:action.products[key].price,
                    isOnSale:action.products[key].isOnSale,
                    discount:action.products[key].discount,
                    category:action.products[key].category,
                    _id:action.products[key]._id,
                    userId:action.products[key].userId,

                });
            }
           return{
            ...state,
            products:productsArr2
            
        }

        case actionTypes.DETAILS:
        //   console.log(action.product);
           let productsArrDetails=[...state.products];
           let indexNew = productsArrDetails.findIndex(p => p._id === action.id );
        //    console.log(productsArrDetails[indexNew])
           productsArrDetails[indexNew]=action.product;
           
           return{
               ...state,
               productDetails:productsArrDetails[indexNew]
           }


          case actionTypes.DELETE:
          let productArrAfterDelete=[...state.products];
          let index = productArrAfterDelete.findIndex(p => p._id === action.id );
        //    console.log(index)
          productArrAfterDelete.splice(index,1);

          return{
              ...state,
              products:productArrAfterDelete
          }

          case actionTypes.ADD:
          let productArrAfterAdded=[...state.products];
          productArrAfterAdded.push(action.value);
        //   console.log(productArrAfterAdded)
          return{
            ...state,
            products:productArrAfterAdded
        }

        case actionTypes.UPDATE:
        let productArrAfterUpdated=[...state.products];
        let indexProduct = productArrAfterUpdated.findIndex(p => p._id === action.id );
        productArrAfterUpdated[indexProduct]=action.value;

        return{
            ...state,
            products:productArrAfterUpdated
        }





        }



        

        return state;
    
        
    }


export default productReducer;
 