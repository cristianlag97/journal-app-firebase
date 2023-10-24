import { IconButton } from "@mui/material";
import { JournalLayout } from '../../components';
import { NoteView, NothingSelectedView } from "../../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal";


export const JournalPage = () => {

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  const { isSaving, active } = useSelector(state => state.journal);


  return (
    <JournalLayout>

      {
        // active !== null
        !!active
        ? <NoteView/>
        : <NothingSelectedView/>
      }

      <IconButton
        onClick={ onClickNewNote }
        disabled={isSaving}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined/>
      </IconButton>

    </JournalLayout>
  )
}
