import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import TopMenu from "./components/TopMenu";
import { Outlet } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#27A388",
    },
    secondary: {
      main: "#e83946",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopMenu />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
