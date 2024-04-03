import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, Grid, Typography } from '@mui/material';
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
                <AlarmIcon sx={{ margin: 1 }} />
                <img src="../golden.png" style={{ height: 30, margin: 1 }}></img>
                <Typography sx={{ margin: 1 }}>Morgan Oakley</Typography>
            </Grid>
        </Grid>
    )
}

export default TopBar