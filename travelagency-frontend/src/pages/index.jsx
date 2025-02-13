import { useState,useEffect } from "react";



function index(){
const [origin,setOrigin]=useState("");
const [destination,setDestination]=useState("");
const [travelDate,setTravelDate]=useState("");
const [returnDate,setReturnDate]=useState("");
const [numberOfPassengers,setNumberOfPassengers]=useState("");
const [cabinClass,setCabinClass]=useState("");
const [flights,setFlights]=useState([]);
const [newOrigin,setNewOrigin]=useState("");
const [newDestination,setNewDestination]=useState("");
const [newTravelDate,setNewTravelDate]=useState("");
const [newReturnDate,setNewReturnDate]=useState("");
const [newNumberOfPassengers,setNewNumberOfPassengers]=useState("");
const [newCabinClass,setNewCabinClass]=useState("");
const [newflight,setNewFlight]=useState([]);
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [dob,setDob]=useState("");
const [currency,setCurrency]=useState("");
const [price,setPrice]=useState("");
const [phoneNumber,setPhoneNumber]=useState("");
const [fromCur,setFromCur]=useState("")
const [toCur,setToCur]=useState("")
const [exchangeRate,setExchangeRate]=useState([])
const [weathers,setWeathers]=useState([])

const [weath,setWeath]=useState("")
const [weathMain,setWeathMain]=useState("")
const [weathDescription,setWeathDescription]=useState("")
const [main,setMain]=useState("")
const [temp,setTemp]=useState("")
const [feelsLike,setFeelsLike]=useState("")
const [pressure,setPressure]=useState("")
const [tempMin,setTempMin]=useState("")
const [tempMax,setTempMax]=useState("")
const [humidity,setHumidity]=useState("")
const [wind,setWind]=useState("")
const [windSpeed,setWindSpeed]=useState("")


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
            setFlights(result);
          
        }
        ).then(fetch(`http://api.openweathermap.org/data/2.5/weather?q=${destination}&units=metric&APPID=c40156fe6421ae660d4f4f6a89bfea86`)
        .then(res=>res.json())
        .then((result)=>{
            setWeathers(result);
          
        }
        ))

    }
    else if(!(flight.origin==='') && !(flight.destination==='') &&
        !(flight.travelDate==='')&&!(flight.returnDate==='')){
        
       fetch(`http://localhost:8080/api/v1/flights/search/Return?origin=${flight.origin}&&destination=${flight.destination}&&travelDate=${flight.travelDate}&&returnDate=${flight.returnDate}`)
        .then(res=>res.json())
        .then((result)=>{
            setFlights(result);
          
        }
        ).then(fetch(`http://api.openweathermap.org/data/2.5/weather?q=${destination}&units=metric&APPID=c40156fe6421ae660d4f4f6a89bfea86`)
        .then(res=>res.json())
        .then((result)=>{
            setWeathers(result);
          
        }
        ))   
    }
    else if(!(flight.origin==='') && !(flight.destination==='') &&
        !(travelDate==='')){
            
            fetch(`http://localhost:8080/api/v1/flights/search/Direct?origin=${flight.origin}&&destination=${flight.destination}&&travelDate=${flight.travelDate}`)
        .then(res=>res.json())
        .then((result)=>{
            setFlights(result);
          
        }
        ).then(fetch(`http://api.openweathermap.org/data/2.5/weather?q=${destination}&units=metric&APPID=c40156fe6421ae660d4f4f6a89bfea86`)
        .then(res=>res.json())
        .then((result)=>{
            setWeathers(result);
          
        }
        )) 

    }
    else if (!(flight.origin==='') && !(flight.destination==='') &&!(flight.cabinClass==='')){
        
        fetch(`http://localhost:8080/api/v1/flights/search/Cabin?origin=${flight.origin}&&destination=${flight.destination}&&cabinClass=${flight.cabinClass}`)
        .then(res=>res.json())
        .then((result)=>{
            setFlights(result);
          
        }
        ).then(fetch(`http://api.openweathermap.org/data/2.5/weather?q=${destination}&units=metric&APPID=c40156fe6421ae660d4f4f6a89bfea86`)
        .then(res=>res.json())
        .then((result)=>{
            setWeathers(result);
          
        }
        )) 
    }
    else if (!(flight.origin==='') && !(flight.destination==='')){
        
        fetch(`http://localhost:8080/api/v1/flights/search/OriginDest?origin=${flight.origin}&&destination=${flight.destination}`)
        .then(res=>res.json())
        .then((result)=>{
            setFlights(result);
          
        }
        ).then(fetch(`http://api.openweathermap.org/data/2.5/weather?q=${destination}&units=metric&APPID=c40156fe6421ae660d4f4f6a89bfea86`)
        .then(res=>res.json())
        .then((result)=>{
            setWeathers(result);

        }
        )) 
    }
    
    else{
        
        fetch(`http://localhost:8080/api/v1/flights`)
        .then(res=>res.json())
        .then((result)=>{
            setFlights(result);
          
        }
        ).then(
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&APPID=c40156fe6421ae660d4f4f6a89bfea86`)
    .then(res=>res.json())
    .then((result)=>{
        setWeathers(result)
        console.log(weathers)

       
        
        
    }) 
        ) 
        
    }

     let weather1=weathers
 setWeathMain(weather1.weather[0].main)
 console.log(weathMain)
 setWeathDescription(weather1.weather[0].description)
 console.log(weathDescription)
 setTemp(weather1.main.temp)
 setFeelsLike(weather1.main.feels_like)
 setPressure(weather1.main.pressure)
 setTempMin(weather1.main.temp_min)
 setTempMax(weather1.main.temp_max)
 setHumidity(weather1.main.humidity)
 setWindSpeed(weather1.wind.speed)

        
}

useEffect(()=>{
        const toCcy=toCur
        //let toCcy="GBP"
       // toCcy=toCur
        const fromCur="GBP"
        const ccy={fromCur,toCcy}
        console.log(ccy)
    fetch(`http://localhost:8080/api/v1/exchangeRate?fromCur=${fromCur}&toCur=${toCcy}`)
    .then(res=>res.json())
    .then((result)=>{
        setExchangeRate(result);
        console.log(exchangeRate)
       
    }
    )
    })


    useEffect(()=>{
        const toCcy=toCur
        //let toCcy="GBP"
       // toCcy=toCur
        const fromCur="GBP"
        const ccy={fromCur,toCcy}
        console.log(ccy)
    fetch(`http://localhost:8080/api/v1/exchangeRate?fromCur=${fromCur}&toCur=${toCcy}`)
    .then(res=>res.json())
    .then((result)=>{
        setExchangeRate(result);
        console.log(exchangeRate)
       
    }
    )
    })

