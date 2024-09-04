package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.demo.model.Flights;
import com.example.demo.repository.FlightsRepository;
import com.example.demo.service.FlightService;
import com.mongodb.connection.Stream;

@SpringBootTest
@RunWith(SpringRunner.class)
class FlightInformationApplicationTests {
	@Autowired
		FlightService flightservice;
	@MockBean
	FlightsRepository flightsrepository;


	public void saveFlightTest() {
		Flights flight = new Flights("877","Sonarpur Local","Sealdah","Sonarpur");
		when(flightsrepository.save(flight)).thenReturn(flight);
		assertEquals(flight, flightservice.addFlight(flight));

		}
	@Test
	public void deleteUserTest() {
		Flights flight = new Flights("12","Howrah local","Bandel","Howrah");
		flightservice.deleteFlight(flight);
		verify(flightsrepository, times(1)).delete(flight);
	}
	}




