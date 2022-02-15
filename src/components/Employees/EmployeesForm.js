import React, { useState } from "react"
import { useHistory } from "react-router-dom"



export const EmployeeForm = () => {
    const [employee, update] = useState({ // update is the setter fx, it will be how we update the employee  info to API
            "name": "",
            "location": "",
            "manager": false,
            "fullTime": false,
            "hourlyRate": "",
        });
        // the varibles above are both representing transient state that have 2 different respondsibilities. the "employee" state will store user input whereas the update state take changes made by user to put them in transient state to add back to employee
        // state vs set... puttin more items in the box
        // the state here will return the info dedired obove ie a string or a boolean refer to the use state obj above
    const history = useHistory()


    const saveEmployee = (SubmitEmployeeClicked) => {
        SubmitEmployeeClicked.preventDefault()

        const submitEmployee = {
            "name": employee.name,
            "location": employee.location,
            "manager": employee.manager,
            "fullTime": employee.fullTime,
            "hourlyRate": employee.hourlyRate,
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(submitEmployee)
        }
        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }

    // a function to submit employee to the database return will reflect such
    // if you change your form be sure to also change it in aplication views to make sure everything is consistent and matching with coresponding modules
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name:</label>
                    <input
                        
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.name = evt.target.value
                                update(copy)
                            }}
                        
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Location:</label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Location"
                    
                    onChange={
                        (evt) => {
                            const copy = { ...employee }
                            copy.location = evt.target.value
                            update(copy)
                        }}
                    

                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Desired Hourly Rate:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="DesiredRate"
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.hourlyRate = evt.target.value
                                update(copy)
                            }

                        }

                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name"> Full-time:</label>
                    <input type="checkbox"
                        onChange={(evt) => {
                            const copy = { ...employee }
                            copy.fullTime = evt.target.checked
                            update(copy) // needed to track the updated copies (changes in state)
                        }

                        }
                        type="checkbox" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name"> Manager:</label>
                    <input type="checkbox"
                        onChange={(evt) => {
                            const copy = { ...employee }
                            copy.manager = evt.target.checked
                            update(copy) // needed to track the updated copies (changes in state)
                        }

                        }
                        type="checkbox" />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveEmployee}>
                Submit Employee
            </button>
        </form>
    )
}
        
