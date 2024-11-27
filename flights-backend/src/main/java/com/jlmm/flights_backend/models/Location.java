package com.jlmm.flights_backend.models;

import lombok.Data;

@Data
public class Location {
//    private String type;
//    private String subType;
    private String name;
//    private String detailedName;
    private String id;
//    private Self self;
    private String iataCode;
    private Address address;

    @Data
    public static class Self {
        private String href;
        private String[] methods;
    }

    @Data
    public static class Address {
        private String cityName;
        private String countryName;
    }
}
