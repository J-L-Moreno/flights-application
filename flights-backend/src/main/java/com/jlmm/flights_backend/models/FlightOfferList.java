package com.jlmm.flights_backend.models;

import lombok.Data;

import java.util.List;

@Data
public class FlightOfferList {
    private Meta meta;
    private List<FlightOffer> data;
}
