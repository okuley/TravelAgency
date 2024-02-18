package com.soa.travelagency.booking;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;


@Service
public class BookFlightService {
    private final BookFlightRepository bookFlightRepository;
    @Autowired
    public BookFlightService(BookFlightRepository bookFlightRepository){
        this.bookFlightRepository=bookFlightRepository;
    }
    public List<BookFlight> getBookedFlights(){
        return bookFlightRepository.findAll();
    }

    public String createBookedFlight(BookFlight bookFlight){

        bookFlightRepository.save(bookFlight);

        return "Flight has been book successfully";

    }

    public String deleteBookedFlight( Long bookFlightId){

        bookFlightRepository.deleteById(bookFlightId);
        return "Booking with id "+bookFlightId+" has been deleted";
    }
   @Transactional
    public void updateBookedFlight(long bookFlightId, String origin, String destination, LocalDate travelDate,
                                   LocalDate returnDate,String cabinClass,String name,
                                   String phoneNumber,String email,Double price,LocalDate dob,Integer numberOfPassengers){
        BookFlight bookFlight= bookFlightRepository.findById(bookFlightId).orElseThrow(()-> new IllegalStateException
                ("Booking with id" + bookFlightId + "does not exist"));

        if(origin !=null  && !Objects.equals(bookFlight.getOrigin(),origin)){
            bookFlight.setOrigin(origin);
        }
        if (destination !=null && !Objects.equals(bookFlight.getDestination(),destination)){
            bookFlight.setDestination(destination);
        }
        if(travelDate !=null && !Objects.equals(bookFlight.getTravelDate(),travelDate)){
            bookFlight.setTravelDate(travelDate);
        }
       if(returnDate !=null && !Objects.equals(bookFlight.getReturnDate(),returnDate)){
           bookFlight.setReturnDate(returnDate);
       }
       if(cabinClass !=null && !Objects.equals(bookFlight.getCabinClass(),cabinClass)){
         bookFlight.setCabinClass(cabinClass);
       }
       if(name !=null && !Objects.equals(bookFlight.getName(),name)){
           bookFlight.setName(name);
       }
       if(phoneNumber !=null && !Objects.equals(bookFlight.getPhoneNumber(),phoneNumber)){
           bookFlight.setPhoneNumber(phoneNumber);
       }
       if(email!=null && !email.isEmpty() && !Objects.equals(bookFlight.getEmail(),email)){
           bookFlight.setEmail(email);
       }
       if( price!=null && bookFlight.getPrice()!=price) {
           bookFlight.setPrice(price);
       }
       if(dob !=null && !Objects.equals(bookFlight.getDob(),dob)){
           bookFlight.setDob(dob);
       }

       if(numberOfPassengers !=null && bookFlight.getNumberOfPassengers()!=numberOfPassengers) {
           bookFlight.setNumberOfPassengers(numberOfPassengers);
       }
    }


}
