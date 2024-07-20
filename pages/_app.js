import "@fontsource/poppins";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "../styles/globals.css";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
