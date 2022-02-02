import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

import FirstViewCandidate from "./viewCandidate/firstViewCandidate.jsx";
import SecondViewCandidate from "./viewCandidate/SecondViewCandidate.jsx";
import ApplyFormView from "./viewCandidate/ApplyFormView.jsx";
import Candidates from "./ComponentsAdministrator/candidates.jsx";
import CreateJob from "./ComponentsAdministrator/CreateJob.jsx";
import OfferListAdmin from "./ComponentsAdministrator/OfferListAdmin.jsx";
import LoginAdm from "./ComponentsAdministrator/LoginAdm.jsx";

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
              element={<SecondViewCandidate />}
            />
            <Route path="apply-job" element={<ApplyFormView />} />
            <Route path="Login-Administrator" element={<LoginAdm />} />
            <Route path="table-candidates" element={<Candidates />} />
            <Route path="create-new-opportunity" element={<CreateJob />} />
            <Route path="offer-list-admin" element={<OfferListAdmin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
