package com.flightBook.Flight_Booking_Service.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Flights")
public class Flights {
@Id
 private String f_id;
 private String f_name;
 private String origin;
 private String destination;
 
 public Flights()
 {
	 
 }

public Flights(String f_id, String f_name, String origin, String destination) {
	super();
	this.f_id = f_id;
	this.f_name = f_name;
	this.origin = origin;
	this.destination = destination;
}

public String getF_id() {
	return f_id;
}

public void setF_id(String f_id) {
	this.f_id = f_id;
}

public String getF_name() {
	return f_name;
}

public void setF_name(String f_name) {
	this.f_name = f_name;
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

@Override
public String toString() {
	return "Flights [f_id=" + f_id + ", f_name=" + f_name + ", origin=" + origin + ", destination=" + destination + "]";
}
 


}


