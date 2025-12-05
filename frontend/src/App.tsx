import AdminRoutes from './routes/admin';
import AppProvider from './contexts/AppProvider';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    tablet: true;
    desktop: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1536,
      tablet: 600,
      desktop: 1280,
    }
  }
});

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <AdminRoutes />
        </AppProvider>
      </ThemeProvider>
    </>
  )
}

export default App
