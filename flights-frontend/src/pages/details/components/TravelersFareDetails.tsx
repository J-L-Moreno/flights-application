import { useSelector } from "react-redux";
import { Amenity, FlightOffer } from "../../../models/FlightOffer";
import { RootState } from "../../../store/Store";
import { Box, Typography } from "@mui/material";

interface Properties{
    segmentId: string
}
export function TravelersFareDetails(props: Properties){
    const currentFlight: FlightOffer | undefined = useSelector((state: RootState) => state.currentFlight.value);
    const segmentFareDetails = findSegmentFareDetails(props.segmentId);

    function findSegmentFareDetails(segmentId: string){
        for(let i = 0; i < currentFlight!.travelerPricings[0].fareDetailsBySegment.length; i++){
            if(currentFlight!.travelerPricings[0].fareDetailsBySegment[i].segmentId === segmentId){
                return currentFlight!.travelerPricings[0].fareDetailsBySegment[i];
            }
        }
    }

    function isChargeable(x: boolean){
        if(x) return '(chargeable)';
        return '(not chargeable)';
    }

    return(
        <Box sx={{p: 2, border: '1px solid black', borderRadius:0}}>
            <Typography variant="body1" align="center">Traveles fare details</Typography>
            <br />
            <Typography>Cabin: {`${segmentFareDetails?.cabin}`}</Typography>
            <br />
            <Typography>Class: {`${segmentFareDetails?.class ?? '' }`}</Typography>
            <br />
            <Typography>Amenities:</Typography>
            {
                segmentFareDetails?.amenities 
                ?   segmentFareDetails?.amenities.map((amenity: Amenity) => {
                        return <Typography key={amenity.description}>{`${isChargeable(amenity.isChargeable)} ${amenity.description}`}</Typography>
                    })
                :   <Typography>None</Typography>
            }
        </Box>
    );
}