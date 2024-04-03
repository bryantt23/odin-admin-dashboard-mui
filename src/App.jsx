
import './App.css'
import { Grid, Paper } from "@mui/material"
import { styled } from '@mui/material/styles';
import SideBar from './SideBar'
import TopBar from './TopBar'
import Projects from './Projects'
import RightSide from './RightSide'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Grid container >
      <Grid item xs={4}>
        <SideBar />
      </Grid>
      <Grid item xs={8}>
        <Grid item xs={12}>
          <TopBar />
        </Grid>
        <Grid container>
          <Grid item xs={7}>
            <Projects />
          </Grid>
          <Grid item xs={5}>
            <RightSide />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
