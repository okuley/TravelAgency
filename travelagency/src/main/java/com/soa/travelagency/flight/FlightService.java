package com.soa.travelagency.flight;


import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Service
public class FlightService {
    private final FlightRepository flightRepository;
    @Autowired
    public FlightService(FlightRepository flightRepository){
        this.flightRepository=flightRepository;
    }

    public List<Flight> getFlights(){

        return flightRepository.findAll();
    }

    public List<Flight> getSearch(@RequestParam(required = false)  String origin,
                                  @RequestParam (required = false) String destination,
                                  @RequestParam(required = false) LocalDate travelDate,
                                  @RequestParam(required = false) LocalDate returnDate,
                                  @RequestParam(required = false) String cabinClass){
        return flightRepository.search(origin,destination,travelDate,returnDate,cabinClass);
    }

    public List<Flight> getSearchReturn(@RequestParam(required = false)  String origin,
                                  @RequestParam (required = false) String destination,
                                  @RequestParam(required = false) LocalDate travelDate,
                                  @RequestParam(required = false) LocalDate returnDate){
        return flightRepository.getSearchReturn(origin,destination,travelDate,returnDate);
    }

    public List<Flight> getSearchDirect(@RequestParam(required = false)  String origin,
                                  @RequestParam (required = false) String destination,
                                  @RequestParam(required = false) LocalDate travelDate){
        return flightRepository.getSearchDirect(origin,destination,travelDate);
    }

    public List<Flight> getSearchOriginDest(@RequestParam(required = false)  String origin,
                                  @RequestParam (required = false) String destination){
        return flightRepository.getSearchOriginDest(origin,destination);
    }

    public List<Flight> getSearchCabin(@RequestParam(required = false)  String origin,
                                  @RequestParam (required = false) String destination,
                                  @RequestParam(required = false) String cabinClass){
        return flightRepository.getSearchCabin(origin,destination,cabinClass);
    }
    @Transactional
    public void getAvailableSeats() {
        flightRepository.getAvailableSeats();

    }


    public String addFlight(Flight flight) {
        flightRepository.save(flight);
        return "Flight has been added successfully";
    }


    public String deleteflight(long flightId) {
        flightRepository.deleteById(flightId);
        return "Booking with id "+flightId+" has been deleted";
    }
    @Transactional
    public void updateflight(long flightId, String origin, 
                             String destination, LocalDate travelDate, 
                             LocalDate returnDate, String cabinClass, 
                             Double price, Integer numberOfSeats,
                             Integer numberOfSeatsAvail, String currency) {
        Flight flight= flightRepository.findById(flightId).orElseThrow(()-> new IllegalStateException
                ("Booking with id" + flightId + "does not exist"));

        if(origin !=null  && !Objects.equals(flight.getOrigin(),origin)){
            flight.setOrigin(origin);
        }
       /* if (!destination.isEmpty() && !Objects.equals(flight.getDestination(),destination)){
            flight.setDestination(destination);
        }
        if(travelDate !=null && !Objects.equals(flight.getTravelDate(),travelDate)){
            flight.setTravelDate(travelDate);
        }
        if(returnDate !=null && !Objects.equals(flight.getReturnDate(),returnDate)){
            flight.setReturnDate(returnDate);
        }
        if(!cabinClass.isEmpty() && !Objects.equals(flight.getCabinClass(),cabinClass)){
            flight.setCabinClass(cabinClass);
        }

*/

    
    }
}
