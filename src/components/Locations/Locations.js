import React, { useEffect, useState } from "react"
// above importing declarations that will allow me to manage state throuought the module using the react library

// the initial null value is serving as the transient state this function below is returning all the JSX or HTML

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    const [totalLocationMessage, updateMessages] = useState("")
    //declaing export function LocationList to store the varibles which are Arrays that hold information about the location
    // the varibles are setting the value initially to null by using an empty string, and empty array.

    // we are using useEffect here to store the location that  we have fetched from the server (denoted with the /locations link) in the locations array once the promice is complete.
    // then storing it on the null value below.

    useEffect(
        () => {
            fetch("http://localhost:8088/Locations")
                .then(res => res.json())
                .then(
                    (locationArray) => { setLocations(locationArray) }
                )
        },
        []
    )

    //below we are using useEffect to to filter down the locations.length to display the updateMessages function to render the coresponding messages below only if the criteria is true.
    // this creates a boolean?
   

    // Returning a div that displays a string of totalLocationMessage followed by a map array method that will return a locationObj.name
    // we do this by way of the key location--locationObj.id interpullated to find the locationObj.name wraped in a p tab for styling purposes
    return (
        <>
            <div>{totalLocationMessage}</div>
            {
                locations.map((locationObj) => {
                        return <p key={`location--${locationObj.id}`}>{locationObj.address}</p>
                    }
                )
            }
        </>
    )
}
