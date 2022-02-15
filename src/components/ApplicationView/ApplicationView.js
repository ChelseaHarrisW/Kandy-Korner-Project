import React from "react";
import { Route } from "react-router-dom";
import { CustomerList } from "../customers/Customers";
import {LocationList} from "../locations/Locations";
import{EmployeesList} from "../Employees/Employees";
import {EmployeeForm} from "../Employees/EmployeesForm";
import { ProductList } from "../products/Products";





//this module is responsible for holding nav bar routes. and displaing the info when the item is clicked.
//routes are listening for event. when the there is a match /customers will display customer links
//observing the patern for matches so that the components can then be rendered
//these paths will later be rendered in the KandyKorner.js mod for functionaliity

export const ApplicationViews = () => {
    return (
        <>
        
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeesList />
            </Route>
            <Route exact path="/employees/:employeeId(\d+)">
                <EmployeesList />
            </Route>

            <Route exact path="/locations">
                <LocationList />
            </Route>
            <Route exact path="/products">
                <ProductList />
            </Route>

            <Route exact path="/employees/hire">
                < EmployeeForm />
            </Route>

           
        
        </>
        )
        }
