import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import MessageIcon from "@mui/icons-material/Message";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Col, Row } from "reactstrap";
import CableIcon from "@mui/icons-material/Cable";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HelpIcon from "@mui/icons-material/Help";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "./Dashboard.css";
const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const avatarStyle = {
    color: "#68CD02 ",
    height: "15px",
  };
  const dashAvatar = {
    background: "#530395 ",
    margin: "20px",
  };
  const drawer = (
    <div style={{ background: "white" }}>
      <Box>
        <Row style={{ display: "flex", background: " " }}>
          <Col></Col>
          <Col>
            <Typography
              style={{
                // marginTop: "30px",
                marginLeft: "10px",
                color: "black",
                fontWeight: "bolder",
                fontSize: "30px",
              }}
            >
              <MedicationLiquidIcon style={{ color: "#037FDC " }} /> Zendenta
            </Typography>
            <span
              style={{
                color: "gray",
                fontSize: "10px",
                //   marginBottom: "50px",
              }}
            >
              cobut gigi tonpa sokit
            </span>
          </Col>
        </Row>
      </Box>

      <List style={{ backgroundColor: "white" }}>
        <ListItem
          style={{ color: "black", padding: "10px,10px", marginTop: "20px" }}
        >
          <CableIcon style={{ color: "black" }} />
          <span style={{ marginLeft: "10px" }}>overview</span>{" "}
        </ListItem>
        <ListItem style={{ color: "black", marginTop: "20px" }}>
          <CalendarTodayIcon style={{ color: "black" }} />
          <span style={{ marginLeft: "10px" }}>Calender</span>
        </ListItem>
        <ListItem style={{ color: "black", marginTop: "20px" }}>
          <AccessibilityIcon style={{ color: "black" }} />
          <span style={{ marginLeft: "10px" }}>Patient List</span>{" "}
        </ListItem>
        <ListItem style={{ color: "black", marginTop: "20px" }}>
          <MessageIcon style={{ color: "black" }} />
          <span style={{ marginLeft: "10px" }}>Message</span>{" "}
        </ListItem>
        <ListItem style={{ color: "black", marginTop: "20px" }}>
          <MonetizationOnIcon style={{ color: "black" }} />
          <span style={{ marginLeft: "5px" }}>payment information</span>{" "}
        </ListItem>
        <ListItem style={{ color: "black", marginTop: "20px" }}>
          <SettingsOutlinedIcon style={{ color: "black" }} />
          <span style={{ marginLeft: "10px" }}>Setting</span>
        </ListItem>
      </List>
      <div className="helpDiv">
        <ListItem style={{ color: "gray", marginTop: "200px" }}>
          <HelpIcon style={{ color: "gray" }} />
          <span style={{ marginLeft: "10px" }}>Help?</span>
        </ListItem>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  React.useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <Box>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          ></AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box>{/* <Profile></Profile> */}</Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 0,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <Typography paragraph>content here</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
