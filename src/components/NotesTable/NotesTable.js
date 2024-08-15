import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"


const NotesTable = ({notes}) => {
    const columns = [
        {
            field: "title",
            headerName: "Title",
            flex: 1,
        },
        {
            field: "note",
            headerName: "Note",
            flex: 1,
        },
    ]


    return (
        <Box m="20px">
            <Box m="40px 0 0 0" height="75vh">
                <DataGrid checkboxSelection rows={notes} columns={columns} getRowId={row => row.title } />
            </Box>
        </Box>
    )
}

export default NotesTable