package com.jlmm.flights_backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AmadeusOAuth2Token implements Serializable {
    private String type;
    private String username;
    private String application_name;
    private String client_id;
    private String token_type;
    private String access_token;
    private int expires_in;
    private String state;
    private String scope;
}
