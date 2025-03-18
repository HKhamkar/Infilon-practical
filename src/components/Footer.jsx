import React from "react";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import FooterLogo from "../assets/svgs/FooterLogo";
import { Link, useLocation } from "react-router-dom";
import Facebook from "../assets/svgs/Facebook";
import LinkedIn from "../assets/svgs/LinkedIn";
import Instagram from "../assets/svgs/Instagram";

const footerNav = [
  {
    name: "FAQ",
    url: "/faq",
  },
  {
    name: "Privacy",
    url: "/privacy",
  },
  {
    name: "Support",
    url: "/support",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const Footer = () => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Box
      sx={{
        display: "inline-block",
        width: "100%",
        py: "24px",
        background: theme.palette.text.primary,
      }}
    >
      <Container>
        <Stack
          direction={{ sx: "column", sm: "row" }}
          alignItems="center"
          justifyContent="space-between"
          mb="36px"
        >
          <Stack
            direction={{ sx: "column", sm: "row" }}
            alignItems="center"
            spacing={4}
          >
            <Stack
              direction="row"
              component={Link}
              to="/"
              sx={{ marginBottom: { xs: "4px", sm: "0px" } }}
            >
              <FooterLogo />
            </Stack>

            <Stack
              direction="row"
              spacing={4}
              sx={{ marginTop: "10px !important" }}
            >
              {footerNav.map((item, index) => (
                <Box
                  key={item.name}
                  color="text.white"
                  component={Link}
                  to={item.url}
                  sx={{
                    fontSize: {
                      sm: "14px",
                      md: "16px",
                    },
                    fontWeight: 400,
                    padding: 0,
                    paddingBottom: 0.1,
                    borderBottom: "2px solid transparent",
                    borderColor: location.pathname === item.url && "text.white",
                    borderRadius: 0,
                    textDecoration: "none",
                    "&:hover": {
                      borderColor: "text.white",
                    },
                  }}
                >
                  {item.name}
                </Box>
              ))}
            </Stack>
          </Stack>

          <Stack
            spacing={3}
            alignItems="center"
            direction="row"
            sx={{ marginTop: { xs: "18px", sm: "0px" } }}
          >
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
              }}
            >
              <Facebook />
            </Box>
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
              }}
            >
              <Instagram />
            </Box>
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
              }}
            >
              <LinkedIn />
            </Box>
          </Stack>
        </Stack>

        <Typography
          variant="h6"
          color="text.footerText"
          sx={{
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          © 2024 Central Texas Fly Fishing All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
