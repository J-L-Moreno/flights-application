import { Box, Button, Grid2, Typography } from "@mui/material";
import { FlightOffer, Segment } from "../../../models/FlightOffer";
import { TravelersFareDetails } from "./TravelersFareDetails";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/Store";
import { Airline } from "../../../models/Airline";

interface Properties{
    segment: Segment
    counter: number
    arrivalDatetime?: Date;
}
export function SegmentCard(props: Properties){
    const currentFlight: FlightOffer | undefined = useSelector((state: RootState) => state.currentFlight.value);

    let departureCity = props.segment.departure.iataCode;
    if(props.segment.departure.location != null){
            departureCity = `${props.segment.departure.location.address.cityName} (${props.segment.departure.location.iataCode})`;
    }

    let arrivalCity = props.segment.arrival.iataCode;
    if(props.segment.arrival.location != null){
        arrivalCity = `${props.segment.arrival.location.address.cityName} (${props.segment.arrival.location.iataCode})`
    }

    return (
        <>
        {
            props.counter == 1 
            ?   <>
                    <br />
                    <Typography variant="h6" align="center">Itinerary</Typography> 
                    <br />
                </>
            : <></>
        }
        <Box sx={{p: 2, border: '1px solid black', borderRadius:0}}>
            <Grid2 container>
                <Grid2 size={4}>
                    <Typography variant="body1">Segment {`${props.counter}`}</Typography>
                    <Typography variant="body1">{`${formatDateTime(props.segment.departure.at)} - 
                    ${formatDateTime(props.segment.arrival.at)}`}</Typography>
                    <Typography variant="body1">{`${departureCity} - ${arrivalCity}`}</Typography>
                    <Typography variant="body1">{`Airline: ${currentFlight?.airline.commonName} (${currentFlight?.airline.iataCode})`}</Typography>
                    {   props.segment.operating == null 
                        ? <></>
                        :props.segment.carrierCode != props.segment.operating.carrierCode
                            ? <Typography>{`Operative airline: ${props.segment.operating.carrier.commonName} (${props.segment.operating.carrier.iataCode})`}</Typography>
                            : <></>
                    }
                    <Typography>{`Aircraft type: ${props.segment.aircraft.code}`}</Typography>
                </Grid2>
                <Grid2 size={3}>
                    {
                        props.counter > 1
                        ? <Typography>{`Wait ${getWaitTime(new Date(props.arrivalDatetime!), new Date(props.segment.departure.at))}`}</Typography>
                        : <></>
                    }
                </Grid2>
                <Grid2 size={5}>
                    <TravelersFareDetails segmentId={props.segment.id}/>
                </Grid2>
            </Grid2>
        </Box>
        </>
    );
}

function getWaitTime(lastSegmentArrivalDatetime: Date, currentSegmentDepartureDatetime: Date){
    const differenceInMilliseconds = currentSegmentDepartureDatetime.getTime() - lastSegmentArrivalDatetime.getTime();
    const differenceInMinutes = Math.floor(differenceInMilliseconds / 60000);
    const hours = Math.floor(differenceInMinutes / 60);
    const minutes = differenceInMinutes % 60;

    return `${hours}h ${minutes}m`;
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