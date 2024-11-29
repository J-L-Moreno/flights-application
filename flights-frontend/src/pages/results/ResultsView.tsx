import { useSelector } from 'react-redux'
import type { RootState } from '../../store/Store'
import { FlightOffer } from '../../models/FlightOffer';
import { FlightCard } from './components/FlightCard';
import { Box, Button, Grid2, Pagination, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function ResultsView(){
    const navigate = useNavigate();
    const globalFlights = useSelector((state: RootState) => state.flights.value);

    const [page, setPage] = useState<number>(1);
    const [flights, setFlights] = useState<FlightOffer[]>(globalFlights);
    const [pageFlights, setPageFlights] = useState<FlightOffer[]>(getFlightsByPage(flights, page));

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
                pageFlights.map(
                    (flight: FlightOffer) => <FlightCard flight={flight} key={flight.id}/>
                )
            }
        <Box display="flex" justifyContent="center"><Pagination color="primary" shape="rounded" count={Math.ceil(flights.length / 10)} page={page} onChange={onPageChange} /></Box>
        </Stack>
        </Box>
    );

    function onPageChange(event: React.ChangeEvent<unknown>, value: number){
        console.log(event);
        setPage(value);
        setPageFlights(getFlightsByPage(flights, value));
    }

    function getFlightsByPage(flightsList: FlightOffer[], page: number): FlightOffer[]{
        const initialFlightIndex = (page - 1) * 10;
        const finalFlightIndex  = (page * 10) - 1;

        let newPageFlights = [];

        for(let i = initialFlightIndex; i <= finalFlightIndex; i++){
            if(i >= flightsList.length) break
            newPageFlights.push(flightsList[i]);
        }

        return newPageFlights;
    }

    function onRevertSort(){
        setFlights(globalFlights);
        setPageFlights(getFlightsByPage(globalFlights, page));
    }

    function onSortFlightsByDurationAsc(){
        const newFlights = sortFlightOffersByDurationAsc([...flights]);
        setFlights(newFlights);
        setPageFlights(getFlightsByPage(newFlights, page));
    }

    function onSortFlightsByDurationDesc(){
        let newFlights = sortFlightOffersByDurationDesc([...flights]);
        setFlights(newFlights);
        setPageFlights(getFlightsByPage(newFlights, page));
    }

    function onSortFlightsByPriceAsc(){
        let newFlights = sortFlightOffersByPriceAsc([...flights]);
        setFlights(newFlights);
        setPageFlights(getFlightsByPage(newFlights, page));
    }

    function onSortFlightsByPriceDesc(){
        let newFlights = sortFlightOffersByPriceDesc([...flights]);
        setFlights(newFlights);
        setPageFlights(getFlightsByPage(newFlights, page));
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