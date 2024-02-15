import { useState,useEffect } from "react";



function index(){
const [origin,setOrigin]=useState("");
const [destination,setDestination]=useState("");
const [travelDate,setTravelDate]=useState("");
const [returnDate,setReturnDate]=useState("");
const [numberOfPassengers,setNumberOfPassengers]=useState("");
const [cabinClass,setCabinClass]=useState("");
const [flight,setFlight]=useState([]);

function searchForFlight(){
    
    const flight = { origin, destination, travelDate, returnDate,cabinClass };
    console.log(flight);
    console.log(!(flight.origin===''));
    
    if(!(flight.origin==='') && !(flight.destination==='') &&
        !(flight.travelDate==='')&& !(flight.returnDate==='')&& !(flight.cabinClass=='')
        ){
            
        fetch(`http://localhost:8080/api/v1/flights/search?origin=${flight.origin}&&destination=${flight.destination}&&travelDate=${flight.travelDate}&&returnDate=${flight.returnDate}&&cabinClass=${flight.cabinClass}`)
        .then(res=>res.json())
        .then((result)=>{
            setFlight(result);
          
        }
        )

    }
    else if(!(flight.origin==='') && !(flight.destination==='') &&
        !(flight.travelDate==='')&&!(flight.returnDate==='')){
        
       fetch(`http://localhost:8080/api/v1/flights/search/Return?origin=${flight.origin}&&destination=${flight.destination}&&travelDate=${flight.travelDate}&&returnDate=${flight.returnDate}`)
        .then(res=>res.json())
        .then((result)=>{
            setFlight(result);
          
        }
        )   
    }
    else if(!(flight.origin==='') && !(flight.destination==='') &&
        !(travelDate==='')){
            
            fetch(`http://localhost:8080/api/v1/flights/search/Direct?origin=${flight.origin}&&destination=${flight.destination}&&travelDate=${flight.travelDate}`)
        .then(res=>res.json())
        .then((result)=>{
            setFlight(result);
          
        }
        ) 

    }
    else if (!(flight.origin==='') && !(flight.destination==='') &&!(flight.cabinClass==='')){
        
        fetch(`http://localhost:8080/api/v1/flights/search/Cabin?origin=${flight.origin}&&destination=${flight.destination}&&cabinClass=${flight.cabinClass}`)
        .then(res=>res.json())
        .then((result)=>{
            setFlight(result);
          
        }
        ) 
    }
    else if (!(flight.origin==='') && !(flight.destination==='')){
        
        fetch(`http://localhost:8080/api/v1/flights/search/OriginDest?origin=${flight.origin}&&destination=${flight.destination}`)
        .then(res=>res.json())
        .then((result)=>{
            setFlight(result);
          
        }
        ) 
    }
    
    else{
        
        fetch(`http://localhost:8080/api/v1/flights`)
        .then(res=>res.json())
        .then((result)=>{
            setFlight(result);
          
        }
        ) 
    }

    
        
}



    return (
        <div className="Container-fluid text-center">
            <h2>Book a flight</h2>
            <p>
            Search for  flights and book online. See our routes and schedules,
             and discover more about the experience you can look forward to on board.
            </p>
            <div className="container">
                <div className="row">
                <div className="col-3">
                <label htmlFor="origin" className="form-label">Departing Airport</label>
            <input type="text" className="form-control" id="origin" name="origin" value={origin} 
     onChange={(e)=>setOrigin(e.target.value)}/>
            
                </div>
                <div className="col-3">
                <label htmlFor="destination" className="form-label">Arriving Airport</label>
            <input type="text" className="form-control" id="destination" name="destination" value={destination} 
     onChange={(e)=>setDestination(e.target.value)} />
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
                <label htmlFor="numberOfPassengers" className="form-label">Passengers</label>
            <input type="number" className="form-control" id="numberOfPassengers" name="numberOfPassengers" 
            value={numberOfPassengers} 
            onChange={(e)=>setNumberOfPassengers(e.target.value)}/>
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
                    
                    <button type="submit" onClick={()=>searchForFlight()} className="btn btn-primary">Search</button>
                    </div>
                
                </div>
                </div>

            </div>

        </div>
        

    )
}
export default index