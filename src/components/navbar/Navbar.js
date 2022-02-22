import { useEffect, useState } from "react";
import clsx from "clsx";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LoginIcon from "@mui/icons-material/Login";
import { makeStyles } from "@mui/styles";

// import "./navbar.css";

const MyTab = styled(Tab)({
  color: "white",
});

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    zIndex: 2,
    "&.nav__black": {
      backgroundColor: "black",
    },
  },
});

function Navbar() {
  const classes = useStyles();

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div>
      <Box
        sx={{ width: "100%" }}
        className={clsx(
          classes.root,
          classes.nav__black,
          `root ${show && "nav__black"}`
        )}
      >
        <Tabs
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
        >
          <img
            style={{ height: "25px", padding: "15px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <MyTab label="Homepage" />
          <MyTab label="Series" />
          <MyTab label="Movies" />
          <MyTab label="New and Popular" />
          <MyTab label="My List" />
        </Tabs>
        <Tabs aria-label="icon tabs example">
          <MyTab icon={<SearchIcon />} aria-label="search" />
          <MyTab icon={<NotificationsIcon />} aria-label="notification" />
          <MyTab icon={<LoginIcon />} aria-label="login" />
        </Tabs>
      </Box>
    </div>
  );
}

export default Navbar;
