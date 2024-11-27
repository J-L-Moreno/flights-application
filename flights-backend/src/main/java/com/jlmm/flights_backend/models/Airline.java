package com.jlmm.flights_backend.models;

import lombok.Data;

@Data
public class Airline {
    private String iataCode;
    private String businessName;
    private String commonName;
}
