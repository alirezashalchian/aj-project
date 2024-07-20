import styled from "@emotion/styled";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

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

function WriteNavbar() {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "" }}>
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
          <Button
            variant="contained"
            sx={{
              height: "30px",
              margin: "5px",
              borderRadius: "12px",
              width: "auto",
            }}
          >
            Publish
          </Button>
          <MoreHorizIcon sx={{ margin: "5px" }}></MoreHorizIcon>
          <AccountCircleOutlinedIcon sx={{ margin: "5px" }} />
        </Nav>
      </StyledToolbar>
    </AppBar>
  );
}

export default WriteNavbar;
