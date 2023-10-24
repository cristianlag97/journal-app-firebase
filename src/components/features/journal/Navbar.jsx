import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useDispatch } from "react-redux";
import { startLogout } from "../../../store/auth/thunks";

export const Navbar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: {sm: `calc(100% - ${drawerWidth}px)`},
        ml: {sm: `${drawerWidth}px`}
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          // edge="start"
          sx={{mr: 2, display: {sm: 'none'}}}
        >
          <MenuOutlinedIcon/>
        </IconButton>

        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6' noWrap component='div'>JournalApp</Typography>
          <IconButton
            color='error'
            onClick={onLogout}
          >
            <LogoutOutlinedIcon/>
          </IconButton>
        </Grid>

      </Toolbar>
    </AppBar>
  )
}
