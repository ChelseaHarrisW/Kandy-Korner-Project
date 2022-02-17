import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"


export const Navbar = (props) => {
    return (
        <ul className="navbar">
             <li className="navbar__item active">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/Locations">Locations</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/Products">Products</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/Purchases">My Orders</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__item" to="#"
                onClick={
                    () => {
                        localStorage.removeItem("kandy_customer")
                    }
                    
                }>
                Logout
                </Link>
            </li>
        </ul>
    )
}
// link component will generate anchor tags
// to atrubute will assign the anchor tag (h ref atribute)