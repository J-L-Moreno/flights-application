import { Box, Grid2, Typography } from "@mui/material";
import { Segment } from "../../../models/FlightOffer";

interface Properties{
    segment: Segment
}
export function SegmentCard(props: Properties){
    let departureCity = 'Unknown';
    if(props.segment.arrival.location != null){
        departureCity = `${props.segment.departure.location.address.cityName} (${props.segment.departure.location.iataCode})`
    }

    let arrivalCity = 'Unknown';
    if(props.segment.arrival.location != null){
        arrivalCity = `${props.segment.arrival.location.address.cityName} (${props.segment.arrival.location.iataCode})`
    }

    return (
        <Box sx={{p: 2, border: '1px solid black', borderRadius:0}}>
            <Grid2 container>
                <Grid2 size={8}>
                    <Typography variant="body1">Segment {`${props.segment.id}`}</Typography>
                    <Typography variant="body1">{`${props.segment.departure.at} - 
                    ${props.segment.arrival.at}`}</Typography>
                    <Typography variant="body1">{`${departureCity} - ${arrivalCity}`}</Typography>
                    <Typography variant="body1">Airline</Typography>
                </Grid2>
                <Grid2 size={4}>

                </Grid2>
            </Grid2>
        </Box>
    );
}