import { Airline } from "./Airline";
import { Location } from "./Location";

export interface FlightOffer {
    type: string;
    id: string;
    source: string;
    instantTicketingRequired: boolean;
    nonHomogeneous: boolean;
    oneWay: boolean;
    isUpsellOffer: boolean;
    lastTicketingDate: string;
    lastTicketingDateTime: string;
    numberOfBookableSeats: number;
    itineraries: Itinerary[];
    price: Price;
    pricingOptions: PricingOptions;
    validatingAirlineCodes: string[];
    travelerPricings: TravelerPricing[];

    airline: Airline
}

export interface Itinerary {
    duration: string;
    segments: Segment[];
}

export interface Segment {
    departure: Departure;
    arrival: Arrival;
    carrierCode: string;
    carrier: Airline;
    number: string;
    aircraft: Aircraft;
    operating: Operating;
    duration: string;
    id: string;
    numberOfStops: number;
    blacklistedInEU: boolean;
}

interface Departure {
    iataCode: string;
    terminal: string;
    at: Date;
    location: Location
}

interface Arrival {
    iataCode: string;
    terminal?: string;
    at: Date;
    location: Location
}

interface Aircraft {
    code: string;
}

interface Operating {
    carrierCode: string;
    carrier: Airline;
}

export interface Price {
    currency: string;
    total: string;
    base: string;
    fees: Fee[];
    grandTotal: string;
}

export interface Fee {
    amount: string;
    type: string;
}

interface PricingOptions {
    fareType: string[];
    includedCheckedBagsOnly: boolean;
}

export interface TravelerPricing {
    travelerId: string;
    fareOption: string;
    travelerType: string;
    price: Price;
    fareDetailsBySegment: FareDetailsBySegment[];
}

interface FareDetailsBySegment {
    segmentId: string;
    cabin: string;
    fareBasis: string;
    brandedFare: string;
    brandedFareLabel: string;
    class: string;
    includedCheckedBags: IncludedCheckedBags;
    amenities: Amenity[];
}

interface IncludedCheckedBags {
    quantity: number;
}

export interface Amenity {
    description: string;
    isChargeable: boolean;
    amenityType: string;
    amenityProvider: AmenityProvider;
}

interface AmenityProvider {
    name: string;
}