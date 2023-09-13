import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from '../../components';
import { NothingSelectedView, NoteView } from "../../views";
import { AddOutlined } from "@mui/icons-material";


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, culpa laboriosam? Laborum inventore placeat sint sit laudantium molestiae reprehenderit, delectus dignissimos minima a reiciendis voluptatum hic ex assumenda nulla et.</Typography> */}

      {/* <NothingSelectedView/> */}
      <NoteView/>

      <IconButton
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
