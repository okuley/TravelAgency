package com.soa.travelagency.flight;

import com.soa.travelagency.booking.BookFlight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path="api/v1/flights")
public class FlightController {

    private final FlightService flightServiceService;
@Autowired
    public FlightController(FlightService flightServiceService){
        this.flightServiceService=flightServiceService;
    }

    @RequestMapping
    public List<Flight> getFlights() {

        return flightServiceService.getFlights();

    }
    @GetMapping(path = "/search")
    public List<Flight> getSearch(@RequestParam (required = false)  String origin,
                                  @RequestParam (required = false) String destination,
                                  @RequestParam(required = false) LocalDate travelDate,
                                  @RequestParam(required = false) LocalDate returnDate,
                                  @RequestParam(required = false) String cabinClass){

    return flightServiceService.getSearch(origin,destination,travelDate,returnDate,cabinClass);
    }

    @GetMapping(path = "/search/Return")
    public List<Flight> getSearchReturn(@RequestParam (required = false)  String origin,
                                  @RequestParam (required = false) String destination,
                                  @RequestParam(required = false) LocalDate travelDate,
                                  @RequestParam(required = false) LocalDate returnDate){

        return flightServiceService.getSearchReturn(origin,destination,travelDate,returnDate);
    }
    @GetMapping(path = "/search/Direct")
    public List<Flight> getSearchDirect(@RequestParam (required = false)  String origin,
                                  @RequestParam (required = false) String destination,
                                  @RequestParam(required = false) LocalDate travelDate){

        return flightServiceService.getSearchDirect(origin,destination,travelDate);
    }
    @GetMapping(path = "/search/OriginDest")
    public List<Flight> getSearchOriginDest(@RequestParam (required = false)  String origin,
                                  @RequestParam (required = false) String destination) {

        return flightServiceService.getSearchOriginDest(origin, destination);
    }
    @GetMapping(path = "/search/Cabin")
        public List<Flight> getSearchCabin(@RequestParam (required = false)  String origin,
                                    @RequestParam (required = false) String destination,
                                    @RequestParam(required = false) String cabinClass){

            return flightServiceService.getSearchCabin(origin,destination,cabinClass);
    }

    public  void   getAvailableSeats(){
     flightServiceService.getAvailableSeats();

    }

    @PostMapping
    public String addFlight(@RequestBody Flight flight){
        flightServiceService.addFlight(flight);
        return "Flight has been added successfully";
    }
    @DeleteMapping("{flightId}")
    public String deleteflight(@PathVariable("flightId") long flightId ){
        flightServiceService.deleteflight(flightId);
        return "Flight with id "+flightId+" has been deleted";
    }

   /* @PutMapping("{flightId}")
    public void updateFlight(@PathVariable("flightId") long flightId,
                                   @RequestParam(required = false) String origin,
                                   @RequestParam(required = false) String destination,
                                   @RequestParam(required = false) LocalDate travelDate,
                                   @RequestParam(required = false) LocalDate returnDate,
                                   @RequestParam(required = false) String cabinClass,
                                   @RequestParam(required = false) Double price,
                                   @RequestParam(required = false) Integer numberOfSeats,
                                   @RequestParam(required = false) Integer numberOfSeatsAvail
                                   ){
        flightServiceService.updateflight(flightId,origin,destination,travelDate,returnDate,
                cabinClass,price,numberOfSeats,numberOfSeatsAvail);

    }*/

    @PutMapping("{flightId}")
    public String updateFlight(@PathVariable("flightId") long flightId,
                             @RequestParam(required = false) String origin,
                             @RequestParam(required = false) String destination,
                               @RequestParam(required = false) LocalDate travelDate,
                               @RequestParam(required = false) LocalDate returnDate,
                               @RequestParam(required = false) String cabinClass,
                               @RequestParam(required = false) Double price

    ){
        flightServiceService.updateflight(flightId,origin,destination,travelDate,returnDate,cabinClass,price);
        return "Flight with id "+flightId+" has been update";
    }




}
