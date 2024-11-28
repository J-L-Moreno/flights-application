import axios from "axios";
import { apiUrl, airline } from "./ApiConsts";
import { Airline } from "../models/Airline";

export async function getAirline(iataCode: string){
    let uri = apiUrl + airline + '?airlineIataCode=' + iataCode

    const response = await axios.get(uri);

    const result: Airline = response.data;

    return result;
}