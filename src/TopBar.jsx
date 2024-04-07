import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, Grid, Typography, Button, Avatar } from '@mui/material';
import AlarmIcon from "@mui/icons-material/Alarm";
import goldenImage from '../golden.png';

function TopBar() {
    return (
        <Grid container sx={{ backgroundColor: 'white' }} >
            <Grid item xs={7} sx={{ padding: 2 }}>
                <TextField
                    sx={{ backgroundColor: '#e1e8f0' }}
                    variant='outlined'
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}></TextField>
            </Grid>
            <Grid item xs={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AlarmIcon sx={{ margin: 2 }} />
                <Avatar src={goldenImage} sx={{ width: 30, height: 30, backgroundColor: 'white', }}></Avatar>
                <Typography sx={{ margin: 2 }}>Morgan Oakley</Typography>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', paddingLeft: 1 }}>
                <Grid item sx={{ paddingRight: 2 }}>
                    <Avatar src={goldenImage} sx={{ height: 80, width: 80, backgroundColor: 'white', }}></Avatar>
                </Grid>
                <Grid item>
                    <Typography >Hi there,</Typography>
                    <Typography variant="h5">Morgan Oakley</Typography>
                </Grid>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Button variant="contained" sx={{ borderRadius: 25 }}>New</Button>
                <Button variant="contained" sx={{ borderRadius: 25 }}>Upload</Button>
                <Button variant="contained" sx={{ borderRadius: 25 }}>Share</Button>
            </Grid>
        </Grid>
    )
}

export default TopBar