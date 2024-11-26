import { Box, Stack } from "@mui/material"
import { SearchControls } from "./components/SearchControls"
import { Title } from "./components/Title"

export function SearchView(){
    return <Stack spacing={10}>
        <Box height={10}/>
        <Title/>
        <SearchControls/>
    </Stack>
}