package com.soa.travelagency.booking;

import com.soa.travelagency.flight.Flight;
import com.soa.travelagency.flight.FlightRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class BookFlightConfig {
    @Bean
    CommandLineRunner commandLineRunner1(BookFlightRepository repository){
        return args ->{
            BookFlight bookFlight1= new BookFlight(
                    "London","Accra", LocalDate.of(2024,2,15) , LocalDate.of(2024,2,16),
                    "ECONOMY","Emma","07442853625","baff@gmail.com",600.0,
                    LocalDate.of(1991,12,15),3,"GBP",10);
            BookFlight bookFlight2= new BookFlight(
                    "London","Lagos", LocalDate.of(2024,2,15) , LocalDate.of(2024,2,16),
                    "ECONOMY","Emma","07442853625","baff@gmail.com",500.0,
                    LocalDate.of(1991,12,15),2,"GBP",20);
            BookFlight bookFlight3= new BookFlight(
                    "Paris","Cairo", LocalDate.of(2024,2,15) , LocalDate.of(2024,2,16),
                    "ECONOMY","Emma","07442853625","baff@gmail.com",500.0,
                    LocalDate.of(1991,12,15),1,"GBP",30);



            repository.saveAll(
                    List.of(bookFlight1, bookFlight2, bookFlight3)
            );
        };
    }
}
