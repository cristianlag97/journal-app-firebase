import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../../store/journal/journalSlice";


const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

  const dispatch = useDispatch();

  const newTitle = useMemo(() => {
    return title.length > 17
    ? title.substring(0, 17) + '...'
    :title; 
  }, [title]);

  const onActiveNote = () => {
    dispatch(setActiveNote({
      title,
      id,
      date,
      body,
      imageUrls,
    }))

  }

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={onActiveNote}
      >
        <ListItemIcon>
          <TurnedInNotIcon/>
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={ newTitle } />
          <ListItemText secondary={ body } />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}

export default SideBarItem;
