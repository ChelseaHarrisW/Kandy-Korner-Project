import React, { useEffect, useState } from "react"
import{ useHistory, } from "react-router-dom"

// above importing declarations that will allow me to manage state throuought the module using the react library

// the initial null value is serving as the transient state this function below is returning all the JSX or HTML

export const EmployeesList = () => {
    const [employees, setEmployees] = useState([])
    const [totalEmployeesMessage, updateMessages] = useState("")
    const history = useHistory()
    //declaing export function EmployeesList to store the varibles which are Arrays that hold information about the employees
    // the varibles are setting the value initially to null by using an empty string, and empty array.

    // we are using useEffect here to store the employees that  we have fetched from the server (denoted with the /employeess link) in the employeess array once the promice is complete.
    // then storing it on the null value below.

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then(
                    setEmployees
                )
        },
        []

        );
        const deleteEmployees = (evt) => {
            fetch(`http://localhost:8088/Employees/${evt.target.id}`, {
                method: "DELETE"
            })
            .then(() => fetch("http://localhost:8088/Employees")) //used qwery string parameter to specify
          .then((res) => res.json()) // converting to JSON
          .then((deleteEmployees) => {
            //converting from JSON to Javascript
            setEmployees(deleteEmployees);
             //updating the state
          });
        }
    

    //below we are using useEffect to to filter down the employeess.length to display the updateMessages function to render the coresponding messages below only if the criteria is true.
    // this creates a boolean?
   

    // Returning a div that displays a string of totalLocationMessage followed by a map array method that will return a locationObj.name
    // we do this by way of the key location--locationObj.id interpullated to find the locationObj.name wraped in a p tab for styling purposes
    return (
        <>
        <div>
    <button onClick={() => history.push("/employees/hire")}>Submit Application</button>
</div>
            <div>{totalEmployeesMessage}</div>
            {
                employees.map((employeesObj) => {
                        return ( <>
                        <div key={`employees--${employeesObj.id}`}>{employeesObj.name}</div>

                        <button id={`${employeesObj.id}`} onClick={deleteEmployees}>Fired</button>
                        </>);
                        
                    }
                )
            }
        </>
    )
        }
