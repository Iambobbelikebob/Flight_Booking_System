package com.flightBook.Flight_Booking_Service.Controller;

import java.util.Arrays;
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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.flightBook.Flight_Booking_Service.Repository.BookFlightRepository;
import com.flightBook.Flight_Booking_Service.models.BookFlight;

@RestController
@CrossOrigin("*")
public class BookingController {
	
	@Autowired
	private BookFlightRepository bookRepository;
	
	@Autowired
	private RestTemplate restTemplate;
	
	 
	@GetMapping("/AllTickets")
	public List<BookFlight> getAllTicket() {
		return bookRepository.findAll();
	}
	
	@GetMapping("/searchflights")
	public List<Object> getsearchtrainDetails() {
	Object[] objects = restTemplate.getForObject("http://Admin/searchflights", Object[].class);
	return Arrays.asList(objects);
	}
	
	@GetMapping("/AllTickets/{id}")
	public Optional<BookFlight> getTicket(@PathVariable String id){
		return bookRepository.findById(id);
	}
	
	
	@PostMapping("/addTicket")
	public String saveTicket(@RequestBody BookFlight book) {
		bookRepository.save(book);
		return "Added Ticket with id:"+book.getTicket_id();
	}
	
	
//	@PutMapping("/update/{ticket_id}")
//	public BookFlight updateTicket(@PathVariable("ticket_id") String ticket_id	,@RequestBody BookFlight Ticket ) {
//		Ticket.setTicket_id(ticket_id);
//	    bookRepository.save(Ticket);
//		return Ticket;
//	}
//	
//	@DeleteMapping("/delete/{ticket_id}")
//	public String deleteTicket(@PathVariable String ticket_id) {
//		bookRepository.deleteById(ticket_id);
//		return "Ticket deleted by id:"+ticket_id;
//	}
	@PutMapping("/update/{id}")
	public BookFlight updateTicket(@PathVariable("id") String id,@RequestBody BookFlight Ticket ) {
	//Ticket.setTicket_id(id);
	bookRepository.save(Ticket);
	return Ticket;
	}

	@DeleteMapping("/delete/{id}")
	public String deleteTicket(@PathVariable String id) {
	bookRepository.deleteById(id);
	return "Ticket deleted by id:"+id;
	}
	
	

}
