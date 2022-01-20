import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import FirstViewCandidate from "./viewCandidate/firstViewCandidate.jsx";
import OpportunityDetailsView from "./viewCandidate/OpportunityDetailsView.jsx";
import ApplyFormView from "./viewCandidate/ApplyFormView.jsx";

const primaryMainColor = grey[900];

const theme = createTheme({
  palette: {
    primary: {
      main: primaryMainColor,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FirstViewCandidate />} />
            <Route
              path="opportunity-detail/:id"
              element={<OpportunityDetailsView />}
            />
            <Route path="apply" element={<ApplyFormView />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
