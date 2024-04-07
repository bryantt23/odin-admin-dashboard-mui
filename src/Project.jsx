import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { Typography, Box, Paper } from "@mui/material"

function Project({ project }) {
    const { title, body } = project
    return (
        <Paper sx={{
            margin: "8px",
            borderRadius: "10px",
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '7px solid #f0b429'
        }}>
            <Typography variant="h6">{title}</Typography>
            <Typography>{body}</Typography>
            <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-end', p: 1, gap: 2 }}>
                <StarIcon />
                <VisibilityIcon />
                <ContentCutIcon />
            </Box>
        </Paper>
    )
}

export default Project