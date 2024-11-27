package com.jlmm.flights_backend.models;

import lombok.Data;

import java.util.List;

@Data
public class AirlineList {
    private List<Airline> data;
}
