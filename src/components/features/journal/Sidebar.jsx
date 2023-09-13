import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@mui/material";
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';


export const Sidebar = ({ drawerWith = 240 }) => {
  return (
    <Box
      component='nav'
      sx={ {width: {sm: drawerWith}, flexShrink: {sm: 0} }}
    >
      <Drawer
        variant='permanent' //temporary
        open
        sx={{
          display: {xs: 'block'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWith}
        }}
      >
        <Toolbar>
          <Typography varian='h6' noWrap component='div'>
            Cristian Laguna
          </Typography>
        </Toolbar>
        
        <Divider/>

        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'].map(month =>(
              <ListItem key={month} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNotIcon/>
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={month} />
                    <ListItemText secondary={'Culpa sunt'} />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>

      </Drawer>
    </Box>
  )
}
