import { useSelector } from 'react-redux'
import type { RootState } from '../../store/Store'
import { FlightOffer } from '../../models/FlightOffer';
import { FlightCard } from './components/FlightCard';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function ResultsView(){
    const navigate = useNavigate();
    const flights = useSelector((state: RootState) => state.flights.value);

    return (
        <>
        <Button variant='contained' onClick={()=>navigate("/")}>Return to Search</Button>
        <Stack width={"100%"}>
            
            {
                flights.map(
                    (flight: FlightOffer) => <FlightCard flight={flight}/>
                )
            }
        </Stack>
        </>
    );
}