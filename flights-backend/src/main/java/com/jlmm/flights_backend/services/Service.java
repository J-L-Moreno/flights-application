package com.jlmm.flights_backend.services;

import java.util.*;

import com.jlmm.flights_backend.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

@org.springframework.stereotype.Service
public class Service {
	
	@Autowired
	private RestTemplate restTemplate;
	
	private String getAccessToken() {
		String clientId = "An74xJBnYc7V0m3v775jdfeT4XVKAETO";
		String clientSecret = "q1crunbvGs1BWR01";
		
		String requestBody = "grant_type=client_credentials&client_id=" + clientId + "&client_secret=" + clientSecret;
		
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.add("Content-Type", "application/x-www-form-urlencoded");
		httpHeaders.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
		
		HttpEntity<String> entity = new HttpEntity<>(requestBody, httpHeaders);
		
        String url = "https://test.api.amadeus.com/v1/security/oauth2/token";		
		ResponseEntity<AmadeusOAuth2Token> response =  restTemplate.exchange(url, HttpMethod.POST, entity, AmadeusOAuth2Token.class);

		return Objects.requireNonNull(response.getBody()).getAccess_token();
	}

	public List<Location> getAirportCodes(String keyWord){
		String accessToken = getAccessToken();
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.add("Authorization", "Bearer " + accessToken);

		String uri = "https://test.api.amadeus.com/v1/reference-data/locations?"
			+ "subType=AIRPORT"
			+ "&keyword=" + keyWord
			+ "&view=LIGHT"
			+ "&page[limit]=20";

		HttpEntity<String> entity = new HttpEntity<>(httpHeaders);

		try {
			ResponseEntity<LocationList> response = restTemplate.exchange(uri, HttpMethod.GET, entity, LocationList.class);

            return Objects.requireNonNull(response.getBody()).getData();
		} catch (Exception e){
			System.out.println(e.getMessage());
			return new ArrayList<>();
		}
	}

	Location getAirportByIataCode(String accessToken, String iataCode){
		wait(250);
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.add("Authorization", "Bearer " + accessToken);

		String uri = "https://test.api.amadeus.com/v1/reference-data/locations?"
				+ "subType=AIRPORT"
				+ "&keyword=" + iataCode
				+ "&view=LIGHT"
				+ "&page[limit]=1";

		HttpEntity<String> entity = new HttpEntity<>(httpHeaders);

		try {
			ResponseEntity<LocationList> response = restTemplate.exchange(uri, HttpMethod.GET, entity, LocationList.class);

			return Objects.requireNonNull(response.getBody()).getData().getFirst();
		} catch (Exception e){
			System.out.println(e.getMessage());
			return null;
		}
	}

	public Airline getAirline(String accessToken, String airlineCode){
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.add("Authorization", "Bearer " + accessToken);
		HttpEntity<String> entity = new HttpEntity<>(httpHeaders);

		String uri = "https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes=" + airlineCode;

		try{
			ResponseEntity<AirlineList> response = restTemplate.exchange(uri, HttpMethod.GET, entity, AirlineList.class);
			return Objects.requireNonNull(response.getBody()).getData().getFirst();
		} catch(Exception e){
			return new Airline();
		}
	}

	public List<FlightOffer> getFlights(
			String departureAirport,
			String arrivalAirport,
			String departureDate,
			String returnDate,
			String currency,
			Integer numberOfAdults,
			Boolean nonStop
	){
		try{
			String accessToken = getAccessToken();
			HttpHeaders httpHeaders = new HttpHeaders();
			httpHeaders.add("Authorization", "Bearer " + accessToken);

			String uri = "https://test.api.amadeus.com/v2/shopping/flight-offers?"
					+ "originLocationCode=" + departureAirport
					+ "&destinationLocationCode=" + arrivalAirport
					+ "&departureDate=" + departureDate
					+ "&adults=" + numberOfAdults
					+ "&nonStop=" + nonStop
					+ "&currencyCode=" + currency
					+ "&max=" + 250;

			if(returnDate != null) uri = uri +"&returnDate=" + returnDate;

			HttpEntity<String> entity = new HttpEntity<>(httpHeaders);

			ResponseEntity<FlightOfferList> response = restTemplate.exchange(uri, HttpMethod.GET, entity, FlightOfferList.class);

			List<FlightOffer> flights = response.getBody().getData();

			Map<String, Location> locationCache = new HashMap<>();
			Map<String, Airline> airlineCache = new HashMap<>();

			for (FlightOffer currentFlight : flights) {

				if(airlineCache.get(currentFlight.getValidatingAirlineCodes().getFirst()) != null){
					currentFlight.setAirline(
							airlineCache.get(currentFlight.getValidatingAirlineCodes().getFirst())
					);
				} else {
					Airline airline = getAirline(accessToken, currentFlight.getValidatingAirlineCodes().getFirst());
					currentFlight.setAirline(airline);
					airlineCache.put(currentFlight.getValidatingAirlineCodes().getFirst(), airline);
				}

				for (FlightOffer.Itinerary currentItinerary : currentFlight.getItineraries()) {
					for (FlightOffer.Segment currentSegment : currentItinerary.getSegments()) {

						if(airlineCache.get(currentSegment.getCarrierCode()) != null){
							currentSegment.setCarrier(airlineCache.get(currentSegment.getCarrierCode()));
						} else {
							Airline airline = getAirline(accessToken, currentSegment.getCarrierCode());
							currentSegment.setCarrier(airline);
							airlineCache.put(currentSegment.getCarrierCode(), airline);
						}

						if(currentSegment.getOperating() != null && currentSegment.getOperating().getCarrierCode() != null){
							if(airlineCache.get(currentSegment.getOperating().getCarrierCode()) != null){
								currentSegment.getOperating().setCarrier(airlineCache.get(currentSegment.getOperating().getCarrierCode()));
							} else {
								Airline airline = getAirline(accessToken, currentSegment.getOperating().getCarrierCode());
								currentSegment.getOperating().setCarrier(airline);
								airlineCache.put(currentSegment.getOperating().getCarrierCode(), airline);
							}
						}

						if(locationCache.get(currentSegment.getDeparture().getIataCode()) != null){
							currentSegment.getDeparture().setLocation(
								locationCache.get(currentSegment.getDeparture().getIataCode())
							);
						} else {
							Location departureLocation = getAirportByIataCode(
									accessToken, currentSegment.getDeparture().getIataCode());

							currentSegment.getDeparture().setLocation(departureLocation);

							locationCache.put(currentSegment.getDeparture().getIataCode(), departureLocation);
						}

						if(locationCache.get(currentSegment.getArrival().getIataCode()) != null){
							currentSegment.getArrival().setLocation(
								locationCache.get(currentSegment.getArrival().getIataCode())
							);
						} else {
							Location arrivalLocation = getAirportByIataCode(
									accessToken, currentSegment.getArrival().getIataCode());

							currentSegment.getArrival().setLocation(arrivalLocation);

							locationCache.put(currentSegment.getArrival().getIataCode(), arrivalLocation);
						}
					}
				}
			}
			System.out.println("Flights sended");
			return Objects.requireNonNull(response.getBody()).getData();
		} catch (Exception e){
			System.out.println(e.getMessage());
			return new ArrayList<>();
		}
	}

	public static void wait(int ms)
	{
		try
		{
			Thread.sleep(ms);
		}
		catch(InterruptedException ex)
		{
			Thread.currentThread().interrupt();
		}
	}

}
