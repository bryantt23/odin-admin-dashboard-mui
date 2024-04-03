import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, Grid, Typography, Button } from '@mui/material';
import AlarmIcon from "@mui/icons-material/Alarm";

function TopBar() {
    return (
        <Grid container>
            <Grid xs={7} sx={{ backgroundColor: 'yellow', padding: "5px 15px 5px 15px" }}>
                <TextField
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
            <Grid xs={5} sx={{ backgroundColor: '#90ee90', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AlarmIcon sx={{ margin: 2 }} />
                <img src="../golden.png" style={{ height: 30, margin: 2, backgroundColor: 'white', borderRadius: '50%' }}></img>
                <Typography sx={{ margin: 2 }}>Morgan Oakley</Typography>
            </Grid>
            <Grid xs={6} sx={{ backgroundColor: '#90aa90', display: 'flex', alignItems: 'center', padding: 2 }}>
                <Grid item sx={{ paddingRight: 2 }}>
                    <img src="../golden.png" style={{ height: 80, backgroundColor: 'white', borderRadius: '50%' }}></img>
                </Grid>
                <Grid item>
                    <Typography >Hi there,</Typography>
                    <Typography variant="h5">Morgan Oakley</Typography>
                </Grid>

            </Grid>
            <Grid xs={6} sx={{ backgroundColor: '#90cc90', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', padding: 5 }}>
                <Button variant="contained" sx={{ borderRadius: 25 }}>New</Button>
                <Button variant="contained" sx={{ borderRadius: 25 }}>Upload</Button>
                <Button variant="contained" sx={{ borderRadius: 25 }}>Share</Button>
            </Grid>
        </Grid>
    )
}

export default TopBar