import { useState,useEffect } from "react";
function admin(){

const [origin,setOrigin]=useState("");
const [destination,setDestination]=useState("");
const [travelDate,setTravelDate]=useState("");
const [returnDate,setReturnDate]=useState("");
const [numberOfPassengers,setNumberOfPassengers]=useState("");
const [cabinClass,setCabinClass]=useState("");
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [dob,setDob]=useState("");
const [currency,setCurrency]=useState("");
const [serviceProvider,setServiceProvider]=useState("");
const [numberOfSeatsAvail,setNumberOfSeatsAvail]=useState("");
const [numberOfSeats,setNumberOfSeats]=useState("");
const [price,setPrice]=useState("");

function addFlight(){

    const flight= {origin,destination,travelDate,returnDate,numberOfSeats,
        cabinClass,numberOfSeatsAvail,currency,price,serviceProvider};
    console.log(flight);
    
    //alert("hello");
    fetch(`http://localhost:8080/api/v1/flights`,
{
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: JSON.stringify(flight)
});
//.then(res => res.json())
//.then(() => {
// setBookedFlights(bookedFlights)
//})
//;
alert("Flight  has been added successfully");
}

return(
    <div className="Container-fluid ">

<div className="container">
<div className="row ">
      
    <h2 className="text-center">Add Flight</h2> 
      
 <div className="container">
                <div className="row">
                <div className="col-3">
                <label htmlFor="origin" className="form-label">Departing Airport</label>
            <select type="text" className="form-control" id="origin" name="origin" value={origin} 
     onChange={(e)=>setOrigin(e.target.value)}>
                <option value='' ></option>
                <option value='Paris'>Paris</option>
            <option  value='London'>London</option>
            <option  value='Rome'>Rome</option>
            <option  value='Dubai'>Dubai</option>
            <option value='Tokyo'>Tokyo</option>
            <option value='Sedney'>Sedney</option>
            <option value='Istanbul'>Istanbul</option>
            <option value='Lagos'>Lagos</option>
            <option value='Accra'>Accra</option>
            <option value='Cairo'>Cairo</option>
          </select>
            
                </div>
                <div className="col-3">
                <label htmlFor="destination" className="form-label">Arriving Airport</label>
            <select type="text" className="form-control" id="destination" name="destination" value={destination} 
     onChange={(e)=>setDestination(e.target.value)} >
             <option value='' ></option>
            <option value='Paris'>Paris</option>
            <option  value='London'>London</option>
            <option  value='Rome'>Rome</option>
            <option  value='Dubai'>Dubai</option>
            <option value='Tokyo'>Tokyo</option>
            <option value='Sedney'>Sedney</option>
            <option value='Istanbul'>Istanbul</option>
            <option value='Lagos'>Lagos</option>
            <option value='Accra'>Accra</option>
            <option value='Cairo'>Cairo</option>
        </select>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-3">
                        <label htmlFor="travelDate" className="form-label">Departing</label>
             <input type="date" className="form-control" id="travelDate" name="travelDate"  
            value={travelDate} 
            onChange={(e)=>setTravelDate(e.target.value)} />
                        </div>
                        <div className="col-3">
                        <label htmlFor="returnDate" className="form-label">Returning</label>
             <input type="date" className="form-control" id="returnDate" name="returnDate"  
            value={returnDate} 
            onChange={(e)=>setReturnDate(e.target.value)} />
                        </div>
                    </div>
                
             
                </div>
                </div>
                

                <div className="row">
                <div className="col-3">
                <label htmlFor="numberOfSeats" className="form-label">Number Of Seats</label>
            <input type="number" min="0" className="form-control" id="numberOfSeats" name="numberOfSeats" 
            value={numberOfSeats} 
            onChange={(e)=>setNumberOfSeats(e.target.value)}/>
                </div>
                <div className="col-3">
                <label htmlFor="cabinClass" className="form-label">Class</label>
            <select type="text" className="form-control" id="cabinClass" name="cabinClass" 
            value={cabinClass} 
            onChange={(e)=>setCabinClass(e.target.value)}>
            <option value=''></option>
            <option value='ECONOMY'>ECONOMY</option>
            <option  value='PREMIUM ECONOMY'>PREMIUM ECONOMY</option>
            <option  value='BUSSINESS CLASS'>BUSSINESS CLASS</option>
            <option  value='FIRST CLASS'>FIRST CLASS</option>
            </select>
                </div>

                <div className="col-6">
                    <div className="row">
                   
                <div className="col-3">
                <label htmlFor="currency" className="form-label">Currency</label>
                <select type="text" className="form-control" id="currency" name="currency" 
            value={currency} 
            onChange={(e)=>setCurrency(e.target.value)}>
             
            <option value='GBP' >GBP</option>
           
            </select>
                </div>
                <div className="col-3">
                   
                <label htmlFor="serviceProvider" className="form-label">Airline</label>
                <select type="text" className="form-control" id="serviceProvider" name="serviceProvider" 
            value={serviceProvider} 
            onChange={(e)=>setServiceProvider(e.target.value)}>
             
            <option value='Emirates' >Emirates</option>
            <option value='Emirates'>Emirates</option>
            <option  value='Emirates'>Emirates</option>
            <option  value='Emirates'>Emirates</option>
            <option  value='Emirates'>Emirates</option>
            <option value='Emirates'>Emirates</option>
           
            </select>
               
               </div>

                    </div>
                </div>
                
                </div>

                <div className="row">
                    <div className="col-6">
                        <div className="row">
                           
                            <div className="col-4">
                            <label htmlFor="numberOfSeatsAvail" className="form-label">Number Of Seats Avail</label>
            <input type="number" min="0" className="form-control" id="numberOfSeatsAvail" name="numberOfSeatsAvail" 
            value={numberOfSeatsAvail} 
            onChange={(e)=>setNumberOfSeatsAvail(e.target.value)}/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-6">
                    <div className="row">
                    <div className="col-3">
                    <label htmlFor="price" className="form-label">Price</label>
            <input type="number" min="0" className="form-control" id="price" name="price" 
            value={price} 
            onChange={(e)=>setPrice(e.target.value)}/>

                    </div>
                    <div className="col-3">
                    <label  className="form-label">Add Flight</label>
               <button type="submit" onClick={()=>addFlight()} className="btn btn-primary">Add Flight</button>
                   
                    </div>

                    </div>
                        
                    </div>
                    
                </div>
                

            </div>


    

      </div>
      

</div>
<br/>
            
    </div>
)

}
export default admin