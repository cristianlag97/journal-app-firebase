import {
  Box,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography
} from "@mui/material";

import { useSelector } from "react-redux";
import SideBarItem from "./SideBarItem";


export const Sidebar = ({ drawerWith = 240 }) => {

  const { displayName } = useSelector(state => state.auth);
  const { notes } = useSelector(state => state.journal);

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
            { displayName }
          </Typography>
        </Toolbar>
        
        <Divider/>

        <List>
          {
            notes.map(note =>(
              <SideBarItem key={note.id} { ...note }/>
            ))
          }
        </List>

      </Drawer>
    </Box>
  )
}
