import * as React from "react";
import { useLocation } from "react-router-dom";
import { useLayoutEffect, useEffect, useState, useReducer, startTransition } from "react";
import { useNavigate } from 'react-router-dom';
import { drawerWidth, windowBreak } from "../Theme/customizeTheme";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { MdOutlineNotificationsNone } from "react-icons/md";
import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import barIcon from "/assets/icons/bar_icon.svg";
import alertIcon from "/assets/icons/alert-circle.svg";
import notificationIcon from "/assets/icons/notification-03.svg";
import userImage from "/assets/images/user_img.png";
import HeaderTitle from "../Components/Title/HeaderTitle";
import useWindowDimensions from "../Hooks/Theme/useWindowDimensions";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { userMenuStyle } from "../Style/CustomStyle";
import { useAuth } from "../Context/Auth/UseAuth";
import { fetchReducer, getApiHandler, initialFetchData } from '../lib/axios/ApiHelper';
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open &&
    window.innerWidth > windowBreak && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Header({ open, handleDrawerToggle }) {
  const IMG_URL = "https://api.neemsah.com";
  const navigate = useNavigate();
  const [{ isLoading, isError, errorMessage, fetchData }, dispatch] = useReducer(fetchReducer, initialFetchData);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("Neemsah");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [totalRequested, setTotalRequested] = useState(0);
  // Context
  const { signOut, user } = useAuth();
  //console.log("user", user);
  // User menu dropdown
  const openMenu = Boolean(anchorEl);

  // Show Menu Dropdown
  const handleShowMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Hide Menu Dropdown
  const handleHideMenu = () => {
    setAnchorEl(null);
  };

  // Sing out
  const handleLogOut = () => {
    handleHideMenu();
    signOut();
  };

  const handleNotification = () => {
    handleHideMenu(); 
    setTimeout(() => {
      navigate("/notifications");
    }, 200);
  };

  const getData = async () => {
    dispatch({ type: 'LOADING' });
    const res = await getApiHandler(`/admin/sales/getVisitNotifications`);
    if (res?.success) {
      const dataFormat = res.data;
      setTotalRequested(dataFormat.totalRequested); // Set totalRequested from the API response
      dispatch({ type: 'LOADED', dataFormat });
    } else {
      const errorFormat = res?.response?.status === 404 ? 'Data not found' : 'Something went wrong. Please refresh the page or login again.';
      dispatch({ type: 'ERROR', errorFormat });
    }
  };

  // Change Header Title
  const location = useLocation();

  useLayoutEffect(() => {
    if (location?.pathname === "/") {
      setHeaderTitle(location?.state || "Neemsah");
    } else {
      setHeaderTitle(location?.state || "Neemsah");
    }
  }, [location]);

  useEffect(() => {
    startTransition(() => {
      getData();
    })
  }, [shouldFetch]);
  return (
    <div>
      <AppBar
        position="fixed"
        open={open}
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "1px solid #EAEFF5",
          padding: { xs: "0 21px", sm: "0 28px" },
          minHeight: 72,
        }}
      >
        <Toolbar
          sx={{ gap: { xs: "8px 5px", sm: "0 21px" }, padding: "0 !important" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
          >
            <Box component={"img"} src={barIcon} alt="Bar icon" />
          </IconButton>
          <HeaderTitle text={headerTitle} />
        </Toolbar>
        <Stack
          direction={"row"}
          gap={"10px 21px"}
          flexWrap={"wrap"}
          alignItems={"center"}
        >
          <Box sx={{ ml: -1.5, display: { xs: "none", sm: "block" } }}>
            <IconButton onClick={handleShowMenu}>
              <Avatar
                src={user?.image?.path ? `${IMG_URL}/${user.image.path}` : userImage}
                // src={userImage}
                alt="user image"
                sx={{ width: 40,
                      height: 40,   
                      objectFit: 'contain'
                    }}
              />
            </IconButton>
          </Box>
        </Stack>
      </AppBar>

      {/* User Dropdown Menu  */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openMenu}
        onClose={handleHideMenu}
        onClick={handleHideMenu}
        PaperProps={userMenuStyle}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Typography variant="body1" sx={{ fontSize: "14px" }}>{user.name}</Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="body2">Role: {user.role}</Typography>
        </MenuItem>
        {/* <MenuItem onClick={handleHideMenu}>
          <ListItemIcon>
            <MdOutlineNotificationsNone size={22} />
          </ListItemIcon>
          Notification {totalRequested}
        </MenuItem> */}
        {user.role=='Back Office Employee' &&
        <MenuItem onClick={handleNotification}>
          <ListItemIcon>
            <MdOutlineNotificationsNone size={22} />
          </ListItemIcon>
          Notification {totalRequested}
        </MenuItem>
        }
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <BiLogOut size={22} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Header;
