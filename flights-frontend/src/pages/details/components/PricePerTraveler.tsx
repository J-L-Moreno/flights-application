import { Box, Divider, Typography } from "@mui/material";
import { TravelerPricing } from "../../../models/FlightOffer";

interface Properties{
    travelerPricing: TravelerPricing
}
export function PricePerTraveler(props: Properties){
    return(
        <Box sx={{p: 2, border: '1px solid black', borderRadius:0}}>
            <Typography variant="h6" align="center">Per Traveler</Typography>
            <br />
            <Typography variant="body1">Base price: ${`${props.travelerPricing.price.base} ${props.travelerPricing.price.currency}`}</Typography>
            <br />
            <Typography variant="body1">Fare option: {`${props.travelerPricing.fareOption}`}</Typography>
            <br />
            <Typography variant="body1">Total: ${`${props.travelerPricing.price.total} ${props.travelerPricing.price.currency}`}</Typography>
        </Box>
    );
}