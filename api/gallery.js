

const  getProducts = async ()=>{
    try{
        const response = await  fetch('https://imazineblue.onrender.com/api/products'); 
        if(!response.ok){
            throw new Error("Failed to fetch products")
        }
        return response.json()
    }
    catch(error){
        console.log(error); 
        return null; 
    }
      
} ;


export default getProducts