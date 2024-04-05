import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { Grid, Typography } from "@mui/material"

function Project({ project }) {
    console.log("🚀 ~ Project ~ project:", project)
    const { title, body } = project
    return (
        <div>Project
            <div>
                <Typography variant="h3">{title}</Typography>
                <Typography >{body}</Typography>
                <StarIcon />
                <VisibilityIcon />
                <ContentCutIcon />
            </div>
        </div>
    )
}

export default Project