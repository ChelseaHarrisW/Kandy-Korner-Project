import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getAllProducts } from "../API-Manager";

// above importing declarations that will allow me to manage state throuought the module using the react library

// the initial null value is serving as the transient state this function below is returning all the JSX or HTML

export const ProductList = () => {
    const [products, setProducts] = useState([])
    

    useEffect(
        () => {
            getAllProducts()
                .then(setProducts)
                
        },
        []
    )
   
    return (
        <>
            <h2>Product List</h2>
            {
                products.map((product) => {
                        return <section key={product.id} className="product">
                            <div className="product_info">
                                <div className="product_name">{product.name}</div>
                                <div className="product_Type">{product.type}</div>
                                <div className="product_Price">{product.price}</div>
                                </div>
                                <div className="prompt"><Link to={`/products/${product.id}/locations`}>{`See stores that stock ${product.type}!`}</Link></div>
                            </section>
                    
                        ;
                    }
                )
            }
        </>
    )
}


// expanded product and type http://localhost:8088/products?_expand=productType