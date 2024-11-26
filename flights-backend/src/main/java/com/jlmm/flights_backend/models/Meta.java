package com.jlmm.flights_backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Meta {
    private int count;
    private Links links;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Links {
        private String self;
    }
}