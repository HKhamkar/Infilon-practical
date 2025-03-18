import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { CgMenu } from "react-icons/cg";
import Logo from "../assets/svgs/Logo";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const mainNav = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About us",
    url: "/about",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {mainNav.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              to={item.url}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" position="static" color="background">
        <Container sx={{ padding: "0 !important" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
              }}
            >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Logo />
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Gluten, cursive",
                  display: {
                    xs: "none",
                    sm: "inline-block",
                  },
                }}
                color="primary.main"
              >
                Central Texas Fly Fishing
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {mainNav.map((item) => (
                <Button
                  key={item.name}
                  color="text.primary"
                  component={Link}
                  to={item.url}
                  sx={{ fontSize: "16px" }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <CgMenu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default Header;
