package com.soa.travelagency.flight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.util.List;

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

}
