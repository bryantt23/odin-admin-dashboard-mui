import React from 'react'
import { Avatar, Grid, Box, Typography } from "@mui/material"

function TrendingUser({ user }) {
    const { handle, title, Icon } = user
    return (
        <Grid item sx={{ display: 'flex', alignItems: 'center', paddingTop: 1 }}>
            <Avatar sx={{ alignItems: 'center' }} ><Icon /></Avatar>
            <Box sx={{ paddingLeft: 3 }}>
                <Typography>{handle}</Typography>
                <Typography>{title}</Typography>
            </Box>
        </Grid>
    )
}

export default TrendingUser