function getFlight(id){
    const flight = flights.find((flight) => flight.id === id);
    
      setNewFlight(flight)
      console.log(flight)
     }

     function bookFlight(){
       // e.preventDefault();
        const flight=newflight
        console.log(flight)
       
        let origin=flight.origin
        let destination=flight.destination
        let travelDate=flight.travelDate
        let returnDate=flight.returnDate
        let numberOfPassengers=newNumberOfPassengers
        let cabinClass=flight.cabinClass
        let currency=flight.currency
        let price=flight.price
        let fligtId=flight.id
        const bookDetails= {fligtId,origin,destination,travelDate,returnDate,numberOfPassengers,
            cabinClass,name,email,phoneNumber,dob,currency,price};
        console.log(bookDetails);
        
        //alert("hello");
        fetch(`http://localhost:8080/api/v1/bookings`,
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookDetails)
});
//.then(res => res.json())
//.then(() => {
   // setBookedFlights(bookedFlights)
//})
//;
alert("Booking is reserved successfully");
}

function lowestPrice (){
    let min=0;
    const flightsPrices=flights;
    console.log(flightsPrices);
    let pricearray=[];
    for ( let i=0 ;i<flightsPrices.length;i++ ){
        
        pricearray.push(flightsPrices[i].price);
       
    }
    pricearray.sort();
    min=pricearray[0];

    console.log(min);
    return min;
    
} 

function exchangeRates(){
if (exchangeRate===0){

    return lowestPrice()
}
else{
    return lowestPrice()*exchangeRate
}

}

function weather(){
    
 let weather1=weathers
 setWeathMain(weather1.weather[0].main)
 console.log(weathMain)
 setWeathDescription(weather1.weather[0].description)
 console.log(weathDescription)

 

 set

 con

}

