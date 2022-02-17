import { useEffect, useState } from "react"
import { getAllLocations, getAllProducts, getPurchasesByCurrentCustomer } from "../API-Manager"


export const OrderList = () => {
  
    const [purchases, setPurchases] = useState([])
    const [products, setProducts] = useState([])
    const [locations, setLocations] = useState([])
    const currentCustomer = parseInt(localStorage.getItem("kandy_customer"))
    // fetch purchases passing in the customer as a local customer in as a paramater to make sure only that customer can see their purchases
    useEffect(
        () => {
            
           getPurchasesByCurrentCustomer(currentCustomer)
                .then(setPurchases)
        },
        [currentCustomer]

    )
    useEffect(
        () => {
            console.log("fetching products...")
            getAllProducts()
                .then(setProducts)
        },
        []
    )
    useEffect(
        () => {
            console.log("fetching locations...")
            getAllLocations()
                .then(setLocations)
        },
        []
    )


    return (
        <>
            {
                purchases.map(purchase => {
                    const foundProduct = products.find(product => product.id === purchase.productLocation.productId) || {}
                    const foundLocation = locations.find(location => location.id === purchase.productLocation.locationId) || {}
                    return <section key={`order--${purchase.id}`} className="order">
                        <div className="order__item">{purchase.quantity} {foundProduct.name} (${foundProduct.price} ea.)</div>
                        <div className="order__total">Total: {purchase.total.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })}</div>
                        <div className="order__location">Purchased from the {foundLocation.name} </div>
                    </section>
                })
            }
        </>
    )
}