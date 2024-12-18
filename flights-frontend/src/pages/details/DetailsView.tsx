import { Box, Button, Grid2, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/Store";
import { FlightOffer, Itinerary, Segment } from "../../models/FlightOffer";
import { SegmentCard } from "./components/SegmentCard";
import { PriceBreakdown } from "./components/PriceBreakdown";

export function DetailsView(){
    const navigate = useNavigate();
    const currentFlight: FlightOffer | undefined = useSelector((state: RootState) => state.currentFlight.value);

    return (<>
        <Button onClick={()=>navigate("/flights")}>Return to results</Button>
        <Grid2 container spacing={2} m={2}>
            <Grid2 size={9}>
                <Stack divider={<Box height={10}/>}>
                    {
                        currentFlight?.itineraries.map((itinerary: Itinerary)=>{
                            return itinerary.segments.map((segment: Segment)=>{
                                return <SegmentCard segment={segment}/>
                            }
                            )
                        })
                    }
                </Stack>
            </Grid2>
            <Grid2 size={3}>
                <PriceBreakdown price={currentFlight!.price}/>
            </Grid2>
        </Grid2></>
    );
}