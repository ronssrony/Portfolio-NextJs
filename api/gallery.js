

const  getProducts = async ()=>{
      const response = await  fetch('http://localhost:3100/api/products'); 
      return response.json()
      
}
const getProduct = async (params)=>{

    const response = await  fetch(`http://localhost:3100/api/product/${params}`); 
 
    return response.json()
}

export  {getProducts , getProduct}