package com.soa.travelagency.booking;

import jakarta.persistence.*;

import java.time.LocalDate;
@Entity
@Table
public class BookFlight {
@Id
@SequenceGenerator(
        name="book_flight_sequence",
        sequenceName="book_flight_sequence",
        allocationSize =1
)
@GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator="book_flight_sequence"
)
    private  long id;
    private String origin;
    private  String destination;

    private LocalDate travelDate;

    private LocalDate returnDate;

    private String cabinClass;
    private String name;
    private String phone_number;
    private String email;
    private Double cost;
    private LocalDate dob;


    private Integer number_of_passengers;

    public BookFlight(long id, String origin, String destination, LocalDate travelDate, LocalDate returnDate, String cabinClass,
                      String name, String phone_number, String email, Double cost,LocalDate dob, Integer number_of_passengers) {
        this.id = id;
        this.origin = origin;
        this.destination = destination;
        this.travelDate = travelDate;
        this.returnDate = returnDate;
        this.cabinClass = cabinClass;
        this.name = name;
        this.phone_number = phone_number;
        this.email = email;
        this.cost = cost;
        this.dob=dob;
        this.number_of_passengers=number_of_passengers;
    }

    public BookFlight(String origin, String destination, LocalDate travelDate, LocalDate returnDate, String cabinClass,
                      String name, String phone_number, String email, Double cost,LocalDate dob, Integer number_of_passengers) {
        this.origin = origin;
        this.destination = destination;
        this.travelDate = travelDate;
        this.returnDate = returnDate;
        this.cabinClass = cabinClass;
        this.name = name;
        this.phone_number = phone_number;
        this.email = email;
        this.cost = cost;
        this.dob=dob;
        this.number_of_passengers=number_of_passengers;
    }

    public BookFlight() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public LocalDate getTravelDate() {
        return travelDate;
    }

    public void setTravelDate(LocalDate travelDate) {
        this.travelDate = travelDate;
    }

    public LocalDate getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
    }

    public String getCabinClass() {
        return cabinClass;
    }

    public void setCabinClass(String cabinClass) {
        this.cabinClass = cabinClass;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Double getCost() {
        return cost;
    }

    public void setCost(Double cost) {
        this.cost = cost;
    }
    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public Integer getNumber_of_passengers() {
        return number_of_passengers;
    }

    public void setNumber_of_passengers(Integer number_of_passengers) {
        this.number_of_passengers = number_of_passengers;
    }
}
