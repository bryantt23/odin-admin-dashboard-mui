import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { Grid, Typography, Box } from "@mui/material"

function Project({ project }) {
    console.log("🚀 ~ Project ~ project:", project)
    const { title, body } = project
    return (
        <Box sx={{ margin: "8px", border: "1px solid red", padding: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">{title}</Typography>
            <Typography>{body}</Typography>
            <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', p: 1 }}>
                <StarIcon />
                <VisibilityIcon />
                <ContentCutIcon />
            </Box>
        </Box>
    )
}

export default Project