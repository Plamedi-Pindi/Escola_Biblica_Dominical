
import './App.css';
import UserContext from './contexts/user/UserContext';

import AdminRoutes from './routes/admin';

function App() {

  return (
    <>
      <UserContext>
        <AdminRoutes />
      </UserContext>
    </>
  )
}

export default App
