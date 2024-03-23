//import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import { darkTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Upload from "./pages/Upload";
import BigScreen from './components/BigScreen';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <BrowserRouter>
          <Main>
            <Navbar />
            {/* Move BigScreen inside the Routes to only display on the home page */}
            <Routes>
              <Route path="/" element={
                <>
                  <BigScreen /> {/* BigScreen is now part of the home route */}
                  <Wrapper>
                    <Home />
                  </Wrapper>
                </>
              } />
              <Route path="upload" element={
                <Wrapper>
                  <Upload />
                </Wrapper>
              } />
              <Route path="video/:id" element={
                <Wrapper>
                  <Video />
                </Wrapper>
              } />
            </Routes>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
};

export default App;