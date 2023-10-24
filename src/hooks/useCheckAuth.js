import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth/authSlice";
import { FirebaseAuth } from "../firebase/config";
import { startLoadingNotes } from "../store/journal/thunks";



const useCheckAuth = () => {

  const {status} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if( !user ) return dispatch(logout());
      console.log(user);
      const { uid, email, displayName, photoURL } = user;

      dispatch( login({uid, email, displayName, photoURL}) );
      dispatch( startLoadingNotes() );
    })
  }, [])
  
  return {
    status
  }
}

export default useCheckAuth