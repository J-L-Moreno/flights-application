import { useSelector } from 'react-redux'
import type { RootState } from '../../store/Store'
import { FlightOffer } from '../../models/FlightOffer';
import { FlightCard } from './components/FlightCard';
import { Box, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function ResultsView(){
    const navigate = useNavigate();
    const globalFlights = useSelector((state: RootState) => state.flights.value);
    const [flights, setFlights] = useState<FlightOffer[]>([]);

    useEffect(
        ()=>{
            setFlights(globalFlights)
        }, []
    );

    return (
        <Box sx={{p:2}}>
        <Button onClick={onSortFlightsByDurationAsc}>Asc</Button>
        <Button onClick={onSortFlightsByDurationDesc}>Desc</Button>
        <Button onClick={onRevertSort}>Revert sort</Button>
        <br />
        <Button variant='contained' onClick={()=>navigate("/")}>Return to Search</Button>
        <Stack width={"100%"} divider={<Box height={10}/>}>
            {
                flights.map(
                    (flight: FlightOffer) => <FlightCard flight={flight}/>
                )
            }
        </Stack>
        </Box>
    );

    function onRevertSort(){
        setFlights(globalFlights);
    }

    function onSortFlightsByDurationAsc(){
        const newFlights = sortFlightOffersByDurationAsc([...flights]);
        setFlights(newFlights);
    }

    function onSortFlightsByDurationDesc(){
        let newFlights = sortFlightOffersByDurationDesc([...flights]);
        setFlights(newFlights);
    }

    function parseDuration(duration: string): number {
        const regex = /PT(?:(\d+)H)?(?:(\d+)M)?/;
        const matches = duration.match(regex);
        const hours = matches && matches[1] ? parseInt(matches[1], 10) : 0;
        const minutes = matches && matches[2] ? parseInt(matches[2], 10) : 0;
        return hours * 60 + minutes;
    }

    
    function sortFlightOffersByDurationAsc(flightOffers: FlightOffer[]): FlightOffer[] {
        return flightOffers.sort((a, b) => {
            const durationA = parseDuration(a.itineraries[0].duration);
            const durationB = parseDuration(b.itineraries[0].duration);
            return durationA - durationB;
        });
    }

    function sortFlightOffersByDurationDesc(flightOffers: FlightOffer[]): FlightOffer[] {
        return flightOffers.sort((a, b) => {
            const durationA = parseDuration(a.itineraries[0].duration);
            const durationB = parseDuration(b.itineraries[0].duration);
            return durationB - durationA;
        });
    }
    
}