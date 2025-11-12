
import './App.css';
import UserContext from './contexts/user/UserContext';
import ProfessorContext from './contexts/professor/professorContext';

import AdminRoutes from './routes/admin';

function App() {

  return (
    <>
      <UserContext>
        <ProfessorContext>
          <AdminRoutes />
        </ProfessorContext>
      </UserContext>
    </>
  )
}

export default App
