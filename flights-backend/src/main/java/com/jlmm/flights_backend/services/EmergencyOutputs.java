package com.jlmm.flights_backend.services;

import lombok.Data;
import org.springframework.stereotype.Repository;

@Repository
public class EmergencyOutputs {
    public static String airports = "[\n" +
            "    {\n" +
            "        \"name\": \"SAN FRANCISCO INTL\",\n" +
            "        \"id\": \"ASFO\",\n" +
            "        \"iataCode\": \"SFO\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"SAN FRANCISCO\",\n" +
            "            \"countryName\": \"UNITED STATES OF AMERICA\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"INTERNATIONAL\",\n" +
            "        \"id\": \"ASAN\",\n" +
            "        \"iataCode\": \"SAN\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"SAN DIEGO\",\n" +
            "            \"countryName\": \"UNITED STATES OF AMERICA\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"NORMAN Y. MINETA INTL\",\n" +
            "        \"id\": \"ASJC\",\n" +
            "        \"iataCode\": \"SJC\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"SAN JOSE\",\n" +
            "            \"countryName\": \"UNITED STATES OF AMERICA\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"PHOENIX INTL\",\n" +
            "        \"id\": \"ASYX\",\n" +
            "        \"iataCode\": \"SYX\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"SANYA\",\n" +
            "            \"countryName\": \"CHINA\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"JOHN WAYNE\",\n" +
            "        \"id\": \"ASNA\",\n" +
            "        \"iataCode\": \"SNA\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"SANTA ANA\",\n" +
            "            \"countryName\": \"UNITED STATES OF AMERICA\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"SAN ANTONIO INTL\",\n" +
            "        \"id\": \"ASAT\",\n" +
            "        \"iataCode\": \"SAT\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"SAN ANTONIO\",\n" +
            "            \"countryName\": \"UNITED STATES OF AMERICA\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"SANZAO INTL\",\n" +
            "        \"id\": \"AZUH\",\n" +
            "        \"iataCode\": \"ZUH\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"ZHUHAI\",\n" +
            "            \"countryName\": \"CHINA\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"LOS CABOS INTL\",\n" +
            "        \"id\": \"ASJD\",\n" +
            "        \"iataCode\": \"SJD\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"SAN JOSE DEL CABO\",\n" +
            "            \"countryName\": \"MEXICO\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"SANFORD INTL\",\n" +
            "        \"id\": \"ASFB\",\n" +
            "        \"iataCode\": \"SFB\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"ORLANDO\",\n" +
            "            \"countryName\": \"UNITED STATES OF AMERICA\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"SANYI\",\n" +
            "        \"id\": \"ALJG\",\n" +
            "        \"iataCode\": \"LJG\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"LIJIANG\",\n" +
            "            \"countryName\": \"CHINA\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"TREVISO SANT ANGELO\",\n" +
            "        \"id\": \"ATSF\",\n" +
            "        \"iataCode\": \"TSF\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"VENICE\",\n" +
            "            \"countryName\": \"ITALY\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"SANTIAGO\",\n" +
            "        \"id\": \"ASCQ\",\n" +
            "        \"iataCode\": \"SCQ\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"SANTIAGO DE COMPOSTELA\",\n" +
            "            \"countryName\": \"SPAIN\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"SANXIA\",\n" +
            "        \"id\": \"AYIH\",\n" +
            "        \"iataCode\": \"YIH\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"YICHANG\",\n" +
            "            \"countryName\": \"CHINA\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"LA PALMA\",\n" +
            "        \"id\": \"ASPC\",\n" +
            "        \"iataCode\": \"SPC\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"SANTA CRUZ DE LA PALMA\",\n" +
            "            \"countryName\": \"SPAIN\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"SAN JAVIER\",\n" +
            "        \"id\": \"AMJV\",\n" +
            "        \"iataCode\": \"MJV\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"MURCIA\",\n" +
            "            \"countryName\": \"SPAIN\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"SANTANDER AIRPORT\",\n" +
            "        \"id\": \"ASDR\",\n" +
            "        \"iataCode\": \"SDR\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"SANTANDER\",\n" +
            "            \"countryName\": \"SPAIN\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"R.SANCHEZ TABOADA INT\",\n" +
            "        \"id\": \"AMXL\",\n" +
            "        \"iataCode\": \"MXL\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"MEXICALI\",\n" +
            "            \"countryName\": \"MEXICO\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"SANLIURFA AIRPORT\",\n" +
            "        \"id\": \"ASFQ\",\n" +
            "        \"iataCode\": \"SFQ\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"SANLIURFA\",\n" +
            "            \"countryName\": \"TURKIYE\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"GUNEY ANADOLU PROJESI\",\n" +
            "        \"id\": \"AGNY\",\n" +
            "        \"iataCode\": \"GNY\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"SANLIURFA\",\n" +
            "            \"countryName\": \"TURKIYE\"\n" +
            "        }\n" +
            "    },\n" +
            "    {\n" +
            "        \"name\": \"ST BA MNPL\",\n" +
            "        \"id\": \"ASBA\",\n" +
            "        \"iataCode\": \"SBA\",\n" +
            "        \"address\": {\n" +
            "            \"cityName\": \"SANTA BARBARA\",\n" +
            "            \"countryName\": \"UNITED STATES OF AMERICA\"\n" +
            "        }\n" +
            "    }\n" +
            "]";

