import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";

const NotFound = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h3" color="primary" gutterBottom>
        Coming Soon
      </Typography>
      <Typography variant="h6" color="textSecondary">
        This page is under development. Stay tuned!
      </Typography>

      <CustomButton
        variant="contained"
        sx={{ background: theme.palette.primary.main, mt: 3 }}
        onClick={() => navigate("/")}
      >
        Go Back to Home
      </CustomButton>
    </Box>
  );
};

export default NotFound;
