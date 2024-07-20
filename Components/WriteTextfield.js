import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const Container = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "100vw",
  marginTop: "64px",
}));

function WriteTextfield() {
  return (
    <Container>
      <TextField
        fullWidth
        multiline
        minRows={10}
        maxRows={Infinity}
        placeholder="Tell your story"
        variant="outlined"
      />
    </Container>
  );
}

export default WriteTextfield;
