import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { CustomerList } from "../customers/CustomersList";
import { EmployeeList } from "../Employees/Employees";
import { EmployeeForm } from "../Employees/EmployeesForm";
import { Location } from "../locations/Location";
import { LocationList } from "../locations/locationList";
import { LocationListByProduct } from "../locations/ProductLocationList";
import { OrderList } from "../Orders/orders";
import { ProductList } from "../products/Products";






export const ApplicationViews = () => {
    return (
        <>
        <Route exact path = {["/", "/locations"]}>
            <LocationList />
        </Route>
        <Route exact path = "/locations/:locationId(\d+)">
            <Location />
        </Route>
        <Route exact path = "/products">
            <ProductList />
        </Route>
        <Route exact path = "/products/:productId(\d+)/locations">
            <LocationListByProduct />
        </Route>
        <Route exact path = "/customers">
            <CustomerList />
        </Route>
        <Route exact path = "/employees">
            <EmployeeList />
        </Route>
        <Route exact path = "/employees/hire">
            <EmployeeForm />
        </Route>
        <Route exact path = "/myOrders">
            <OrderList />
        </Route>
        </>
    )
}