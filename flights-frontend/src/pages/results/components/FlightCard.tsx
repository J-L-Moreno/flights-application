import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { PriceCard } from "./PriceCard";
import { FlightOffer, Itinerary } from "../../../models/FlightOffer";
import { ItineraryCard } from "./ItineraryCard";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loadCurrentFlight } from "../../../store/slices/currentFlight/CurrentFlightSlice";

interface Properties{
    flight: FlightOffer
}

const Divisor = () => <hr style={{ width: '100%' }} />;

export function FlightCard(props: Properties){
    
const navigate = useNavigate();
const dispatch = useDispatch();

    return (
        <Box sx={{m: 2, p:2, border: '1px solid black', borderRadius:0}}>
            <Grid2 container>
                <Grid2 size={9}>
                    <Stack divider={<Divisor/>}>
                       {
                         props.flight.itineraries.map(
                            (itinerary: Itinerary) => <ItineraryCard itinerary={itinerary}/>
                         )
                       }
                    </Stack>
                </Grid2>
                
                <Grid2 size={2}>
                    <PriceCard flight={props.flight}/>
                </Grid2>

                <Grid2 size={1}>
                    <Button onClick={()=>loadCurrentFlightinStorage(props.flight)}>Detail</Button>
                </Grid2>
            </Grid2>
        </Box>
    );

    function loadCurrentFlightinStorage(flight: FlightOffer){
        dispatch(loadCurrentFlight(flight));
        navigate("/detail");
    }
}