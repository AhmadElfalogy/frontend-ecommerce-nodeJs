const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';
const axios = require('axios')
console.log(baseUrl);
module.exports={

    addProduct(product){
        product.userId = localStorage.getItem('userid');
     axios.post(`${baseUrl}/products/`, product).then(res=>res.data)
    },

    getProducts(){
       return axios.get(`${baseUrl}/products/`).then(res=>res.data)
    },

    updateProduct(productUpdated,productId){
        axios.patch(`${baseUrl}/products/${productId}`,productUpdated);
    }
}