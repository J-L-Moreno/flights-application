import { Autocomplete, Box, Button, Checkbox, Grid2, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import dayjs, {Dayjs} from "dayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useCallback, useState } from "react";
import { MissedFieldAllert } from "./MissedFieldAllert";
import { Loading } from "./Loading";
import { getLocations } from "../../../providers/LocationsProvider";
import { Location } from "../../../models/Location";
import { getFlights } from "../../../providers/FlightsProvider";
import { debounce } from 'lodash';

import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { load } from "../../../store/slices/flights/FlightsSlice";
import { loadAirports } from "../../../store/slices/airports/AirportsSlice";

export function SearchControls(){
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [departureAirportInput, setDepartureAirportInput] = useState<string | null>();
    const [arrivalAirportInput, setArrivalAirportInput] = useState<string | null>();

    const [departureAirport, setDepartureAirport] = useState<Location | null>();
    const [arrivalAirport, setArrivalAirport] = useState<Location | null>();
    const [departureDate, setDepartureDate] = useState<Dayjs | null>(null);
    const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
    const [currency, setCurrency] = useState<string>("MXN");
    const [numberOfAdults, setNumberOfAdults] = useState<number>(1);
    const [nonStop, setNonStop] = useState<boolean>(false);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [airportsOptions, setAirportOptions] = useState<readonly Location[]>([]);

    function onChangeAirportOptions(airports: Location[] | undefined){
        if(airports !== undefined){
            setAirportOptions(airports);
        }
    }

    const [isMissedField, setIsMissedField] = useState<boolean>(false);
    const [missedField, setMissedField] = useState<string>();

    function onChangeDepartureAirport(newValue: Location | null){
        setDepartureAirport(newValue);
    }
    function onChangeDepartureAirportInput(newValue: string | null) {
        setDepartureAirportInput(newValue);
    
        if (newValue != null) {
            debouncedGetLocations(newValue);
        }
    }
    
    const debouncedGetLocations = useCallback(
        debounce((value: string) => {
            getLocations(value).then(data => onChangeAirportOptions(data));
        }, 300), // 300ms debounce
        []
    );
    function onChangeArrivalAirport(newValue: Location | null){
        setArrivalAirport(newValue);
    }
    function onChangeArrivalAirportInput(newValue: string){
        setArrivalAirportInput(newValue);

        if (newValue != null) {
            debouncedGetLocations(newValue);
        }
    }
    function onChangeDepartureDate(newValue: dayjs.Dayjs | null){
        setDepartureDate(newValue);
    }
    function onChangeReturnDate(newValue: dayjs.Dayjs | null){
        setReturnDate(newValue);
    }
    function onChangeCurrency(newValue: string){
        setCurrency(newValue);
    }
    function onChangeNumberOfAdults(newValue: string){
        if (/^\d*$/.test(newValue) == false) return;
        if(Number(newValue) < 1) return;
        setNumberOfAdults(Number(newValue));
    }
    function onChangeNonStop(newValue: boolean){
        setNonStop(newValue)
    }

    return (
        <>
        <Grid2 container>
            <Grid2 size={3}></Grid2>
            <Grid2 size={6}>
                <Box component="section" sx={{p: 5, border: '1px solid black', borderRadius:2}}>
                    <Grid2 container spacing={2}>
                        <Grid2 size={2}> <InputLabel>Departure Airport</InputLabel> </Grid2>
                        <Grid2 size={10}> <Autocomplete
                            filterOptions={(x) => x} 
                            disablePortal
                            value={departureAirport}
                            onChange={(event, newValue) => onChangeDepartureAirport(newValue)}
                            inputValue={departureAirportInput ?? ""}
                            onInputChange={(event, newInput) => onChangeDepartureAirportInput(newInput)}
                            renderInput={(params) => <TextField {...params} label="" />}
                            options={airportsOptions}
                            getOptionLabel={(option) => `(${option.iataCode}) ${option.name} - ${option.address.cityName}`}
                            size="small"
                            onClose={(event) => setAirportOptions([])}
                        /> </Grid2>

                        <Grid2 size={2}> <InputLabel>Arrival Airport</InputLabel> </Grid2>
                        <Grid2 size={10}> <Autocomplete 
                            filterOptions={(x) => x} 
                            disablePortal
                            value={arrivalAirport}
                            onChange={(event, newValue) => onChangeArrivalAirport(newValue)}
                            inputValue={arrivalAirportInput ?? ""}
                            onInputChange={(event, newInput) => onChangeArrivalAirportInput(newInput)}
                            renderInput={(params) => <TextField {...params} label="" />}
                            options={airportsOptions}
                            getOptionLabel={(option) => `(${option.iataCode}) ${option.name} - ${option.address.cityName}`}
                            size="small"
                            onClose={(event) => setAirportOptions([])}
                        /> </Grid2>

                        <Grid2 size={2}> <InputLabel>Departure Date</InputLabel> </Grid2>
                        <Grid2 size={10}> 
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    value={departureDate}
                                    onChange={onChangeDepartureDate}
                                />
                            </LocalizationProvider>
                        </Grid2>

                        <Grid2 size={2}> <InputLabel>Return Date</InputLabel> </Grid2>
                        <Grid2 size={10}> 
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    value={returnDate}
                                    onChange={onChangeReturnDate}
                                />
                            </LocalizationProvider>
                        </Grid2>

                        <Grid2 size={2}> <InputLabel>Currency</InputLabel> </Grid2>
                        <Grid2 size={10}>
                            <Select 
                            value={currency}
                            onChange={(event) => onChangeCurrency(event?.target.value)}
                            size="small" 
                            fullWidth 
                            required>
                                <MenuItem value={"USD"}>USD</MenuItem>
                                <MenuItem value={"MXN"}>MXN</MenuItem>
                                <MenuItem value={"EUR"}>EUR</MenuItem>
                            </Select>
                        </Grid2>

                        <Grid2 size={2}> <InputLabel>No. of Adults</InputLabel> </Grid2>
                        <Grid2 size={10}> <TextField 
                            value={numberOfAdults}
                            onChange={(event) => onChangeNumberOfAdults(event.target.value)}
                            size='small' 
                            fullWidth 
                            required/> 
                        </Grid2>

                        <Grid2 size={2}/>
                        <Grid2 size={1}> <Checkbox
                            value={nonStop}
                            onChange={(event) => onChangeNonStop(event.target.checked)}/> 
                        </Grid2>
                        <Grid2 size={9}> <InputLabel>Non-stop</InputLabel> </Grid2>

                        <Grid2 size={10}/>
                        <Grid2 size={2}> <Button
                            onClick={searchFlights}
                            variant="contained" 
                            fullWidth>SEARCH
                        </Button> </Grid2>
                    </Grid2>
                </Box>
            </Grid2>
        </Grid2>
        <MissedFieldAllert onClose={()=>setIsMissedField(false)} open={isMissedField} message={missedField}></MissedFieldAllert>
        <Loading open={isLoading}></Loading>
        </>
    );

    function searchFlights(){
        let missedFieldMessage = " is a required field."
        if(departureAirport == null || departureAirport == undefined) {
            setIsMissedField(true);
            setMissedField("Departure Airport" + missedFieldMessage);
            return;
        }
        if(arrivalAirport == null) {
            setIsMissedField(true);
            setMissedField("Arrival Airport" + missedFieldMessage);
            return;
        }
        if(departureDate == null) {
            setIsMissedField(true);
            setMissedField("Departure Date" + missedFieldMessage);
            return;
        }
        if(currency == null){
            setIsMissedField(true);
            setMissedField("Currency" + missedFieldMessage);
            return;
        }
        if(numberOfAdults == null || numberOfAdults < 1){
            setIsMissedField(true);
            setMissedField("No. of Adults" + missedFieldMessage);
            return;
        }
        if(departureDate.isBefore(dayjs(), 'day')) {
            setIsMissedField(true);
            setMissedField("Departure Date cannot be in the past.");
            return;
        }
        if(returnDate?.isBefore(departureDate)){
            setIsMissedField(true);
            setMissedField("Return Date cannot be less than Departure Date.");
            return;
        }

        setIsLoading(true);

        dispatch(loadAirports([departureAirport, arrivalAirport]));
        
        getFlights(
            departureAirport.iataCode, 
            arrivalAirport.iataCode, 
            departureDate.format("YYYY-MM-DD"),
            currency, numberOfAdults, nonStop, 
            returnDate?.format('YYYY-MM-DD') ?? undefined)
            .then(data => {
                dispatch(load(data));
                setIsLoading(false);
                navigate('/flights');
            });
    }
}