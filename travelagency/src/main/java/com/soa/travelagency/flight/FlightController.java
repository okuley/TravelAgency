package com.soa.travelagency.flight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path="api/v1/flight")
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

}
