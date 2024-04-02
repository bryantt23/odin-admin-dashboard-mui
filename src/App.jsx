import { useState } from 'react'
import './App.css'
import { Grid, Paper } from "@mui/material"
import { styled } from '@mui/material/styles';
import SideBar from './SideBar'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const topUrls = [
    "Home", "Profile", "Messages", "History", "Tasks", "Communities"]
  const bottomUrls = [
    "Settings", "Support", "Privacy"
  ]
  const [count, setCount] = useState(0)
  // Home: HomeIcon
  // Profile: AccountBoxIcon or PersonIcon
  // Messages: MessageIcon or EmailIcon
  // History: HistoryIcon
  // Tasks: CheckCircleIcon or AssignmentIcon
  // Communities: GroupsIcon or PeopleIcon
  // Settings: SettingsIcon
  // Support: HelpIcon or LiveHelpIcon
  // Privacy: PrivacyTipIcon or SecurityIcon
  return (
    <>
      <Grid container >
        <Grid item xs={4}>
          <SideBar />
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </>
  )
}

export default App
