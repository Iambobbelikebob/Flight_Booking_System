package com.flightBook.Flight_Booking_Service.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.flightBook.Flight_Booking_Service.models.UserModel;



@Repository
public interface UserRepository extends MongoRepository<UserModel, String>{


	UserModel findByusername(String username);
	
}
