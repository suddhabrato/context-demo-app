import Navbar from "./Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
