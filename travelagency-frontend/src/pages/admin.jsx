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
const [flights,setFlights]=useState([]);
const [newflight,setNewFlight]=useState([]);
const [phoneNumber,setPhoneNumber]=useState("");
const [newOrigin,setNewOrigin]=useState("");
const [newDestination,setNewDestination]=useState("");
const [newTravelDate,setNewTravelDate]=useState("");
const [newReturnDate,setNewReturnDate]=useState("");
const [newServiceProvider,setNewServiceProvider]=useState("");
const [newNumberOfSeatsAvail,setNewNumberOfSeatsAvail]=useState("");
const [newNumberOfSeats,setNewNumberOfSeats]=useState("");
const [newPrice,setNewPrice]=useState("");
const [newCabinClass,setNewCabinClass]=useState("");
const [newcurrency,setNewCurrency]=useState("");
const [bookedFlights,setBookedFlights]=useState([]);
const [newBookedFlight,setNewBookedFlight]=useState([]);
const [newBookedPrice,setNewBookedPrice]=useState([]);
const [newBookedName,setNewBookedName]=useState("");
const [newBookedEmail,setNewBookedEmail]=useState("");
const [newBookedPhoneNumber,setNewBookedPhoneNumber]=useState("");
const [newBookedDestination,setNewBookedDestination]=useState("");
const [newBookedTravelDate,setNewBookedTravelDate]=useState("");
const [newBookedReturnDate,setNewBookedReturnDate]=useState("");
const [newBookedOrigin,setNewBookedOrigin]=useState("");
const [newBookedCabinClass,setNewBookedCabinClass]=useState("");
const [newBookedDob,setNewBookedDob]=useState("");





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

useEffect(()=>{
    
fetch(`http://localhost:8080/api/v1/flights`)
.then(res=>res.json())
.then((result)=>{
    setFlights(result);
    console.log(flights)
   
}
)
},[])

useEffect(()=>{
    
    fetch(`http://localhost:8080/api/v1/bookings`)
    .then(res=>res.json())
    .then((result)=>{
        setBookedFlights(result);
        console.log(bookedFlights)
       
    }
    )
    },[])


function getFlight(id){
    const flight = flights.find((flight) => flight.id === id);
    
      setNewFlight(flight)
      console.log(flight)
     }

     function getBookedFlight(id){
        const bookedFlight = bookedFlights.find((bookedFlight) => bookedFlight.id === id);
    
        setNewBookedFlight(bookedFlight)
        console.log(bookedFlight)
     }

function editFlight(){
    // e.preventDefault();
     const flight=newflight
     console.log(flight)
    
     let origin=newOrigin
     let destination=newDestination
     let travelDate=newTravelDate
     let returnDate=newReturnDate
     let numberOfSeats=flight.numberOfSeats
     let numberOfSeatsAvail=flight.newNumberOfSeatsAvail
     let cabinClass=newCabinClass
     let currency=flight.currency
     let price=newPrice
     let id=flight.id

     if(destination===''){
        destination=flight.destination
     }
     if(origin===''){
        origin=flight.origin
     }
     if(travelDate===''){
        travelDate=flight.travelDate
     }


     if(returnDate===''){
        returnDate=flight.returnDate
     }

     if(cabinClass===''){
        cabinClass=flight.cabinClass
     }
     if (price===''){
        price=flight.price
     }

     /* const flightDetails= {fligtId,origin,destination,travelDate,returnDate,
         cabinClass,currency,price,numberOfSeats,numberOfSeatsAvail}; */

         const flightDetails= {id,origin,destination,travelDate,returnDate,cabinClass,price};
     console.log(flightDetails);
    
     
     
     fetch(`http://localhost:8080/api/v1/flights/${id}?origin=${origin}&destination=${destination}&travelDate=${travelDate}&returnDate=${returnDate}&cabinClass=${cabinClass}&price=${price}`,
{
 method: 'PUT',
 headers: {
   'Accept': 'application/json',
   'Content-Type': 'application/json'
 },
 body: JSON.stringify(flightDetails)
})
 

alert("Flight details has been updated successfully");
}

