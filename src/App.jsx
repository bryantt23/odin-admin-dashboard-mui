
import './App.css'
import { Grid, } from "@mui/material"
import SideBar from './SideBar'
import TopBar from './TopBar'
import Projects from './Projects'
import RightSide from './RightSide'

function App() {
  return (
    <Grid container >
      <Grid item xs={4} sm={3} md={2} >
        <SideBar />
      </Grid>
      <Grid item xs={8} sm={9} md={10} >
        <TopBar />
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Projects />
          </Grid>
          <Grid item xs={3}>
            <RightSide />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
