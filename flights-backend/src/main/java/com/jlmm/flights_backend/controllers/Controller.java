package com.jlmm.flights_backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.jlmm.flights_backend.services.Service;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/flights/api/v1")
public class Controller {
	@Autowired
	private Service service;
	
	@GetMapping("/airport/{keyWord}")
	public ResponseEntity<Object> demo(@PathVariable(value = "keyWord", required = true) String keyWord) {
		return ResponseEntity.ok().body(keyWord);
	}

	@GetMapping("/airport/info/{keyWord}")
	public ResponseEntity<Object> getAirportInfo(@PathVariable (value = "keyWord", required = true) String keyWord){
		return ResponseEntity.ok().body(service.getAirportCodes(keyWord));
	}

	@GetMapping("/airport/flights")
	public ResponseEntity<Object> getAirportFlights(
			@RequestParam (value = "departureAirport", required = true) String departureAirport,
			@RequestParam (value = "arrivalAirport", required = true) String arrivalAirport,
			@RequestParam (value = "departureDate", required = true) String departureDate,
			@RequestParam (value = "returnDate", required = false) String returnDate,
			@RequestParam (value = "currency", required = true) String currency,
			@RequestParam (value = "numberOfAdults", required = true) Integer numberOfAdults,
			@RequestParam (value = "nonStop", required = true) Boolean nonStop){
		return ResponseEntity.ok().body(service.getFlights(
				departureAirport,
				arrivalAirport,
				departureDate,
				returnDate,
				currency,
				numberOfAdults,
				nonStop
		));
	}
}


