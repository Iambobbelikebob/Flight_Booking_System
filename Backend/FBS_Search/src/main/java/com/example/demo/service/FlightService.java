package com.example.demo.service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Flights;
import com.example.demo.repository.FlightsRepository;

@Service
public class FlightService {
	@Autowired
	private FlightsRepository flightsrepository;
	
	public Flights addFlight (Flights f) {
		return flightsrepository.save(f);
		
	}

	
	  /*public List<Flights> getContact() { List<Flights> f =
	  flightsrepository.findAll(); System.out.println("Getting data from DB : " +
	  t); return t;
	 
	}*/
	public Optional<Flights> getFlightbyId(String f_id) {
		return flightsrepository.findById(f_id);
	}
	public void deleteFlight(Flights f) {
		flightsrepository.delete(f);
	}


	
	
	
	  //public List<Flights> getAllFlight() { // TODO Auto-generated method stub return
	  //List<Flights> f = new ArrayList<>(); flightsrepository.findAll()
	  //.forEach(f::add); return f; }
	 
	 //public Optional<Flights> getFlight(String f_id) {
		//return flightsrepository.findById(f_id); }
	 
}

