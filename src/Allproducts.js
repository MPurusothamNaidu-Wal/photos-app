import { useState } from "react";
import axios from "axios";
function Allproducts(){
    let [product, setProduct] = useState([])
    axios.get("https://fakestoreapi.com/products").then((res) => {
        setProduct(res.data)
    })
    return(
        <div >
            <h1>Data Fetching... please wait</h1>
            <div className="ProductView">
            { product.map( (val, index) => {
                if(val.id <= 20 ){
                    return (
                        <div className="Allproducts">
                            <h2 id="productId">{val.id}</h2>
                            <p id="product_price"> {val.price}$ </p>
                            <p id="productDescription" className="Productsdesc">{val.description}</p>
                        </div>
                    )

                }
            }) }
            </div>
        </div>
    )
}
export default Allproducts;