// this module is responsible for housing all of my fetch calls

export const getAllLocations = () => {
    return fetch(`http://localhost:8088/locations`)
    .then(res => res.json())
}

export const getAllProducts =() => {
    return fetch(`http://localhost:8088/products`)
    .then(res => res.json())
}

export const getAllCustomers = () => {
    return fetch(`http://localhost:8088/customers`)
    .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch(`http://localhost:8088/employees`)
    .then(res => res.json())
}

export const getAllPurchases =() => {
    return fetch(`http://localhost:8088/purchases`)
    .then(res => res.json())
}

export const getProductByLocationId = (locationId) => {
    return fetch(`http://localhost:8088/productLocations?productId=${locationId}&_expand=location&_expand=product`)
    .then(res => res.json())
}
export const getProductLocationsByProductId = (productId) => {
    return fetch(`http://localhost:8088/productLocations?productId=${productId}&_expand=location&_expand=product`)
        .then(res => res.json())
}

export const getPurchasesByCurrentCustomer = (currentCustomer) => {
    return fetch(`http://localhost:8088/purchases?customerId=${currentCustomer}&_expand=productLocation`)
    .then(res => res.json())
}

export const getCustomerPurchases = (customerId) => {
    return fetch(`http://localhost:8088/customers?_embed=purchases`)
    .then(res => res.json())
}

export const PostNewHire =(newHireObj) => {
    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newHireObj)
    }
    return fetch(`http://localhost:8088/employees`, fetchOption)
    .then(res => res.json())
}

export const PostNewPurchase = (purchaseObj) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(purchaseObj)
    }
    return fetch(`http://localhost:8088/purchases`, fetchOptions)
        .then(res => res.json())
}

export const deleteEmployeeById = (id) => {
    return fetch(`http://localhost:8088/employees/${id}`, { method: "DELETE" })
}