package com.jlmm.flights_backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.jlmm.flights_backend.services.AirportsServices;

import java.util.Date;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/flights/api/v1")
public class AirportsController {
	@Autowired
	private AirportsServices service;
	
	@GetMapping("/airport/{keyWord}")
	public ResponseEntity<Object> demo(@PathVariable(value = "keyWord", required = true) String keyWord) {
		return ResponseEntity.ok().body(keyWord);
//		HttpHeaders headers = new HttpHeaders();
//		String bearerToken = "vsNaFjzod0XNcPAtW0fVIBzypWNv";
//		headers.add("Authorization", "Bearer " + bearerToken);
//		String url = "https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT&keyword=" + keyWord + "&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=analytics.travelers.score&view=FULL";
//
//		ResponseEntity<String> response = restTemplate.exchange(
//			url,
//			HttpMethod.GET,
//			new HttpEntity<>(headers),
//			String.class
//		);
//		return ResponseEntity.ok().body(response.getBody());
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


