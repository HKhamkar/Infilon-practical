import { Box } from "@mui/material";
import Banner from "./Banner";
import Featured from "./Featured";
import Member from "./Member";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <Box sx={{ display: "inline-block", width: "100%" }}>
      <Banner />
      <Featured />
      <Member />
      <Footer />
    </Box>
  );
};

export default Home;
