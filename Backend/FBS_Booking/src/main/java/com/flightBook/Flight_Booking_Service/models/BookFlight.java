package com.flightBook.Flight_Booking_Service.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Document(collection = "BookedTicket")
public class BookFlight {
	
	    @Id
        private String PNR;
		private String ticket_id;
		private String no_of_seats;
		private String origin;
		private String destination;
		private String time;
		
		public BookFlight()
		{
			
		}

		public BookFlight(String PNR, String ticket_id, String no_of_seats, String origin, String destination,
				String time) {
			super();
			PNR = PNR;
			this.ticket_id = ticket_id;
			this.no_of_seats = no_of_seats;
			this.origin = origin;
			this.destination = destination;
			this.time = time;
		}

		public String getPNR() {
			return PNR;
		}

		public void setPNR(String pNR) {
			PNR = PNR;
		}

		public String getTicket_id() {
			return ticket_id;
		}

		public void setTicket_id(String ticket_id) {
			this.ticket_id = ticket_id;
		}

		public String getNo_of_seats() {
			return no_of_seats;
		}

		public void setNo_of_seats(String no_of_seats) {
			this.no_of_seats = no_of_seats;
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

		public String getTime() {
			return time;
		}

		public void setTime(String time) {
			this.time = time;
		}

		
		
}
