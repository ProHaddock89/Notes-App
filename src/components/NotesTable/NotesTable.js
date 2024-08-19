import { Box, Button } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

const NotesTable = ({ notes, setNotes, setSelectedRows }) => {
    const handleSelectionChange = (selection) => setSelectedRows(selection)

    const handleDelete = (title) => {
        setNotes(prevNotes => prevNotes.filter(note => note.title !== title))
    }

    const columns = [
        {
            field: "title",
            headerName: "Title",
            flex: 1,
        },
        {
            field: "note",
            headerName: "Note",
            flex: 2,
        },
        {
            field: "actions",
            headerName: "Actions",
            flex: 0.5,
            renderCell: (params) => (
                <Button variant="contained" color="secondary" onClick={() => handleDelete(params.row.title)}>
                    Delete
                </Button>
            ),
        },
    ]

    return (
        <Box m="20px">
            <Box m="40px 0 0 0" height="75vh">
                <DataGrid 
                    checkboxSelection 
                    rows={notes} 
                    columns={columns} 
                    getRowId={row => row.title} 
                    onRowSelectionModelChange={(selection) => handleSelectionChange(selection)} 
                />
            </Box>
        </Box>
    )
}

export default NotesTable
