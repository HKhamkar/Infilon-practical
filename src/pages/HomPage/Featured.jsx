import React, { useState } from "react";
import {
  Box,
  CardMedia,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { GoChevronDown } from "react-icons/go";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import feature_img_1 from "../../assets/images/feature-img-1.png";
import feature_img_2 from "../../assets/images/feature-img-2.png";
import feature_img_3 from "../../assets/images/feature-img-3.png";
import feature_img_4 from "../../assets/images/feature-img-4.png";
import CustomButton from "../../components/CustomButton";

const FeaturedData = [
  {
    title: "Explore Fly Fishing",
    description:
      "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    imgUrl: feature_img_2,
  },
  {
    title: "Fly Fishing Experiences",
    description:
      "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
    imgUrl: feature_img_3,
  },
  {
    title: "Gear Up and Catch More",
    description:
      "In metus vulputate eu scelerisque felis imperdiet. Nunc scelerisque viverra mauris in aliquam sem. S",
    imgUrl: feature_img_4,
  },
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
  border: "none",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<GoChevronDown size={24} color="black" />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(180deg)",
    },
  padding: 0,
  borderBottom: `1px solid #969491`,
  background: theme.palette.background.lighter,
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  background: theme.palette.background.lighter,
}));

const Featured = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState("panel0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        display: "inline-block",
        width: "100%",
        py: { xs: "40px", sm: "80px" },
        background: theme.palette.background.lighter,
      }}
    >
      <Container>
        <Stack>
          <Typography
            variant="h1"
            color="text.primary"
            sx={{
              fontSize: { xs: "40px", md: "48px" },
              fontWeight: 600,
              mb: "24px",
            }}
          >
            Featured options
          </Typography>
        </Stack>

        <Box
          sx={{ display: { xs: "none", sm: "inline-block" }, width: "100%" }}
        >
          {FeaturedData.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary
                aria-controls={`panel${index}d-content`}
                id={`panel${index}d-header`}
              >
                <Typography sx={{ fontSize: "20px" }} component="span">
                  {item.title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 5 }}>
                    <CardMedia
                      component="img"
                      sx={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                      }}
                      image={feature_img_1}
                      alt={item.title}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 7 }}>
                    <Stack
                      justifyContent="center"
                      height="100%"
                      sx={{ my: "2px" }}
                    >
                      <Typography
                        variant="h1"
                        color="text.primary"
                        sx={{
                          fontSize: { xs: "28px", md: "32px" },
                          fontWeight: 600,
                          mb: "8px",
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: "20px" },
                          mb: "8px",
                          fontWeight: 400,
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 3,
                          overflow: "hidden",
                        }}
                      >
                        {item.description}
                      </Typography>

                      <Box sx={{ display: "flex" }}>
                        <CustomButton
                          variant="contained"
                          sx={{
                            background: theme.palette.primary.lightGrey,
                            color: theme.palette.text.primary,
                          }}
                        >
                          Learn more
                        </CustomButton>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Stack gap="24px" sx={{ display: { xs: "flex", sm: "none" } }}>
          {FeaturedData.map((item, idx) => (
            <Box
              sx={{
                display: "flex",
                width: "100%",
                backgroundImage: `url(${item.imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              key={idx}
            >
              <Stack sx={{ p: "24px" }}>
                <Typography
                  variant="h1"
                  color="text.primary"
                  sx={{
                    fontSize: "32px",
                    fontWeight: 600,
                    mb: "8px",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "20px" },
                    mb: "8px",
                    fontWeight: 400,
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 4,
                    overflow: "hidden",
                  }}
                >
                  {item.description}
                </Typography>

                <Box sx={{ display: "flex" }}>
                  <CustomButton
                    variant="contained"
                    sx={{
                      background: theme.palette.primary.lightGrey,
                      color: theme.palette.text.primary,
                    }}
                  >
                    Learn more
                  </CustomButton>
                </Box>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Featured;
