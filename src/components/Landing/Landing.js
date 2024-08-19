import { Box, Snackbar, IconButton, Button } from "@mui/material"
import NotesForm from "../NotesForm/NotesForm"
import React, { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import NotesTable from "../NotesTable/NotesTable";


const Landing = () => {
  const [selectedRows, setSelectedRows] = useState([])

    const [notes, setNotes] = useState([])
    const [feedback, setFeedback] = useState({open: false, message: ""})
    const handleClose = () => setFeedback({open: false, message: ""})

    const handleUpdate = () => console.log(selectedRows)


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
            <Button variant="outlined" color="success" onClick={handleUpdate}>Update Notes</Button>
            <NotesTable notes={notes} setNotes={setNotes} setSelectedRows={setSelectedRows}/>
        </Box>
    )
}

export default Landing