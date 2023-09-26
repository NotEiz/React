import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import styled from "@emotion/styled";
import HelpIcon from "@mui/icons-material/Help";
import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const StyledAppBar = styled(AppBar)`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const StyledAvatar = styled(Avatar)`
  margin: 0.5rem 2rem;
`;

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [value, setValue] = useState("1");

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChange = (SyntheticEvent) => {
    setValue(value);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar disableGutters>
        <Box sx={{ display: "flex", alignSelf: "center" }}>
          <Button variant="default">Go to docs</Button>

          <IconButton sx={{ display: "block" }} size="medium" color="inherit">
            <NotificationsIcon />
          </IconButton>

          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <StyledAvatar alt="Remy Sharp" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
      <Box
        sx={{
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          p: "0 2rem",
          width: "100%",
        }}
      >
        <Typography variant="h4">Authentication</Typography>
        <Box sx={{ display: "flex" }}>
          <Button
            sx={{
              color: "white",
              border: "1px solid white",
              borderRadius: "10px",
              p: "0 0.8rem",
            }}
            variant="outlined"
          >
            Web setup
          </Button>
          <IconButton
            sx={{ display: "block", textAlign: "center", lineHeight: 1 }}
            size="medium"
            color="inherit"
          >
            <HelpIcon />
          </IconButton>
        </Box>
      </Box>

      <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </StyledAppBar>
  );
};
export default ResponsiveAppBar;
