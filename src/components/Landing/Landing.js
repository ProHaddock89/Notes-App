import { Box, Snackbar, IconButton } from "@mui/material"
import NotesForm from "../NotesForm/NotesForm"
import React, { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import NotesTable from "../NotesTable/NotesTable";


const Landing = () => {
    const [notes, setNotes] = useState([])
    const [feedback, setFeedback] = useState({open: false, message: ""})
    const handleClose = () => setFeedback({open: false, message: ""})
    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
    )
    return(
        <Box sx={{ flexGrow: 1, flexWrap: 'wrap' }}>
            <Snackbar
                open={feedback.open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={feedback.message}
                action={action}
            />
            <NotesForm setFeedback={setFeedback} setNotes={setNotes}/>
            <NotesTable notes={notes}/>
        </Box>
    )
}

export default Landing