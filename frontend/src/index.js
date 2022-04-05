import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Container } from "react-bootstrap";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import store from "./state/store";
import theme from "./utils/theme";
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <Home />
        </Container>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
