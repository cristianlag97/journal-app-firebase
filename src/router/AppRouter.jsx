import { Routes, Route } from 'react-router-dom'
import { AuthRoutes, JournalRoute } from '../pages'

export const AppRouter = () => {
  return (
    <Routes>

      {/* Login and register */}
      <Route path='/auth/*' element={<AuthRoutes/>}/>

      {/* JournalApp */}
      <Route path='/*' element={<JournalRoute/>}/>

    </Routes>
  )
}
