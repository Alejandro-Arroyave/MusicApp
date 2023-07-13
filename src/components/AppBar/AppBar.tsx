import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface AppMainBarProps {
  drawerWidth: number;
}

export const AppMainBar = ({ drawerWidth }: AppMainBarProps) => {
  console.log(drawerWidth);
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="go-back"
              sx={{ mr: 2 }}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="go-back"
              sx={{ mr: 2 }}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </div>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="go-back"
            sx={{ mr: 2 }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppMainBar;
