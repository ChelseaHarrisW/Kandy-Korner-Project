import { LocationList } from "../Locations/Locations" 
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
        
        </>
       
    )
}

