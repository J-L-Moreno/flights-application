import { Grid2, Typography } from "@mui/material";
import { Itinerary, Segment } from "../../../models/FlightOffer";
import { Location } from "../../../models/Location";
import { Airline } from "../../../models/Airline";

interface properties {
    itinerary: Itinerary
    airline: Airline
}

export function ItineraryCard(props: properties){
    const departureDate: Date = props.itinerary.segments[0].departure.at;
    const arrivalDate: Date = props.itinerary.segments.slice(-1)[0].arrival.at;

    let departureCityName = '';
    let departureIataCode = `${props.itinerary.segments[0].departure.iataCode}`;
    if(props.itinerary.segments[0].departure.location != null){
        const departureAirport: Location = props.itinerary.segments[0].departure.location;
        departureCityName = departureAirport.address.cityName;
    }

    let arrivalCityName = '';
    let arrivalIataCode = `${props.itinerary.segments.slice(-1)[0].arrival.iataCode}`;
    if(props.itinerary.segments.slice(-1)[0].arrival.location != null){
        const arrivalAirport: Location = props.itinerary.segments.slice(-1)[0].arrival.location;
        arrivalCityName = arrivalAirport.address.cityName;
    }
    
    const duration = props.itinerary.duration;

    return(
        // <Box sx={{p: 5, border: '1px solid black'}}>
            <Grid2 container>
                <Grid2 size={6}>
                    <Typography>
                        {`${formatDateTime(departureDate)} - ${formatDateTime(arrivalDate)}`}
                    </Typography>
                    <br />
                    <Typography>
                        {`${departureCityName} (${departureIataCode}) - 
                        ${arrivalCityName} (${arrivalIataCode})`}
                    </Typography>
                    <br />
                    <Typography variant="body1" align="left">
                        {`Airline: ${props.airline.commonName ?? ''} (${props.airline.iataCode})`}
                    </Typography>
                </Grid2>

                <Grid2 size={6}>
                    <br />
                    <Typography variant="body1" align="left">{`${convertDuration(duration)} ${getStops(props.itinerary)}`}</Typography>
                </Grid2>
            </Grid2>
        // </Box>
    );
}

function getStops(itinerary: Itinerary): string{
    let stops = itinerary.segments.length - 1;

    if(stops == 0){
        return "(Non-stop)";
    }
    if(stops == 1){
        return "(1 stop)";
    }
    return `(${stops} stops)`;
}

function stopCounter(itinerary: Itinerary): string{
    let count = 0;
    itinerary.segments.map((segment: Segment)=>{
        count += segment.numberOfStops;
    }
    )
    if(count == 0){
        return "(Non-stop)";
    }
    if(count == 1){
        return "(1 stop)";
    }
    return `(${count} stops)`;
}

function convertDuration(isoDuration: string): string {
    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?/;
    const matches = isoDuration.match(regex);
  
    if (!matches) {
      throw new Error('Formato de duración no válido');
    }
  
    const hours = matches[1] ? parseInt(matches[1], 10) : 0;
    const minutes = matches[2] ? parseInt(matches[2], 10) : 0;
  
    const formattedDuration = `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m`;
  
    return formattedDuration;
  }

function formatDateTime(dateString: any): string {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        throw new TypeError('El argumento debe ser una cadena de texto válida con formato de fecha y hora');
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}/${month}/${day} ${hours}:${minutes}`;
}