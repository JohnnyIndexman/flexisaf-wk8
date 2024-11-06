import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import  { styled } from "@mui/material/styles";

function Header() {

  const ToolStyle = styled("div")(({ theme }) => ({
    style:{
        height: theme.mixins.toolbar.height
    }
}))

  return (
    <Box sx={{ position: "relative", zIndex: 1100 }}>
      <AppBar
        // position="fixed"
        variant="permanent"
        sx={{ mb: "50px", backgroundColor: "secondary.main", top: 0 }}
      >
        <ToolStyle />
        <Toolbar>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            IndexBlogs
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
