import { useSelector } from 'react-redux'
import type { RootState } from '../../store/Store'
import { FlightOffer } from '../../models/FlightOffer';
import { FlightCard } from './components/FlightCard';
import { Box, Button, Grid2, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Sorter } from './components/Sorter';

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
        <Stack width={"100%"} divider={<Box height={10}/>}>
            <Box><Button variant='contained' onClick={()=>navigate("/")}>Return to Search</Button></Box>
            <Box sx={{p:2, border: '1px solid black', borderRadius:2}}>
                <Grid2 container>
                    <Grid2 size={4}>
                        <Typography variant="h6">Sort flights by duration</Typography>
                        <Button onClick={onSortFlightsByDurationAsc}>Asc</Button>
                        <Button onClick={onSortFlightsByDurationDesc}>Desc</Button>
                    </Grid2>
                    <Grid2 alignContent='center' size={4}>
                        <Typography variant="h6">Sort flights by price</Typography>
                        <Button onClick={onSortFlightsByPriceAsc}>Asc</Button>
                        <Button onClick={onSortFlightsByPriceDesc}>Desc</Button>
                    </Grid2>
                    <Grid2 size={4}>
                        <Button variant='contained' onClick={onRevertSort}>Revert sort</Button>
                    </Grid2>
                </Grid2>
                
                <br />
                <Typography variant='h6'></Typography>
            </Box>
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

    function onSortFlightsByPriceAsc(){
        let newFlights = sortFlightOffersByPriceAsc([...flights]);
        setFlights(newFlights);
    }

    function onSortFlightsByPriceDesc(){
        let newFlights = sortFlightOffersByPriceDesc([...flights]);
        setFlights(newFlights);
    }
    
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

function sortFlightOffersByPriceAsc(flightOffers: FlightOffer[]): FlightOffer[] {
    return flightOffers.sort((a, b) => {
        const priceA = parseFloat(a.price.total);
        const priceB = parseFloat(b.price.total);
        return priceA - priceB;
    });
}

function sortFlightOffersByPriceDesc(flightOffers: FlightOffer[]): FlightOffer[] {
    return flightOffers.sort((a, b) => {
        const priceA = parseFloat(a.price.total);
        const priceB = parseFloat(b.price.total);
        return priceB - priceA;
    });
}