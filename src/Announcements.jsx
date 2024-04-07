import React from 'react'
import { Grid, Typography, Divider } from "@mui/material"
import { styled } from '@mui/material/styles';

const SmallerHeading = styled(Typography)({
    fontSize: '1.1rem'
})

const AnnouncementItem = styled(Grid)(({ theme }) => ({
    paddingBottom: theme.spacing(2),
    '&:not(:last-of-type)': {
        borderBottom: `2px solid ${theme.palette.divider}`,
    }
}))

function Announcements() {
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <Typography variant="h6">Announcements</Typography>
            </Grid>
            <AnnouncementItem item>
                <SmallerHeading>Site Maintenance</SmallerHeading>
                <Typography>
                    Vestibulum condimentum tellus lacus, in accumsan elit maximus ac. Donec hendrerit sodales congue...
                </Typography>
            </AnnouncementItem>
            <AnnouncementItem item>
                <SmallerHeading>Community Share Day</SmallerHeading>
                <Typography>
                    Nam vel lectus tincidunt, rutrum nulla eu, ornare libero.Aliquam dictum accumsan porttitor...
                </Typography>
            </AnnouncementItem>
            <AnnouncementItem item>
                <SmallerHeading>Updated Privacy Policy</SmallerHeading>
                <Typography>
                    Phasellus efficitur nisi eget elit consectetur, eget condimentum ante auctor.Cras fringilla sagittis sem in mattis...
                </Typography>
            </AnnouncementItem>
        </Grid>
    )
}

export default Announcements