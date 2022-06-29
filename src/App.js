import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import { LanguageProvider } from './contexts/LanguageContext';
import { ToggleColorMode } from './contexts/ToggleMode';

function App() {
  return (
    <ToggleColorMode>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </LanguageProvider >
    </ToggleColorMode>

  );
}

export default App;
