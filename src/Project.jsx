import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { Grid, Typography } from "@mui/material"

function Project({ project }) {
    console.log("🚀 ~ Project ~ project:", project)
    const { title, body } = project
    return (
        <Grid sx={{ backgroundColor: 'green', height: '100%' }}>
            <Typography variant="h6">{title}</Typography>
            <Typography >{body}</Typography>
            <StarIcon />
            <VisibilityIcon />
            <ContentCutIcon />
        </Grid>
    )
}

export default Project