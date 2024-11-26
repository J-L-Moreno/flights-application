import { Box, Modal, Typography } from "@mui/material";

export function MissedFieldAllert(props: any){
    return(
        <Modal 
        open={props.open}
        onClose={props.onClose}>
            <Box sx={modalStyle}>
                <Typography align="center" variant="h6">{props.message}</Typography>
            </Box>
        </Modal>
    );
}

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'pink',
    border: '1px solid black',
    borderRadius:2,
    p: 3,
};