import { LocationList } from "../Locations/Locations" 
import { CustomerList } from "../Customers/Customers"
import {ProductList } from "../Products/Products"
// ^^the functions above are importing statements that are later called below to render the coresponding import location that
// below are followed from the listed items. 
// the functions below are being called in a function called Repairs which is returning the functions ability to render the HTML to the DOM setCustomers
// see corresponding function at loocation.

export const KandyKorner = () => {

    return (
        <>
        <h1>KandyKorner</h1>
       
        <h2>Locations</h2>
        < LocationList/>

        <h2>Customers</h2>
        <CustomerList/>
        
        <h2>Products</h2>
        <ProductList/>
        
        </>
       
    )
}

