import React from 'react'
import { Grid, Typography } from "@mui/material"
import BoltIcon from '@mui/icons-material/Bolt';
import PetsIcon from '@mui/icons-material/Pets';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ToysIcon from '@mui/icons-material/Toys';
import TrendingUser from './TrendingUser';

function Trending() {
    const users = [
        { id: 1, handle: "@tegan", title: "World Peace Builder", Icon: BoltIcon },
        { id: 2, handle: "@morgan", title: "Super Cool Project", Icon: PetsIcon },
        { id: 3, handle: "@kendall", title: "Life Changing App", Icon: EmojiPeopleIcon },
        { id: 4, handle: "@alex", title: "No Traffic Maker", Icon: ToysIcon }
    ];

    return (
        <Grid>
            <Grid item>
                <Typography variant="h6">Announcements</Typography>
            </Grid>
            {users.map(user => <TrendingUser key={user.id} user={user} />)}
        </Grid>
    )
}

export default Trending