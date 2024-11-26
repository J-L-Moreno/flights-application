package com.jlmm.flights_backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
//@NoArgsConstructor
//@AllArgsConstructor
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
