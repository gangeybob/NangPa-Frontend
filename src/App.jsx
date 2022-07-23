import styled, { ThemeProvider } from "styled-components";
import RootRoute from "./routes/route";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./theme/theme";

function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <RootRoute></RootRoute>
        <GlobalStyle></GlobalStyle>
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div``;