function editBookedFlight(){
    // e.preventDefault();
     const flight=newBookedFlight
     console.log(flight)
    
     let origin=newBookedOrigin
     let destination=newBookedDestination
     let travelDate=newBookedTravelDate
     let returnDate=newBookedReturnDate
     let numberOfSeats=flight.numberOfSeats
     let numberOfSeatsAvail=flight.newNumberOfSeatsAvail
     let cabinClass=newCabinClass
     let currency=flight.currency
     let price=newBookedPrice
     let id=flight.id
     let name=newBookedName
     let phoneNumber=newBookedPhoneNumber
     let email=newBookedEmail
     let dob= newBookedDob


     if(destination===''){
        destination=flight.destination
     }
     if(origin===''){
        origin=flight.origin
     }
     if(travelDate===''){
        travelDate=flight.travelDate
     }


     if(returnDate===''){
        returnDate=flight.returnDate
     }

     if(cabinClass===''){
        cabinClass=flight.cabinClass
     }
     if (price===''){
        price=flight.price
     }
     if(name===''){
        name=flight.name
     }

     if (phoneNumber===''){
        phoneNumber=flight.phoneNumber
     }
     if(email===''){
        email=flight.email
     }
     if(dob===''){
        dob=flight.dob
     }

     /* const flightDetails= {fligtId,origin,destination,travelDate,returnDate,
         cabinClass,currency,price,numberOfSeats,numberOfSeatsAvail}; */

         const flightDetails= {id,origin,destination,travelDate,returnDate,cabinClass,price,name,phoneNumber,email,dob};
     console.log(flightDetails);
    
     
     
     fetch(`http://localhost:8080/api/v1/bookings/${id}?origin=${origin}&destination=${destination}&travelDate=${travelDate}&returnDate=${returnDate}&cabinClass=${cabinClass}&price=${price}&name=${name}&phoneNumber=${phoneNumber}&email=${email}&dob=${dob}`,
{
 method: 'PUT',
 headers: {
   'Accept': 'application/json',
   'Content-Type': 'application/json'
 },
 body: JSON.stringify(flightDetails)
})
 

alert("Flight details has been updated successfully");
}



