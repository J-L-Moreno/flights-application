import { Grid2, Stack, Typography } from "@mui/material";
import { Itinerary, Segment } from "../../../models/FlightOffer";
import { Location } from "../../../models/Location";
import { Airline } from "../../../models/Airline";

interface Properties {
    itinerary: Itinerary
    airline: Airline
}
interface Stop{
    airport: Location;
    duration: string;
}

export function ItineraryCard(props: Properties){
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

    const Br = () => <br/>
    return(
        <Grid2 container>
            <Grid2 size={6}>
                <Stack divider={<Br/>}>
                <Typography>
                    {`${formatDateTime(departureDate)} - ${formatDateTime(arrivalDate)}`}
                </Typography>
                <Typography>
                    {`${departureCityName} (${departureIataCode}) - 
                    ${arrivalCityName} (${arrivalIataCode})`}
                </Typography>
                <Typography variant="body1" align="left">
                    {`Airline: ${props.airline.commonName ?? ''} (${props.airline.iataCode})`}
                </Typography>
                </Stack>
            </Grid2>

            <Grid2 size={6}>
                <Br />
                <Typography variant="body1" align="left">{`${convertDuration(duration)} ${getNumerOfStops(props.itinerary)}`}</Typography>
                <Stack>
                    {
                        getStops(props.itinerary.segments).map((stop: Stop)=>{
                            return <Typography key={stop.airport.iataCode}>{`${stop.duration} in ${stop.airport.address.cityName} (${stop.airport.iataCode})`}</Typography>
                        })
                    }
                </Stack>
            </Grid2>
        </Grid2>
    );
}

function getStops(segments: Segment[]): Stop[]{
    let stops: Stop[] = [];

    for(let i = 1; i < segments.length; i++){
        let stop: Stop = {} as Stop;
        stop.airport = segments[i].departure.location;
        stop.duration = getWaitTime(new Date(segments[i - 1].arrival.at), new Date(segments[i].departure.at));
        stops.push(stop);
    }

    return stops;
}

function getWaitTime(lastSegmentArrivalDatetime: Date, currentSegmentDepartureDatetime: Date){
    const differenceInMilliseconds = currentSegmentDepartureDatetime.getTime() - lastSegmentArrivalDatetime.getTime();
    const differenceInMinutes = Math.floor(differenceInMilliseconds / 60000);
    const hours = Math.floor(differenceInMinutes / 60);
    const minutes = differenceInMinutes % 60;

    return `${hours}h ${minutes}m`;
}

function getNumerOfStops(itinerary: Itinerary): string{
    let stops = itinerary.segments.length - 1;

    if(stops === 0){
        return "(Non-stop)";
    }
    if(stops === 1){
        return "(1 stop)";
    }
    return `(${stops} stops)`;
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