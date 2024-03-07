package com.soa.travelagency.booking;

import com.soa.travelagency.flight.FlightRepository;
import com.soa.travelagency.flight.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.soa.travelagency.flight.FlightController;

import java.time.LocalDate;
import java.util.List;



@RestController
@CrossOrigin
@RequestMapping(path = "api/v1/bookings")
public class BookFlightController {

    private final BookFlightService bookFlightService;
    @Autowired
    public BookFlightController(BookFlightService bookFlightService){

        this.bookFlightService=bookFlightService;
    }
    @GetMapping
    public List<BookFlight> getBookedFlights(){

        return bookFlightService.getBookedFlights();
    }

    @PostMapping
    public String createBookedFlight(@RequestBody BookFlight bookFlight){
        bookFlightService.createBookedFlight(bookFlight);
        return "Flight has been book successfully";
    }

    @DeleteMapping("{bookFlightId}")
    public String deleteBookedFlight(@PathVariable("bookFlightId") long bookFlightId ){
        bookFlightService.deleteBookedFlight(bookFlightId);
        return "Booking with id "+bookFlightId+" has been deleted";
    }

    @PutMapping("{bookFlightId}")
    public String updateBookedFlight(@PathVariable("bookFlightId") long bookFlightId,
                                   @RequestParam(required = false) String origin,
                                   @RequestParam(required = false) String destination,
                                   @RequestParam(required = false) LocalDate travelDate,
                                   @RequestParam(required = false) LocalDate returnDate,
                                   @RequestParam(required = false) String cabinClass,
                                   @RequestParam(required = false) String name,
                                   @RequestParam(required = false) String phoneNumber,
                                   @RequestParam(required = false) String email,
                                   @RequestParam(required = false) Double price,
                                   @RequestParam(required = false) LocalDate dob){
    bookFlightService.updateBookedFlight(bookFlightId,origin,destination,travelDate,returnDate,
            cabinClass,name,phoneNumber,email,price,dob);
 return "Booking with ID " + bookFlightId + " was deleted successfully";
    }

}
