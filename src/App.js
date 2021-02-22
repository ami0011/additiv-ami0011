import { ThemeProvider } from '@material-ui/core';
import './App.css';
import Layout from './Layout';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
