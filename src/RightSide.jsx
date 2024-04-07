import React from 'react'
import Announcements from './Announcements'
import Trending from './Trending'
import { Box } from "@mui/material"

function RightSide() {
    return (
        <Box>
            <Announcements />
            <Trending />
        </Box>
    )
}

export default RightSide