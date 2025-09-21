// App.js
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

import getTheme from "./components/themes/Theme.js";
import MiniDrawer from "./components/MiniDrawer.jsx";
import { Route, Router, Routes, useLocation, useNavigate } from "react-router-dom";
import ErpProject from "./pages/ErpProject.jsx";
import TeacherAppProject from "./pages/TeacherAppProject.jsx";
import PosProject from "./pages/PosProject.jsx";
import { ArrowBack } from "@mui/icons-material";

export default function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [mode, setMode] = useState("light");
  const theme = getTheme(mode);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<MiniDrawer />} />
        <Route path='/erp' element={<ErpProject />} />
        <Route path='/teacher-app' element={<TeacherAppProject />} />
        <Route path='/pos' element={<PosProject />} />
      </Routes>
      {/* Go Back */}
      {['/erp', '/teacher-app', '/pos'].includes(pathname) && <Tooltip title="Go Back">
        <IconButton
          onClick={() => navigate(-1)}
          sx={{ position: "fixed", bottom: 16, left: 16 }}
          color="primary"
          aria-label="go back"
        >
          <ArrowBack />
        </IconButton>
      </Tooltip>}
      {/* Toggle Mode */}
      <Tooltip title="Toggle light/dark theme">
        <IconButton
          size="large"
          onClick={toggleTheme}
          sx={{ position: "fixed", bottom: 10, right: 10, zIndex: 10 }}
          color="primary"
          aria-label="toggle theme"
        >
          {mode === "light" ? <Brightness4 fontSize='inherit' /> : <Brightness7 fontSize='inherit' />}
        </IconButton>
      </Tooltip>
    </ThemeProvider>
  );
}
