import { Box, Button, Divider, Grid, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react"

const NotesForm = ({setFeedback, setNotes}) =>  {
    const [noteData, setNoteData] = useState({title: "", note: ""})
    const handleSubmit = () => {
        // Update noteData state to clear the "form"
        setNoteData({ title: "", note: "" })
        const response = {}
        setFeedback({open: true, message: "Pending..."})
        // If note saved successfully display success message
        if (response.status === 200) {
            setFeedback({ open: true, message: "Note Saved Successfully!"})
        } else {
            // Failed to save note: Display Error
            setFeedback({ open: true, message: "Failed to save note..." })
        }
        if (noteData.title != "") {
            setNotes(prevNotes => [...prevNotes, noteData]);

        }
    }
    return (
        <Box sx={{ flexGrow: 1, flexWrap: 'wrap' }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Paper sx={{padding: 2}} elevation={3}>
                        <Box>
                            <Grid item xs={12} margin={1}>
                                <Typography variant="h5">Create a Note</Typography>
                            </Grid>
                            <Divider />
                            <Grid item xs={4} marginTop={3}>
                                <TextField variant="outlined" label="Title" value={noteData.title} fullWidth sx={{margin: 1}} onChange={(e) => setNoteData({...noteData, title: e.target.value})} />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField variant="outlined" label="Note" value={noteData.note} fullWidth  multiline rows={4} sx={{margin: 1}} onChange={(e) => setNoteData({...noteData, note: e.target.value})} />
                            </Grid>
                            <Grid item xs={4} margin={1}>
                                <Button variant="outlined" onClick={handleSubmit} fullWidth>Save</Button>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default NotesForm