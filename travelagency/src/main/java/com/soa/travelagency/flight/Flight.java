package com.soa.travelagency.flight;

import jakarta.persistence.*;

import java.util.Date;
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

 private Date travelDate;

 private Date returnDate;

 private int number_of_adults;
 private int number_of_children;
 private int number_of_infants;

 private String cabinClass;

 private String currency;

 public Flight(long id, String origin, String destination, Date travelDate, Date returnDate, int number_of_adults, int number_of_children, int number_of_infants, String cabinClass, String currency) {
  this.id = id;
  this.origin = origin;
  this.destination = destination;
  this.travelDate = travelDate;
  this.returnDate = returnDate;
  this.number_of_adults = number_of_adults;
  this.number_of_children = number_of_children;
  this.number_of_infants = number_of_infants;
  this.cabinClass = cabinClass;
  this.currency = currency;
 }

 public Flight(String origin, String destination, Date travelDate, Date returnDate, int number_of_adults, int number_of_children, int number_of_infants, String cabinClass, String currency) {
  this.origin = origin;
  this.destination = destination;
  this.travelDate = travelDate;
  this.returnDate = returnDate;
  this.number_of_adults = number_of_adults;
  this.number_of_children = number_of_children;
  this.number_of_infants = number_of_infants;
  this.cabinClass = cabinClass;
  this.currency = currency;
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

 public Date getTravelDate() {
  return travelDate;
 }

 public void setTravelDate(Date travelDate) {
  this.travelDate = travelDate;
 }

 public Date getReturnDate() {
  return returnDate;
 }

 public void setReturnDate(Date returnDate) {
  this.returnDate = returnDate;
 }

 public int getNumber_of_adults() {
  return number_of_adults;
 }

 public void setNumber_of_adults(int number_of_adults) {
  this.number_of_adults = number_of_adults;
 }

 public int getNumber_of_children() {
  return number_of_children;
 }

 public void setNumber_of_children(int number_of_children) {
  this.number_of_children = number_of_children;
 }

 public int getNumber_of_infants() {
  return number_of_infants;
 }

 public void setNumber_of_infants(int number_of_infants) {
  this.number_of_infants = number_of_infants;
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

 @Override
 public String toString() {
  return "Flight{" +
          "id=" + id +
          ", origin='" + origin + '\'' +
          ", destination='" + destination + '\'' +
          ", travelDate=" + travelDate +
          ", returnDate=" + returnDate +
          ", number_of_adults=" + number_of_adults +
          ", number_of_children=" + number_of_children +
          ", number_of_infants=" + number_of_infants +
          ", cabinClass='" + cabinClass + '\'' +
          ", currency='" + currency + '\'' +
          '}';
 }
}
