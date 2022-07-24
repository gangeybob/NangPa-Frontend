import { ThemeProvider } from "styled-components";
import RootRoute from "./routes/route";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootRoute />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
