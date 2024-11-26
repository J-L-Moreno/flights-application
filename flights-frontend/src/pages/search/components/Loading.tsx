import { Box, CircularProgress, Modal } from "@mui/material";

export function Loading(props: any){
    return(
        <Modal 
        open={props.open}>
            <Box sx={modalStyle}>
                <CircularProgress/>
            </Box>
        </Modal>
    );
}

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    p: 3,
};