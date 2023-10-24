import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthRoutes, JournalRoute } from '../pages';

import CheckingAuth from '../ui';
import { useCheckAuth } from '../hooks';


export const AppRouter = () => {

  const { status } = useCheckAuth();

  if ( status === 'checking' ) {
    return <CheckingAuth/>
  }

  return (
    <Routes>
      {
        (status === 'authenticated')
        ? <Route path='/*' element={<JournalRoute/>}/>
        : <Route path='/auth/*' element={<AuthRoutes/>}/>
      }

      <Route path='/*' element={ <Navigate to={'/auth/login'}/> }/>

      {/* Login and register */}
      {/* <Route path='/auth/*' element={<AuthRoutes/>}/> */}

      {/* JournalApp */}
      {/* <Route path='/*' element={<JournalRoute/>}/> */}

    </Routes>
  )
}
