import AdminRoutes from './routes/admin';
import AppProvider from './contexts/AppProvider';

import './App.css';

function App() {

  return (
    <>
      <AppProvider>
        <AdminRoutes />
      </AppProvider>
    </>
  )
}

export default App
