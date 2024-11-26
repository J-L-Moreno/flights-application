import { Grid2, Typography } from "@mui/material";
import { Itinerary } from "../../../models/FlightOffer";
import { Location } from "../../../models/Location";

interface properties {
    itinerary: Itinerary
}

export function ItineraryCard(props: properties){
    const departureDate: string = props.itinerary.segments[0].departure.at;
    const arrivalDate: string = props.itinerary.segments.slice(-1)[0].arrival.at;

    let departureCityName = 'Unknown';
    let departureIataCode = 'Unknown';
    if(props.itinerary.segments[0].departure.location != null){
        const departureAirport: Location = props.itinerary.segments[0].departure.location;
        departureCityName = departureAirport.address.cityName;
        departureIataCode = departureAirport.iataCode;
    }

    let arrivalCityName = 'Unknown';
    let arrivalIataCode = 'Unknown';
    if(props.itinerary.segments[0].departure.location != null){
        const arrivalAirport: Location = props.itinerary.segments[0].departure.location;
        arrivalCityName = arrivalAirport.address.cityName;
        arrivalIataCode = arrivalAirport.iataCode;
    }
    
    const duration = props.itinerary.duration;

    return(
        // <Box sx={{p: 5, border: '1px solid black'}}>
            <Grid2 container>
                <Grid2 size={6}>
                    <Typography variant="body1" align="left">
                        {`${departureDate} - ${arrivalDate}`}
                    </Typography>
                    <Typography variant="body1" align="left">
                        {`${departureCityName} (${departureIataCode}) - 
                        ${arrivalCityName} (${arrivalIataCode})`}
                    </Typography>
                    <br />
                    <Typography variant="body1" align="left">
                        Airline
                    </Typography>
                </Grid2>

                <Grid2 size={6}>
                    <br />
                    <Typography variant="body1" align="left">{`${convertDuration(duration)}`}</Typography>
                </Grid2>
            </Grid2>
        // </Box>
    );
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