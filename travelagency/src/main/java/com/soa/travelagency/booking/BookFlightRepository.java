package com.soa.travelagency.booking;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface BookFlightRepository extends JpaRepository<BookFlight,Long> {
}




