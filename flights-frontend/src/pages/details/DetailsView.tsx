import { Box, Button, Grid2, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/Store";
import { FlightOffer, Itinerary, Segment } from "../../models/FlightOffer";
import { SegmentCard } from "./components/SegmentCard";
import { PriceBreakdown } from "./components/PriceBreakdown";
import { PricePerTraveler } from "./components/PricePerTraveler";

export function DetailsView(){
    const navigate = useNavigate();
    const currentFlight: FlightOffer | undefined = useSelector((state: RootState) => state.currentFlight.value);

    return (<Box sx={{p:2}}>
        <Button variant="contained" onClick={()=>navigate("/flights")}>Return to results</Button>
        <Grid2 container spacing={2}>
            <Grid2 size={9}>
                <Stack divider={<Box height={10}/>}>
                    {   
                        currentFlight?.itineraries.map((itinerary: Itinerary)=>{
                            let counter = 1;
                            let lastSegmentArrivalDateTime: Date;
                            return itinerary.segments.map((segment: Segment)=>{
                                const segmentCard = (<SegmentCard segment={segment} counter={counter} arrivalDatetime={lastSegmentArrivalDateTime}/>);
                                
                                counter++;
                                lastSegmentArrivalDateTime = segment.arrival.at;
                                return segmentCard;
                            }
                            )
                        })
                    }
                </Stack>
            </Grid2>
            <Grid2 size={3}>
                <PriceBreakdown price={currentFlight!.price}/>
                <PricePerTraveler travelerPricing={currentFlight!.travelerPricings[0]}/>
            </Grid2>
        </Grid2></Box>
    );
}