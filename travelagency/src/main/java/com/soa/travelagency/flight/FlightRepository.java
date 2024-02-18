package com.soa.travelagency.flight;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;


@Repository
public interface FlightRepository extends JpaRepository<Flight, Long> {

    @Query(
            value = "SELECT * FROM flight u WHERE u.origin =:origin and u.destination=:destination " +
                    "and u.travel_date=:travelDate and u.return_date=:returnDate and u.cabin_class=:cabinClass",
            nativeQuery = true)
    List<Flight> search(@Param("origin") String origin, @Param("destination") String destination ,
                        @Param("travelDate")LocalDate travelDate,@Param("returnDate") LocalDate returnDate,
                        @Param("cabinClass") String cabinClass);

    @Query(
            value = "SELECT * FROM flight u WHERE u.origin =:origin and u.destination=:destination" +
                    " and u.travel_date=:travelDate and u.return_date=:returnDate ",
            nativeQuery = true)
    List<Flight> getSearchReturn(@Param("origin") String origin, @Param("destination") String destination ,
                        @Param("travelDate")LocalDate travelDate,@Param("returnDate") LocalDate returnDate);

    @Query(
            value = "SELECT * FROM flight u WHERE u.origin =:origin and u.destination=:destination" +
                    " and u.travel_date=:travelDate ",
            nativeQuery = true)
    List<Flight> getSearchDirect(@Param("origin") String origin, @Param("destination") String destination ,
                        @Param("travelDate")LocalDate travelDate);

    @Query(
            value = "SELECT * FROM flight u WHERE u.origin =:origin and u.destination=:destination",
            nativeQuery = true)
    List<Flight> getSearchOriginDest(@Param("origin") String origin, @Param("destination") String destination );

    @Query(
            value = "SELECT * FROM flight u WHERE u.origin =:origin and u.destination=:destination" +
                    " and u.cabin_class=:cabinClass",
            nativeQuery = true)
    List<Flight> getSearchCabin(@Param("origin") String origin, @Param("destination") String destination,
                        @Param("cabinClass") String cabinClass);
}