/* 
function destination(city){

    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${destination}&units=metric&APPID=c40156fe6421ae660d4f4f6a89bfea86`)
    .then(res=>res.json())
    .then((result)=>{
        setWeather(result);
      
    }
    ) 
} 
 */




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
                <label htmlFor="numberOfPassengers" className="form-label">Passengers</label>
            <input type="number" min="0" className="form-control" id="numberOfPassengers" name="numberOfPassengers" 
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
                    <div className="col-3">
                   
                    <label  className="form-label"> Search</label>
                <button type="submit" onClick={()=>searchForFlight()} className="btn btn-primary">Search</button>
                    
                
                </div>
                <div className="col-3">
                <label htmlFor="toCur" className="form-label">Ccy Converter</label>
                <select type="text" className="form-control" id="toCur" name="toCur" 
            value={toCur} 
            onChange={(e)=>setToCur(e.target.value)}>
             
            <option value='GBP' >GBP</option>
            <option value='USD'>USD</option>
            <option  value='EUR'>EUR</option>
            <option  value='INR'>INR</option>
            <option  value='AED'>AED</option>
            <option value='ZAR'>ZAR</option>
            <option value='RUB'>RUB</option>
            <option value='JPY'>JPY</option>
            <option value='CHF'>CHF</option>
            <option value='CAD'>CAD</option>
            <option value='CNY'>CNY</option>
            </select>
                </div>

                    </div>
                </div>
                
                </div>
                

            </div>
            <br/>

        <div className="container-fluid">
            <div className="card">
                <div className="card-body">
                    <p>
                        The lowest price is GBP &nbsp;{lowestPrice()}  &nbsp; (approx. {toCur} &nbsp; {exchangeRates()}) 
                    </p>
                    <p>
                    This price is the lowest available price combination for your selected dates. Look for the lowest price indicator in the results below to get this price. All prices below include airfare, taxes, fees and carrier-imposed charges for 1 passenger (1 adult)  
                    </p>
                </div>
            </div>

        </div>

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
            <td><button type="button" className="btn btn-warning m-3" data-toggle="modal" data-target="#modal1" onClick={()=>getFlight(flight.id)} >Book</button>
            <div className="modal" id="modal1"  role="dialog" aria-labelledby="modallabel1" aria-hidden= "true">
            <div className="row justify-content-center">
              <div className="col-md-8">
      <div className="modal-content" >
       <h2 className="modal-header">Book Flight</h2> 
       <form  className="">
       <div className="row">
        <div className="col-md-4">
        <label htmlFor="newOrigin" className="form-label">Departing Airport</label>
    <input type="text" className="form-control" id="newOrigin" name="newOrigin" value={newflight.origin } 
     onChange={(e)=>setNewOrigin(e.target.value)}/>
        </div>
        <div className="col-md-4"><label htmlFor="newDestination" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="newDestination" name="newDestination" value={newflight.destination  } 
    onChange={(e)=>setNewDestination(e.target.value)} />
    </div>
     
    </div>
  <div className="row">
  <div className="col-md-4"><label htmlFor="newTravelDate" className="form-label">Departing</label>
             <input type="date" className="form-control" id="newTravelDate" name="newTravelDate"  
            value={newflight.travelDate  } 
            onChange={(e)=>setNewTravelDate(e.target.value)} />
            </div>
    <div  className="col-md-4">
    <label htmlFor="newReturnDate" className="form-label">Returning</label>
             <input type="date" className="form-control" id="newReturnDate" name="newReturnDate"  
            value={newflight.returnDate  } 
            onChange={(e)=>setNewReturnDate(e.target.value)} />
    </div>
  </div>
  <div className="row">
  <div className="col-md-4">
  <label htmlFor="newNumberOfPassengers" className="form-label">Passengers</label>
            <input type="number" min="0" className="form-control" id="newNumberOfPassengers" name="newNumberOfPassengers" 
            value={flight.numberOfPassengers } 
            onChange={(e)=>setNewNumberOfPassengers(e.target.value)}/>
  </div>
  <div className="col-md-4">
  <label htmlFor="newCabinClass" className="form-label">Class</label>
            <input type="text" className="form-control" id="newCabinClass" name="newCabinClass" 
            value={newflight.cabinClass  } 
            onChange={(e)=>setNewCabinClass(e.target.value)}/>

  </div>
  </div>
  <div className="row">
    <div className="col-md-4">
    <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={name} 
     onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div className="col-md-4">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email"  className="form-control" id="email" name="email" value={email} 
     onChange={(e)=>setEmail(e.target.value)}  />
    </div>
  </div>
  <div className="row">
 <div className="col-md-4">
 <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
    <input type="text"  className="form-control" id="phoneNumber" name="phoneNumber" value={phoneNumber} 
     onChange={(e)=>setPhoneNumber(e.target.value)}  />
 </div>
 <div className="col-md-4">
 <label htmlFor="dob" className="form-label">Date of Birth</label>
             <input type="date" className="form-control" id="dob" name="dob"  
            value={dob} 
            onChange={(e)=>setDob(e.target.value)} />
 </div>

  </div>
  <br/>
   <div className="row">
<div className="col-md-8">
    <p style={{fontWeight:"bold"}}>
        Price: {newflight.currency} {newflight.price}
    </p>
</div>


  </div> 
 
  
  <br/>
  <div className="d-flex justify-content-center modal-footer">
  <button type="submit"  className="btn btn-primary" onClick={bookFlight} >Book Flight</button>
  </div>
 

</form>

    </div>

      </div>
      </div>
      </div>
            </td>

          </tr>

          
          )
          
          )}
        </tbody>
         </table>
          <br/>
          

          <h3> Weather condition in {weathers.name} now</h3>
        
           <div style={{backgroundImage:`url("./weather_bg.jpeg")`}} >

      
       <div className="row">
        <div className="col-4">
        <h4> Visibility : {weathers.visibility} </h4>
       <h4> Weather: {weathMain} </h4>
       <h4> Description: {weathDescription} </h4>
       <h4> Feels Like: {feelsLike}  &deg;</h4>
       <h4> Tempeature: {temp} &deg; </h4>
        </div>
        <div className="col-4">
        <h4> Min Tempeature: {tempMin} &deg; </h4>
       <h4> Max Tempeature: {tempMax}  &deg;</h4>
       <h4> Pressure: {pressure} Pa</h4>
       <h4> Humidity: {humidity} </h4>
       <h4> Wind Speed: {windSpeed} mph</h4>
        </div>
       </div>
       
       
       
       <div>
        
         
       
       </div> 
       
     </div>
            
            <br/>
                 <div >
                <h1 className="text-center"> Driving Direction Map</h1>
                </div>  


            
           
       
      </div>
       
        </div>
        
        

    )
}
export default index