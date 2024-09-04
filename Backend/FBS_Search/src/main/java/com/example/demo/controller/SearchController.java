package com.example.demo.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Flights;
import com.example.demo.repository.FlightsRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class SearchController {
	@Autowired
	private FlightsRepository flightsrepository;
	 @GetMapping("/searchflights")
	    public List<Flights> getFlights(){
		return flightsrepository.findAll();
		
	}
	 @GetMapping("/searchflights/{f_id}")
	    public Optional<Flights> getFlights(@PathVariable String f_id){
		return flightsrepository.findById(f_id);
	}
}
