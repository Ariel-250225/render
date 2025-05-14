import { useEffect, useState } from "react";
import "./App.css";
import { useDarkMode } from "usehooks-ts";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "./Style/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WindowContextProvider } from "./Context/WindowContext";
import { Header } from "./component/Frame/Header";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./page/Main";
import { GlobalStyled } from "./component/layouts/Layouts";
import { SmoothScroll } from "./component/Scroll";

const QUERY_CLIENT = new QueryClient();

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={darkMode ? defaultTheme : defaultTheme}>
      <QueryClientProvider client={QUERY_CLIENT}>
        <WindowContextProvider>
          <Header />
          <Toaster />
          <GlobalStyled />
          <SmoothScroll>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />}></Route>
            </Routes>
          </BrowserRouter>
          <footer style={{ height: 200 }}></footer>
          </SmoothScroll>
        </WindowContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
