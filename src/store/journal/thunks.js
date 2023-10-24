import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNte, savingNewNote, setActiveNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";


const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote())

    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) );
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNte(newNote));
    dispatch(setActiveNote(newNote));

  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {

    const { uid } = getState().auth;
    if(!uid) throw new Error('El Id del usuario no existe');

    const notes = await loadNotes(uid);
    dispatch( setNotes(notes) );
  }

}

//* no es necesario por que ya tengo la nota, entonces no es necesario activar
// export const startActivenote = (note) => {
//   return async (dispatch) => {
//     dispatch(setActiveNote(note));
//   }
// }

export default startNewNote;