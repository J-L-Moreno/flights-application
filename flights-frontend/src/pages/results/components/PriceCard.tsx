import { Box, Container, Divider, Typography } from "@mui/material";
import { FlightOffer } from "../../../models/FlightOffer";

interface Properties { 
    flight: FlightOffer
}

export function PriceCard(props: Properties){
    return (
        <Box sx={{ height:"100%"}}>
            <Container>
                <Typography variant="body1" align="center">{`$ ${props.flight.price.total} ${props.flight.price.currency}`}</Typography>
                <Typography variant="body2" align="center">total</Typography>
                <br/>
                <Typography variant="body1" align="center">{`$ ${props.flight.travelerPricings[0].price.total} ${props.flight.travelerPricings[0].price.currency}`}</Typography>
                <Typography variant="body2" align="center">per Traveler</Typography>
            </Container>
        </Box>
    );
}