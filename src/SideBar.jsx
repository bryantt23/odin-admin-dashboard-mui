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

import { Box, Typography } from "@mui/material"

function SideBar() {
    return (
        <Box style={{ backgroundColor: '#1892d4', height: '100vh' }}>
            <div>
                <Typography variant="h3">
                    <DashboardIcon fontSize='10' /> Dashboard
                </Typography>
            </div>
            <div>
                <p></p>
                <p><HomeIcon /> Home</p>
                <p><AccountBoxIcon /> Profile</p>
                <p><MessageIcon /> Messages</p>
                <p><HistoryIcon /> History</p>
                <p><CheckCircleIcon /> Tasks</p>
                <p><GroupsIcon /> Communities</p>
            </div>
            <div>
                <p><SettingsIcon /> Settings</p>
                <p><HelpIcon /> Support</p>
                <p><PrivacyTipIcon /> Privacy</p>
            </div>
        </Box>
    );
}

export default SideBar;
