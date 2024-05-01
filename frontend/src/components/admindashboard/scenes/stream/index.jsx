import { Box } from "@mui/material";
import { Header, StreamChart } from "src/components/admindashboard/";

const Stream = () => {
  return (
    <Box m="20px">
      <Header title="Stream Chart" subtitle="Simple Stream Chart" />
      <Box height="75vh">
        <StreamChart />
      </Box>
    </Box>
  );
};

export default Stream;