function deleteFlight(id){
   
    if (window.confirm("Are you sure you want to delete this flight?"))
    {
      fetch(`http://localhost:8080/api/v1/flights/${id}`,
    {
      method: 'DELETE'
  }).then(() => {
    setFlights(flights.filter(flight => flight.id !== id))
  })
  .then(res => console.log(res));
  
  alert("Flight with ID " + id + " was deleted successfully");
    
  }
  
  }


  function deleteBookedFlight(id){

    if (window.confirm("Are you sure you want to delete this booking flight?"))
    {
      fetch(`http://localhost:8080/api/v1/bookings/${id}`,
    {
      method: 'DELETE'
  }).then(() => {
    setBookedFlights(bookedFlights.filter(bookedFlight => bookedFlight.id !== id))
  })
  .then(res => console.log(res));
  
  alert("Booking with ID " + id + " was deleted successfully");
    
  }

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
             
            <option value='' ></option>
            <option value='GBP' >GBP</option>
           
            </select>
                </div>
                <div className="col-3">
                   
                <label htmlFor="serviceProvider" className="form-label">Airline</label>
                <select type="text" className="form-control" id="serviceProvider" name="serviceProvider" 
            value={serviceProvider} 
            onChange={(e)=>setServiceProvider(e.target.value)}>
             
            <option value='' ></option>
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

<div className="container-fluid">
         <h1 className="text-center">Available Flights</h1>
        
        <table className="table ">
        <thead>
          <tr>
            <th>Departing Airport</th>
            <th>Arriving Airport</th>
            <th>Departing</th>
            <th >Arriving</th>
            <th >Class</th>
            <th>Service Provider</th>
            <th>Price</th>
            <th>Currency</th>
            <th>Seats Available</th>
          </tr>
        </thead>
        <tbody>
        {flights.map(flight=> (<tr className="container-fluid" key={flight.id}>
          
            <td>{flight.origin}</td>
            <td>{flight.destination}</td>
            <td>{flight.travelDate}</td>
            <td >{flight.returnDate}</td>
            <td >{flight.cabinClass}</td>
            <td>{flight.serviceProvider}</td>
             <td>{flight.price}</td> 
            <td>{flight.currency}</td>
            <td>{flight.numberOfSeatsAvail}</td>
            <td><button type="button" className="btn btn-warning m-3" data-toggle="modal" data-target="#modal1" onClick={()=>getFlight(flight.id)} >Edit</button>
            <div className="modal" id="modal1"  role="dialog" aria-labelledby="modallabel1" aria-hidden= "true">
            <div className="row justify-content-center">
              <div className="col-md-8">
      <div className="modal-content" >
       <h2 className="modal-header">Edit Flight</h2> 
       <form  className="">
       <div className="row">
        <div className="col-md-4">
        <label htmlFor="newOrigin" className="form-label">Departing Airport</label>
    <input type="text" className="form-control" id="newOrigin" name="newOrigin" defaultValue={newflight.origin } 
     onChange={(e)=>setNewOrigin(e.target.value)}/>
        </div>
        <div className="col-md-4"><label htmlFor="newDestination" className="form-label">Arriving</label>
    <input type="text" className="form-control" id="newDestination" name="newDestination" defaultValue={newflight.destination  } 
    onChange={(e)=>setNewDestination(e.target.value)} />
    </div>
     
    </div>
  <div className="row">
  <div className="col-md-4"><label htmlFor="newTravelDate" className="form-label">Departing</label>
             <input type="date" className="form-control" id="newTravelDate" name="newTravelDate"  
            defaultValue={newflight.travelDate  } 
            onChange={(e)=>setNewTravelDate(e.target.value)} />
            </div>
    <div  className="col-md-4">
    <label htmlFor="newReturnDate" className="form-label">Returning</label>
             <input type="date" className="form-control" id="newReturnDate" name="newReturnDate"  
            defaultValue={newflight.returnDate  } 
            onChange={(e)=>setNewReturnDate(e.target.value)} />
    </div>
  </div>
  <div className="row">
  <div className="col-md-4">
  <label htmlFor="newNumberOfSeatsAvail" className="form-label">Number Of Seats Avail</label>
            <input type="number" min="0" className="form-control" id="newNumberOfSeatsAvail" name="newNumberOfSeatsAvail" 
            defaultValue={newflight.numberOfSeatsAvail } 
            onChange={(e)=>setNewNumberOfSeatsAvail(e.target.value)}/>
  </div>
  <div className="col-md-4">
  <label htmlFor="newCabinClass" className="form-label">Class</label>
            <input type="text" className="form-control" id="newCabinClass" name="newCabinClass" 
            defaultValue={newflight.cabinClass  } 
            onChange={(e)=>setNewCabinClass(e.target.value)}/>

  </div>
  </div>
  <div className="row">
    <div className="col-md-4">
    <label htmlFor="newServiceProvider" className="form-label">Service Provider</label>
            <input type="text" className="form-control" id="newServiceProvider" name="newServiceProvider" defaultValue={newflight.serviceProvider} 
     onChange={(e)=>setNewServiceProvider(e.target.value)}/>
    </div>
    <div className="col-md-4">
    <label htmlFor="newPrice" className="form-label">Price</label>
    <input type="number"  className="form-control" id="newPrice" name="newPrice" defaultValue={newflight.price} 
     onChange={(e)=>setNewPrice(e.target.value)}  />
    </div>
  </div>
  <div className="row">
 <div className="col-md-4">
 <label htmlFor="newCurrency" className="form-label">Currency</label>
    <input type="text"  className="form-control" id="newCurrency" name="newCurrency" value={newflight.currency} 
     onChange={(e)=>setNewCurrency(e.target.value)}  />
 </div>
 <div className="col-md-4">
 <label htmlFor="newNumberOfSeats" className="form-label">Number Of Seats</label>
             <input type="number" className="form-control" id="newNumberOfSeats" name="newNumberOfSeats"  
            defaultValue={newflight.numberOfSeats} 
            onChange={(e)=>setNewNumberOfSeats(e.target.value)} />
 </div>

  </div>
  <br/>
   
 
  
  <br/>
  <div className="d-flex justify-content-center modal-footer">
  <button type="submit"  className="btn btn-primary" onClick={editFlight} >Edit Flight</button>
  </div>
 

</form>

    </div>

      </div>
      </div>
      </div>
      &nbsp;
            <button type="button" className="btn btn-danger" onClick={()=>deleteFlight(flight.id)}>Delete</button>
            </td>

          </tr>

          
          )
          
          )}
        </tbody>
         </table>
          <br/>
          


      </div>


      <div className="container-fluid">
         <h1 className="text-center">Booked Flights</h1>
        
        <table className="table ">
        <thead>
          <tr>
            <th>Departing Airport</th>
            <th>Arriving Airport</th>
            <th>Departing</th>
            <th >Arriving</th>
            <th >Class</th>
            <th>Phone Number</th>
            <th>Price</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {bookedFlights.map(bookedFlight=> (<tr className="container-fluid" key={bookedFlight.id}>
          
            <td>{bookedFlight.origin}</td>
            <td>{bookedFlight.destination}</td>
            <td>{bookedFlight.travelDate}</td>
            <td >{bookedFlight.returnDate}</td>
            <td >{bookedFlight.cabinClass}</td>
            <td>{bookedFlight.phoneNumber}</td>
             <td>{bookedFlight.price}</td> 
            <td>{bookedFlight.name}</td>
            <td>{bookedFlight.email}</td>
            <td><button type="button" className="btn btn-warning m-3" data-toggle="modal" data-target="#modal2" onClick={()=>getBookedFlight(bookedFlight.id)} >Edit</button>
            <div className="modal" id="modal2"  role="dialog" aria-labelledby="modallabel1" aria-hidden= "true">
            <div className="row justify-content-center">
              <div className="col-md-8">
      <div className="modal-content" >
       <h2 className="modal-header">Booked Flights</h2> 
       <form  className="">
       <div className="row">
        <div className="col-md-4">
        <label htmlFor="newBookedOrigin" className="form-label">Departing Airport</label>
    <input type="text" className="form-control" id="newBookedOrigin" name="newBookedOrigin" defaultValue={newBookedFlight.origin } 
     onChange={(e)=>setNewBookedOrigin(e.target.value)}/>
        </div>
        <div className="col-md-4"><label htmlFor="newBookedDestination" className="form-label">Arriving</label>
    <input type="text" className="form-control" id="newBookedDestination" name="newBookedDestination" defaultValue={newBookedFlight.destination  } 
    onChange={(e)=>setNewBookedDestination(e.target.value)} />
    </div>
     
    </div>
  <div className="row">
  <div className="col-md-4"><label htmlFor="newBookedTravelDate" className="form-label">Departing</label>
             <input type="date" className="form-control" id="newBookedTravelDate" name="newBookedTravelDate"  
            defaultValue={newBookedFlight.travelDate  } 
            onChange={(e)=>setNewBookedTravelDate(e.target.value)} />
            </div>
    <div  className="col-md-4">
    <label htmlFor="newBookedReturnDate" className="form-label">Returning</label>
             <input type="date" className="form-control" id="newBookedReturnDate" name="newBookedReturnDate"  
            defaultValue={newBookedFlight.returnDate  } 
            onChange={(e)=>setNewBookedReturnDate(e.target.value)} />
    </div>
  </div>
  <div className="row">
  <div className="col-md-4">
  <label htmlFor="newBookedPrice" className="form-label">Price</label>
            <input type="number" min="0" className="form-control" id="newBookedPrice" name="newBookedPrice" 
            defaultValue={newBookedFlight.price } 
            onChange={(e)=>setNewBookedPrice(e.target.value)}/>
  </div>
  <div className="col-md-4">
  <label htmlFor="newBookedCabinClass" className="form-label">Class</label>
            <input type="text" className="form-control" id="newBookedCabinClass" name="newBookedCabinClass" 
            defaultValue={newBookedFlight.cabinClass  } 
            onChange={(e)=>setNewBookedCabinClass(e.target.value)}/>

  </div>
  </div>
  <div className="row">
    <div className="col-md-4">
    <label htmlFor="newBookedName" className="form-label">Name</label>
            <input type="text" className="form-control" id="newBookedName" name="newBookedName" defaultValue={newBookedFlight.name} 
     onChange={(e)=>setNewBookedName(e.target.value)}/>
    </div>
    <div className="col-md-4">
    <label htmlFor="newBookedEmail" className="form-label">Email</label>
    <input type="email"  className="form-control" id="newBookedEmail" name="newBookedEmail" defaultValue={newBookedFlight.email} 
     onChange={(e)=>setNewBookedEmail(e.target.value)}  />
    </div>
  </div>
  <div className="row">
 <div className="col-md-4">
 <label htmlFor="newBookedPhoneNumber" className="form-label">Phone Number</label>
    <input type="text"  className="form-control" id="newBookedPhoneNumber" name="newBookedPhoneNumber" defaultValue={newBookedFlight.phoneNumber} 
     onChange={(e)=>setNewBookedPhoneNumber(e.target.value)}  />
 </div>
 <div className="col-md-4">
 <label htmlFor="newBookedDob" className="form-label">Date of Birth</label>
             <input type="date" className="form-control" id="newBookedDob" name="newBookedDob"  
            defaultValue={newBookedFlight.dob} 
            onChange={(e)=>setNewBookedDob(e.target.value)} />
 </div>

  </div>
  <br/>
  
 
  
  <br/>
  <div className="d-flex justify-content-center modal-footer">
  <button type="submit"  className="btn btn-primary" onClick={editBookedFlight}>Update Details</button>
  </div>
 

</form>

    </div>

      </div>
      </div>
      </div>
      &nbsp;
            <button type="button" className="btn btn-danger" onClick={()=>deleteBookedFlight(bookedFlight.id)}>Delete</button>
            </td>

          </tr>

          
          )
          
          )}
        </tbody>
         </table>
          <br/>

           


            
           
       
      </div>
            
    </div>
)

}
export default admin