    public static String flights = "[\n" +
            "    {\n" +
            "        \"type\": \"flight-offer\",\n" +
            "        \"id\": \"1\",\n" +
            "        \"source\": \"GDS\",\n" +
            "        \"instantTicketingRequired\": false,\n" +
            "        \"nonHomogeneous\": false,\n" +
            "        \"oneWay\": false,\n" +
            "        \"lastTicketingDate\": \"2024-11-29\",\n" +
            "        \"lastTicketingDateTime\": \"2024-11-29\",\n" +
            "        \"numberOfBookableSeats\": 9,\n" +
            "        \"itineraries\": [\n" +
            "            {\n" +
            "                \"duration\": \"PT2H10M\",\n" +
            "                \"segments\": [\n" +
            "                    {\n" +
            "                        \"departure\": {\n" +
            "                            \"iataCode\": \"HMO\",\n" +
            "                            \"terminal\": null,\n" +
            "                            \"at\": \"2024-12-26T20:40:00\",\n" +
            "                            \"location\": {\n" +
            "                                \"name\": \"I.PESQUEIRA GARCIA\",\n" +
            "                                \"id\": \"AHMO\",\n" +
            "                                \"iataCode\": \"HMO\",\n" +
            "                                \"address\": {\n" +
            "                                    \"cityName\": \"HERMOSILLO\",\n" +
            "                                    \"countryName\": \"MEXICO\"\n" +
            "                                }\n" +
            "                            }\n" +
            "                        },\n" +
            "                        \"arrival\": {\n" +
            "                            \"iataCode\": \"GDL\",\n" +
            "                            \"terminal\": \"1\",\n" +
            "                            \"at\": \"2024-12-26T23:50:00\",\n" +
            "                            \"location\": {\n" +
            "                                \"name\": \"MIGUEL HIDALGO INTL\",\n" +
            "                                \"id\": \"AGDL\",\n" +
            "                                \"iataCode\": \"GDL\",\n" +
            "                                \"address\": {\n" +
            "                                    \"cityName\": \"GUADALAJARA\",\n" +
            "                                    \"countryName\": \"MEXICO\"\n" +
            "                                }\n" +
            "                            }\n" +
            "                        },\n" +
            "                        \"carrierCode\": \"VB\",\n" +
            "                        \"carrier\": {\n" +
            "                            \"iataCode\": \"VB\",\n" +
            "                            \"businessName\": \"VIVA AEROBUS\",\n" +
            "                            \"commonName\": \"VIVA AEROBUS\"\n" +
            "                        },\n" +
            "                        \"number\": \"3187\",\n" +
            "                        \"aircraft\": {\n" +
            "                            \"code\": \"320\"\n" +
            "                        },\n" +
            "                        \"operating\": {\n" +
            "                            \"carrierCode\": \"VB\",\n" +
            "                            \"carrier\": {\n" +
            "                                \"iataCode\": \"VB\",\n" +
            "                                \"businessName\": \"VIVA AEROBUS\",\n" +
            "                                \"commonName\": \"VIVA AEROBUS\"\n" +
            "                            }\n" +
            "                        },\n" +
            "                        \"duration\": \"PT2H10M\",\n" +
            "                        \"id\": \"1\",\n" +
            "                        \"numberOfStops\": 0,\n" +
            "                        \"blacklistedInEU\": false\n" +
            "                    }\n" +
            "                ]\n" +
            "            },\n" +
            "            {\n" +
            "                \"duration\": \"PT2H10M\",\n" +
            "                \"segments\": [\n" +
            "                    {\n" +
            "                        \"departure\": {\n" +
            "                            \"iataCode\": \"GDL\",\n" +
            "                            \"terminal\": \"1\",\n" +
            "                            \"at\": \"2025-01-15T18:50:00\",\n" +
            "                            \"location\": {\n" +
            "                                \"name\": \"MIGUEL HIDALGO INTL\",\n" +
            "                                \"id\": \"AGDL\",\n" +
            "                                \"iataCode\": \"GDL\",\n" +
            "                                \"address\": {\n" +
            "                                    \"cityName\": \"GUADALAJARA\",\n" +
            "                                    \"countryName\": \"MEXICO\"\n" +
            "                                }\n" +
            "                            }\n" +
            "                        },\n" +
            "                        \"arrival\": {\n" +
            "                            \"iataCode\": \"HMO\",\n" +
            "                            \"terminal\": null,\n" +
            "                            \"at\": \"2025-01-15T20:00:00\",\n" +
            "                            \"location\": {\n" +
            "                                \"name\": \"I.PESQUEIRA GARCIA\",\n" +
            "                                \"id\": \"AHMO\",\n" +
            "                                \"iataCode\": \"HMO\",\n" +
            "                                \"address\": {\n" +
            "                                    \"cityName\": \"HERMOSILLO\",\n" +
            "                                    \"countryName\": \"MEXICO\"\n" +
            "                                }\n" +
            "                            }\n" +
            "                        },\n" +
            "                        \"carrierCode\": \"VB\",\n" +
            "                        \"carrier\": {\n" +
            "                            \"iataCode\": \"VB\",\n" +
            "                            \"businessName\": \"VIVA AEROBUS\",\n" +
            "                            \"commonName\": \"VIVA AEROBUS\"\n" +
            "                        },\n" +
            "                        \"number\": \"3186\",\n" +
            "                        \"aircraft\": {\n" +
            "                            \"code\": \"320\"\n" +
            "                        },\n" +
            "                        \"operating\": {\n" +
            "                            \"carrierCode\": \"VB\",\n" +
            "                            \"carrier\": {\n" +
            "                                \"iataCode\": \"VB\",\n" +
            "                                \"businessName\": \"VIVA AEROBUS\",\n" +
            "                                \"commonName\": \"VIVA AEROBUS\"\n" +
            "                            }\n" +
            "                        },\n" +
            "                        \"duration\": \"PT2H10M\",\n" +
            "                        \"id\": \"2\",\n" +
            "                        \"numberOfStops\": 0,\n" +
            "                        \"blacklistedInEU\": false\n" +
            "                    }\n" +
            "                ]\n" +
            "            }\n" +
            "        ],\n" +
            "        \"price\": {\n" +
            "            \"currency\": \"MXN\",\n" +
            "            \"total\": \"6254.00\",\n" +
            "            \"base\": \"3668.00\",\n" +
            "            \"fees\": [\n" +
            "                {\n" +
            "                    \"amount\": \"0.00\",\n" +
            "                    \"type\": \"SUPPLIER\"\n" +
            "                },\n" +
            "                {\n" +
            "                    \"amount\": \"0.00\",\n" +
            "                    \"type\": \"TICKETING\"\n" +
            "                }\n" +
            "            ],\n" +
            "            \"grandTotal\": \"6254.00\"\n" +
            "        },\n" +
            "        \"pricingOptions\": {\n" +
            "            \"fareType\": [\n" +
            "                \"PUBLISHED\"\n" +
            "            ],\n" +
            "            \"includedCheckedBagsOnly\": false\n" +
            "        },\n" +
            "        \"validatingAirlineCodes\": [\n" +
            "            \"VB\"\n" +
            "        ],\n" +
            "        \"travelerPricings\": [\n" +
            "            {\n" +
            "                \"travelerId\": \"1\",\n" +
            "                \"fareOption\": \"STANDARD\",\n" +
            "                \"travelerType\": \"ADULT\",\n" +
            "                \"price\": {\n" +
            "                    \"currency\": \"MXN\",\n" +
            "                    \"total\": \"3127.00\",\n" +
            "                    \"base\": \"1834.00\",\n" +
            "                    \"fees\": null,\n" +
            "                    \"grandTotal\": null\n" +
            "                },\n" +
            "                \"fareDetailsBySegment\": [\n" +
            "                    {\n" +
            "                        \"segmentId\": \"1\",\n" +
            "                        \"cabin\": \"ECONOMY\",\n" +
            "                        \"fareBasis\": \"BZGO00N\",\n" +
            "                        \"brandedFare\": \"ZERO\",\n" +
            "                        \"brandedFareLabel\": \"VIVA ZERO\",\n" +
            "                        \"includedCheckedBags\": {\n" +
            "                            \"quantity\": 0\n" +
            "                        },\n" +
            "                        \"amenities\": [\n" +
            "                            {\n" +
            "                                \"description\": \"LAPTOP OR HANDBAG UP TO 85LCM\",\n" +
            "                                \"amenityType\": \"BAGGAGE\",\n" +
            "                                \"amenityProvider\": {\n" +
            "                                    \"name\": \"BrandedFare\"\n" +
            "                                },\n" +
            "                                \"chargeable\": false\n" +
            "                            }\n" +
            "                        ],\n" +
            "                        \"class\": \"B\"\n" +
            "                    },\n" +
            "                    {\n" +
            "                        \"segmentId\": \"2\",\n" +
            "                        \"cabin\": \"ECONOMY\",\n" +
            "                        \"fareBasis\": \"BZGO00N\",\n" +
            "                        \"brandedFare\": \"ZERO\",\n" +
            "                        \"brandedFareLabel\": \"VIVA ZERO\",\n" +
            "                        \"includedCheckedBags\": {\n" +
            "                            \"quantity\": 0\n" +
            "                        },\n" +
            "                        \"amenities\": [\n" +
            "                            {\n" +
            "                                \"description\": \"LAPTOP OR HANDBAG UP TO 85LCM\",\n" +
            "                                \"amenityType\": \"BAGGAGE\",\n" +
            "                                \"amenityProvider\": {\n" +
            "                                    \"name\": \"BrandedFare\"\n" +
            "                                },\n" +
            "                                \"chargeable\": false\n" +
            "                            }\n" +
            "                        ],\n" +
            "                        \"class\": \"B\"\n" +
            "                    }\n" +
            "                ]\n" +
            "            },\n" +
            "            {\n" +
            "                \"travelerId\": \"2\",\n" +
            "                \"fareOption\": \"STANDARD\",\n" +
            "                \"travelerType\": \"ADULT\",\n" +
            "                \"price\": {\n" +
            "                    \"currency\": \"MXN\",\n" +
            "                    \"total\": \"3127.00\",\n" +
            "                    \"base\": \"1834.00\",\n" +
            "                    \"fees\": null,\n" +
            "                    \"grandTotal\": null\n" +
            "                },\n" +
            "                \"fareDetailsBySegment\": [\n" +
            "                    {\n" +
            "                        \"segmentId\": \"1\",\n" +
            "                        \"cabin\": \"ECONOMY\",\n" +
            "                        \"fareBasis\": \"BZGO00N\",\n" +
            "                        \"brandedFare\": \"ZERO\",\n" +
            "                        \"brandedFareLabel\": \"VIVA ZERO\",\n" +
            "                        \"includedCheckedBags\": {\n" +
            "                            \"quantity\": 0\n" +
            "                        },\n" +
            "                        \"amenities\": [\n" +
            "                            {\n" +
            "                                \"description\": \"LAPTOP OR HANDBAG UP TO 85LCM\",\n" +
            "                                \"amenityType\": \"BAGGAGE\",\n" +
            "                                \"amenityProvider\": {\n" +
            "                                    \"name\": \"BrandedFare\"\n" +
            "                                },\n" +
            "                                \"chargeable\": false\n" +
            "                            }\n" +
            "                        ],\n" +
            "                        \"class\": \"B\"\n" +
            "                    },\n" +
            "                    {\n" +
            "                        \"segmentId\": \"2\",\n" +
            "                        \"cabin\": \"ECONOMY\",\n" +
            "                        \"fareBasis\": \"BZGO00N\",\n" +
            "                        \"brandedFare\": \"ZERO\",\n" +
            "                        \"brandedFareLabel\": \"VIVA ZERO\",\n" +
            "                        \"includedCheckedBags\": {\n" +
            "                            \"quantity\": 0\n" +
            "                        },\n" +
            "                        \"amenities\": [\n" +
            "                            {\n" +
            "                                \"description\": \"LAPTOP OR HANDBAG UP TO 85LCM\",\n" +
            "                                \"amenityType\": \"BAGGAGE\",\n" +
            "                                \"amenityProvider\": {\n" +
            "                                    \"name\": \"BrandedFare\"\n" +
            "                                },\n" +
            "                                \"chargeable\": false\n" +
            "                            }\n" +
            "                        ],\n" +
            "                        \"class\": \"B\"\n" +
            "                    }\n" +
            "                ]\n" +
            "            }\n" +
            "        ],\n" +
            "        \"airline\": {\n" +
            "            \"iataCode\": \"VB\",\n" +
            "            \"businessName\": \"VIVA AEROBUS\",\n" +
            "            \"commonName\": \"VIVA AEROBUS\"\n" +
            "        },\n" +
            "        \"operativeAirline\": null,\n" +
            "        \"upsellOffer\": false\n" +
            "    }\n" +
            "]";
}
