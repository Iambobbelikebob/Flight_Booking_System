package com.example.demo.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.demo.model.Flights;
import com.example.demo.repository.FlightsRepository;
import com.example.demo.service.FlightService;


@RestController
@RequestMapping("/flight")
public class MainController {
	@Autowired
	private FlightsRepository flightsrepository;
	@Autowired
	private RestTemplate restTemplate;
	@Autowired
	private FlightService ts;

		 
		 
		 
		
		  @RequestMapping(method = RequestMethod.POST, value="/addflight")
		  public void addFlight(@RequestBody Flights f) { 
			  ts.addFlight(f); 
			  }
		
		
		  @GetMapping("{f_id}") public Optional<Flights> getFlight(@PathVariable String
		  f_id) { return flightsrepository.findById(f_id); }
		
		 
		 
	@DeleteMapping("/delete/{f_id}")
	public String deleteFlight(@PathVariable String f_id) {
		flightsrepository.deleteById(f_id);
		return "Delete the flight with the specfied id : " + f_id;
	}

	@PutMapping("/update/{f_id}")
	public Flights updateFlight(@PathVariable("f_id") String f_id, @RequestBody Flights f) {
		f.setF_id(f_id);
		flightsrepository.save(f);
		return f;

	}
}


