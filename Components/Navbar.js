import styled from "@emotion/styled";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Nav = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  display: "flex",
  padding: "0",
  flexDirection: "row",
  alignItems: "center",
  color: "black",
  justifyContent: "center",
  position: "relative",
  right: "150px",
}));

function Navbar() {
  return (
    <AppBar>
      <StyledToolbar>
        <Typography
          variant="h6"
          position={"relative"}
          left={"150px"}
          fontWeight={"600"}
        >
          Aj Project
        </Typography>
        <Nav>
          <Button sx={{ margin: "5px" }}>Write</Button>
          <Button sx={{ margin: "5px" }}>Get started</Button>
          <Button sx={{ margin: "5px" }}>Connect</Button>
        </Nav>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
