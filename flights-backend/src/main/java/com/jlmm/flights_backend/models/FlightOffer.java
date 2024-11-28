package com.jlmm.flights_backend.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class FlightOffer {
    private String type;
    private String id;
    private String source;
    private boolean instantTicketingRequired;
    private boolean nonHomogeneous;
    private boolean oneWay;
    private boolean isUpsellOffer;
    private String lastTicketingDate;
    private String lastTicketingDateTime;
    private int numberOfBookableSeats;
    private List<Itinerary> itineraries;
    private Price price;
    private PricingOptions pricingOptions;
    private List<String> validatingAirlineCodes;
    private List<TravelerPricing> travelerPricings;

    private Airline airline;
    private Airline operativeAirline;

    @Data
    public static class Itinerary {
        private String duration;
        private List<Segment> segments;
    }

    @Data
    public static class Segment {
        private Departure departure;
        private Arrival arrival;
        private String carrierCode;
        private Airline carrier;
        private String number;
        private Aircraft aircraft;
        private Operating operating;
        private String duration;
        private String id;
        private int numberOfStops;
        private boolean blacklistedInEU;
    }

    @Data
    public static class Departure {
        private String iataCode;
        private String terminal;
        private String at;
        private Location location;
    }

    @Data
    public static class Arrival {
        private String iataCode;
        private String terminal;
        private String at;
        private Location location;
    }

    @Data
    public static class Aircraft {
        private String code;
    }

    @Data
    public static class Operating {
        private String carrierCode;
        private Airline carrier;
    }

    @Data
    public static class Price {
        private String currency;
        private String total;
        private String base;
        private List<Fee> fees;
        private String grandTotal;
    }

    @Data
    public static class Fee {
        private String amount;
        private String type;
    }

    @Data
    public static class PricingOptions {
        private List<String> fareType;
        private boolean includedCheckedBagsOnly;
    }

    @Data
    public static class TravelerPricing {
        private String travelerId;
        private String fareOption;
        private String travelerType;
        private Price price;
        private List<FareDetailsBySegment> fareDetailsBySegment;
    }

    @Data
    public static class FareDetailsBySegment {
        private String segmentId;
        private String cabin;
        private String fareBasis;
        private String brandedFare;
        private String brandedFareLabel;
        @JsonProperty("class")
        private String clazz;
        private IncludedCheckedBags includedCheckedBags;
        private List<Amenity> amenities;
    }

    @Data
    public static class IncludedCheckedBags {
        private int quantity;
    }

    @Data
    public static class Amenity {
        private String description;
        private boolean isChargeable;
        private String amenityType;
        private AmenityProvider amenityProvider;
    }

    @Data
    public static class AmenityProvider {
        private String name;
    }

//    @Data
//    public static class Airline {
//        String name;
//        String iataCode;
//    }

}








