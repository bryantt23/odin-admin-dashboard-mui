import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox'; // or PersonIcon
import MessageIcon from '@mui/icons-material/Message'; // or EmailIcon
import HistoryIcon from '@mui/icons-material/History';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // or AssignmentIcon
import GroupsIcon from '@mui/icons-material/Groups'; // or PeopleIcon
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help'; // or LiveHelpIcon
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip'; // or SecurityIcon
import DashboardIcon from '@mui/icons-material/Dashboard';
import { styled } from '@mui/material/styles'
import { Grid, Typography as MuiTypography } from "@mui/material"

const Typography = styled(MuiTypography)({
    display: 'flex',
    alignItems: 'center',
    '& > svg': {
        paddingRight: '10px',
    },
    paddingBottom: '10px',
    color: 'white'
})

function SideBar() {
    return (
        <Grid container direction="column" sx={{ backgroundColor: '#1892d4', height: '100vh' }} gap={4} padding={2}>
            <Grid>
                <Typography variant="h4">
                    <DashboardIcon sx={{ fontSize: 'inherit' }} /> Dashboard
                </Typography>
            </Grid>
            <Grid>
                <Typography><HomeIcon /> Home</Typography>
                <Typography><AccountBoxIcon /> Profile</Typography>
                <Typography><MessageIcon /> Messages</Typography>
                <Typography><HistoryIcon /> History</Typography>
                <Typography><CheckCircleIcon /> Tasks</Typography>
                <Typography><GroupsIcon /> Communities</Typography>
            </Grid>
            <Grid>
                <Typography><SettingsIcon /> Settings</Typography>
                <Typography><HelpIcon /> Support</Typography>
                <Typography><PrivacyTipIcon /> Privacy</Typography>
            </Grid>
        </Grid>
    );
}

export default SideBar;
