import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
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
  Container,
} from "@mui/material";
import { CgMenu } from "react-icons/cg";
import Logo from "../assets/svgs/Logo";

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
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography component={Link} to="/" variant="h6" sx={{ my: 2 }}>
        <Logo />
      </Typography>
      <Divider />
      <List>
        {mainNav.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              to={item.url}
              selected={location.pathname === item.url}
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
      <AppBar
        component="nav"
        position="static"
        color="background.default"
        sx={{ boxShadow: "none" }}
      >
        <Container sx={{ padding: "0 !important" }}>
          <Toolbar sx={{ justifyContent: "space-between", py: 0.5 }}>
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
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                }}
              >
                <Box display={{ xs: "none", sm: "inline-block" }}>
                  <Logo />
                </Box>
                <Box display={{ xs: "inline-block", sm: "none" }} mt={0.5}>
                  <Logo height="34" />
                </Box>
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Gluten, cursive",
                  display: {
                    xs: "none",
                    sm: "inline-block",
                  },
                  fontSize: {
                    sm: "16px",
                    md: "20px",
                  },
                }}
                color="primary.main"
              >
                Central Texas Fly Fishing
              </Typography>
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: { sm: "12px", md: "24px" },
              }}
            >
              {mainNav.map((item) => (
                <Box
                  key={item.name}
                  color="text.primary"
                  component={Link}
                  to={item.url}
                  sx={{
                    fontSize: {
                      sm: "14px",
                      md: "16px",
                    },
                    fontWeight: 400,
                    padding: 0,
                    paddingBottom: 0.2,
                    borderBottom: "2px solid transparent",
                    borderColor:
                      location.pathname === item.url && "text.primary",
                    borderRadius: 0,
                    textDecoration: "none",
                    "&:hover": {
                      borderColor: "text.primary",
                    },
                  }}
                >
                  {item.name}
                </Box>
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
