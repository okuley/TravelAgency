package com.soa.travelagency.flight;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table
public class Flight {
 @jakarta.persistence.Id
 @SequenceGenerator(
         name="flight_sequence",
         sequenceName="flight_sequence",
         allocationSize =1
 )
 @GeneratedValue(
         strategy = GenerationType.SEQUENCE,
         generator="flight_sequence"
 )
private long id;
 private String origin;
 private  String destination;

 private LocalDate travelDate;

 private LocalDate returnDate;

 private String cabinClass;

 private String currency;

 private int number_of_seats_avail;
 private int number_of_seats;

 private String serviceProvider;


 private  double price;



 public Flight(long id, String origin, String destination, LocalDate travelDate, LocalDate returnDate, String cabinClass,
               String currency, int number_of_seats_avail, int number_of_seats,
               String serviceProvider,double price) {
  this.id = id;
  this.origin = origin;
  this.destination = destination;
  this.travelDate = travelDate;
  this.returnDate = returnDate;
  this.cabinClass = cabinClass;
  this.currency = currency;
  this.number_of_seats_avail = number_of_seats_avail;
  this.number_of_seats = number_of_seats;
  this.serviceProvider=serviceProvider;
  this.price=price;
 }

 public Flight(String origin, String destination, LocalDate travelDate,
               LocalDate returnDate, String cabinClass, String currency,
               int number_of_seats_avail, int number_of_seats, String serviceProvider,double price) {
  this.origin = origin;
  this.destination = destination;
  this.travelDate = travelDate;
  this.returnDate = returnDate;
  this.cabinClass = cabinClass;
  this.currency = currency;
  this.number_of_seats_avail = number_of_seats_avail;
  this.number_of_seats = number_of_seats;
  this.serviceProvider=serviceProvider;
  this.price=price;
 }

 public Flight() {
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

 public String getCurrency() {
  return currency;
 }

 public void setCurrency(String currency) {
  this.currency = currency;
 }
 public int getNumber_of_seats_avail() {
  return number_of_seats_avail;
 }

 public void setNumber_of_seats_avail(int number_of_seats_avail) {
  this.number_of_seats_avail = number_of_seats_avail;
 }

 public int getNumber_of_seats() {
  return number_of_seats;
 }

 public void setNumber_of_seats(int number_of_seats) {
  this.number_of_seats = number_of_seats;
 }

 public String getServiceProvider() {
  return serviceProvider;
 }

 public void setServiceProvider(String serviceProvider) {
  this.serviceProvider = serviceProvider;
 }

 public double getPrice() {
  return price;
 }

 public void setPrice(double price) {
  this.price = price;
 }



}
