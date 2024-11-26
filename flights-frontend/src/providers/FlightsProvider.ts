import axios from "axios";
import { apiUrl, flights } from "./ApiConsts";
import { FlightOffer } from "../models/FlightOffer";

export async function getFlights(
    departureAirport: string,
    arrivalAirport: string,
    departureDate: string,
    currency: string,
    numberOfAdults: number,
    nonStop: boolean,
    returnDate?: string,
){
    let uri: string = `${apiUrl}${flights}`
        + "?departureAirport=" + departureAirport
        + "&arrivalAirport=" + arrivalAirport
        + "&departureDate=" + departureDate
        + "&currency=" + currency
        + "&numberOfAdults=" + numberOfAdults
        + "&nonStop=" + nonStop;

    if(returnDate) uri = uri + "&returnDate=" + returnDate

    const response = await axios.get(uri);

    const result: FlightOffer[] = response.data;

    return result;
}