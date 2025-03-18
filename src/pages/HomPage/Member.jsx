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
import member_img_1 from "../../assets/images/member-img-1.png";
import member_img_2 from "../../assets/images/member-img-2.png";
import member_img_3 from "../../assets/images/member-img-3.png";
import member_img_4 from "../../assets/images/member-img-4.png";
import CustomButton from "../../components/CustomButton";

const MemberData = [
  {
    title: "John’s Story",
    description:
      "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh",
    imgUrl: member_img_1,
  },
  {
    title: "The Journey",
    description:
      "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    imgUrl: member_img_2,
  },
  {
    title: "Catch Day",
    description:
      "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
    imgUrl: member_img_3,
  },
  {
    title: "Trout Tales",
    description:
      "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
    imgUrl: member_img_4,
  },
];

const Member = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "inline-block",
        width: "100%",
        py: { xs: "40px", sm: "80px" },
      }}
    >
      <Container>
        <Stack mb="24px">
          <Typography
            variant="h1"
            color="text.primary"
            sx={{
              fontSize: { xs: "40px", md: "48px" },
              fontWeight: 600,
            }}
          >
            Member stories
          </Typography>
        </Stack>

        <Grid
          container
          rowSpacing={{ xs: 0, sm: 5 }}
          columnSpacing={{ xs: 0, sm: 10 }}
        >
          {MemberData.map((item, idx) => {
            const lastIndex = MemberData.length - 1;

            return (
              <Grid size={{ xs: 12, md: 6 }} key={idx}>
                <Box
                  sx={{
                    display: { xs: "none", sm: "inline-block" },
                    width: "100%",
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 5 }}>
                      <CardMedia
                        component="img"
                        sx={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                        image={item.imgUrl}
                        alt={item.imgUrl}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 7 }}>
                      <Stack height="100%" sx={{ my: "2px" }}>
                        <Typography
                          variant="h1"
                          color="text.primary"
                          sx={{
                            fontSize: { xs: "32px", sm: "28px", md: "32px" },
                            mb: "6px",
                            fontFamily: "Gluten, cursive",
                          }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: "14px",
                            mb: "37px",
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
                            Read more
                          </CustomButton>
                        </Box>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>

                <Stack
                  sx={{
                    display: { xs: "flex", sm: "none" },
                    py: "32px",
                    borderTop: "1px solid",
                    borderColor: theme.palette.primary.lightButtonBorderGrey,
                    ...(idx === lastIndex && {
                      borderBottom: `1px solid ${theme.palette.primary.lightButtonBorderGrey}`,
                    }),
                  }}
                  key={idx}
                >
                  <Typography
                    variant="h1"
                    color="text.primary"
                    sx={{
                      fontSize: { xs: "32px", sm: "28px", md: "32px" },
                      mb: "6px",
                      fontFamily: "Gluten, cursive",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Grid container spacing={2} mb="16px">
                    <Grid size={{ xs: 4 }}>
                      <CardMedia
                        component="img"
                        sx={{
                          width: "100%",
                          height: "100px",
                          objectFit: "cover",
                        }}
                        image={item.imgUrl}
                        alt={item.imgUrl}
                      />
                    </Grid>
                    <Grid size={{ xs: 8 }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: "16px",
                          mb: "37px",
                          fontWeight: 400,
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 4,
                          overflow: "hidden",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Box sx={{ display: "flex" }}>
                    <CustomButton
                      variant="outlined"
                      sx={{
                        background: "transparent",
                        color: theme.palette.text.primary,
                        borderColor: theme.palette.primary.lightBorderGrey,
                      }}
                    >
                      Read more
                    </CustomButton>
                  </Box>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Member;
