package com.soa.travelagency.booking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "api/v2/book-flight")
public class BookFlightController {
    private final BookFlightService bookFlightService;
    @Autowired
    public BookFlightController(BookFlightService bookFlightService){
        this.bookFlightService=bookFlightService;
    }
    @GetMapping(path = "api/v2/book-flight")
    public List<BookFlight> getBookedFlights(){
       return bookFlightService.getBookedFlights();
    }

    @PostMapping
    public void createBookedFlight(@RequestBody BookFlight bookFlight){
        bookFlightService.createBookedFlight(bookFlight);
    }

    @DeleteMapping("{bookFlightId}")
    public void deleteBookedFlight(@PathVariable("bookFlightId") long bookFlightId ){
    bookFlightService.deleteBookedFlight(bookFlightId);
    }

    @PutMapping("{bookFlightId}")
    public void updateBookedFlight(@PathVariable("bookFlightId") long bookFlightId,
                                   @RequestParam(required = false) String origin,
                                   @RequestParam(required = false) String destination,
                                   @RequestParam(required = false) LocalDate travelDate,
                                   @RequestParam(required = false) LocalDate returnDate,
                                   @RequestParam(required = false) String cabinClass,
                                   @RequestParam(required = false) String name,
                                   @RequestParam(required = false) String phone_number,
                                   @RequestParam(required = false) String email,
                                   @RequestParam(required = false) Double cost,
                                   @RequestParam(required = false) LocalDate dob,
                                   @RequestParam(required = false) Integer number_of_passengers){
    bookFlightService.updateBookedFlight(bookFlightId,origin,destination,travelDate,returnDate,
            cabinClass,name,phone_number,email,cost,dob,number_of_passengers);

    }

}
