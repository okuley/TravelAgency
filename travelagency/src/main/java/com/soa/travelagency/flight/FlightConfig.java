package com.soa.travelagency.flight;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class FlightConfig {
@Bean
    CommandLineRunner commandLineRunner(FlightRepository repository){
    return args ->{
        Flight flight1= new Flight(
                "LHR","ACC", LocalDate.of(2024,2,15) , LocalDate.of(2024,2,16),
                "ECONOMY","USD",150,150,"EMIRATES",600);
        Flight flight2= new Flight(
                "LHR","JFK", LocalDate.of(2024,2,17) , LocalDate.of(2024,2,20),
                "ECONOMY","USD",150,150,"EMIRATES",500);
        Flight flight3= new Flight(
                "LHR","JFK", LocalDate.of(2024,2,17) , LocalDate.of(2024,2,20),
                "PREMIUM ECONOMY","USD",150,150,"EMIRATES",750);


        repository.saveAll(
                List.of(flight1, flight2, flight3)
        );
    };
    }
}
