import { BrowserRouter, Route, Routes } from "react-router-dom";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import AppMainBar from "./components/AppBar";
import SideMenu from "./components/SideMenu";

import HomePage from "./pages/Home";

const App = () => {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppMainBar drawerWidth={drawerWidth} />
      <SideMenu drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
};

export default App;
