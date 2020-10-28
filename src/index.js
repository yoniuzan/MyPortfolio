import React from "react";
import ReactDOM from "react-dom";

import App from "../src/components/App";
//import GlobalStyles from "./styles/global.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement
);
