import { Box, Typography } from "@mui/material";
import { Fee, Price } from "../../../models/FlightOffer";

interface Properties{
    price: Price
}
export function PriceBreakdown(props: Properties){
    return(
        <Box sx={{p: 2, border: '1px solid black', borderRadius:0}}>
            <Typography variant="h6" align="center">Price Breakdown</Typography>
            <br />
            <Typography variant="body1">Base: ${`${props.price.base} ${props.price.currency}`}</Typography>
            <br />
            <Typography variant="body1">Fees: </Typography>
            {
                props.price.fees == null 
                ? <Typography variant="body1">None</Typography>
                : props.price.fees.map((fee: Fee, index: number) =>
                    <Typography variant="body1" key={index}>{`${fee.type}: $${fee.amount} ${props.price.currency}`}</Typography>
                )
            }
            <br />
            <Typography variant="body1">Total: ${`${props.price.total} ${props.price.currency}`}</Typography>
        </Box>
    );
}