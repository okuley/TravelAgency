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
    private String phoneNumber;
    private String email;
    private Double price;
    private LocalDate dob;

    private String currency;



    private Integer numberOfPassengers;

    public BookFlight(long id, String origin, String destination, LocalDate travelDate, LocalDate returnDate, String cabinClass,
                      String name, String phoneNumber, String email, Double price,LocalDate dob, Integer numberOfPassengers,String currency) {
        this.id = id;
        this.origin = origin;
        this.destination = destination;
        this.travelDate = travelDate;
        this.returnDate = returnDate;
        this.cabinClass = cabinClass;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.price = price;
        this.dob=dob;
        this.numberOfPassengers=numberOfPassengers;
        this.currency=currency;
    }

    public BookFlight(String origin, String destination, LocalDate travelDate, LocalDate returnDate, String cabinClass,
                      String name, String phoneNumber, String email, Double price,LocalDate dob, Integer numberOfPassengers,
                      String currency) {
        this.origin = origin;
        this.destination = destination;
        this.travelDate = travelDate;
        this.returnDate = returnDate;
        this.cabinClass = cabinClass;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.price = price;
        this.dob=dob;
        this.numberOfPassengers=numberOfPassengers;
        this.currency=currency;
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

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public Integer getNumberOfPassengers() {
        return numberOfPassengers;
    }

    public void setNumberOfPassengers(Integer numberOfPassengers) {
        this.numberOfPassengers = numberOfPassengers;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }
}
