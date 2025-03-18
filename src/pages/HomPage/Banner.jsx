import React from "react";
import {
  Box,
  CardMedia,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import bannerImg from "../../assets/images/banner-img.jpg";
import bannerImg2 from "../../assets/images/banner-img-2.png";
import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";

const Banner = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "inline-block",
          width: "100%",
          marginBottom: { xs: "0px", sm: "80px" },
        }}
      >
        <Header />
      </Box>

      <Box
        sx={{
          display: { xs: "inline-block", sm: "none" },
          width: "100%",
          mb: "40px",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
          }}
          image={bannerImg2}
          alt="bannerImg2"
        />
      </Box>

      <Container>
        <Box
          sx={{
            display: "inline-block",
            width: "100%",
            mb: { xs: "40px", sm: "80px" },
          }}
        >
          <Grid container spacing={1}>
            <Grid size={{ xs: 12, sm: 7, md: 8 }}>
              <Stack justifyContent="center" height="100%">
                <Typography
                  variant="h1"
                  color="text.primary"
                  sx={{ fontSize: { xs: "40px", md: "56px" }, fontWeight: 600 }}
                >
                  Central Texas
                </Typography>

                <Typography
                  variant="h1"
                  color="text.primary"
                  sx={{
                    fontSize: { xs: "40px", md: "56px" },
                    fontWeight: 600,
                    mb: "16px",
                  }}
                >
                  Fly Fishing
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "20px" },
                    mb: "16px",
                    fontWeight: 400,
                  }}
                >
                  At lacus vitae nulla sagittis scelerisque nisl. Pellentesque
                  duis cursus vestibulum, facilisi ac, sed faucibus.
                </Typography>

                <Box sx={{ display: "flex" }}>
                  <CustomButton
                    variant="contained"
                    sx={{ background: theme.palette.primary.main }}
                  >
                    Get started
                  </CustomButton>
                </Box>
              </Stack>
            </Grid>

            <Grid
              size={{ xs: 12, sm: 5, md: 4 }}
              display={{ xs: "none", sm: "flex" }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
                image={bannerImg}
                alt="banner_img"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Banner;
