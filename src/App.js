import Navbar from "./Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Form from "./Form";

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Form />
    </ThemeProvider>
  );
}

export default App;
