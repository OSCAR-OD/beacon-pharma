import * as React from "react";
import {
  Avatar,
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { drawerWidth } from "../Theme/customizeTheme";
import DrawerHeaderSpace from "../Components/Header/DrawerHeaderSpace";
import logo from "/assets/images/header/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import SidebarMenuData from "../Data/SidebarMenuData";
import { useAuth } from "../Context/Auth/UseAuth";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

// Menu Item
const ListItemButtonStyle = styled(ListItemButton)(({ theme }) => ({
  '&.active': {
    backgroundColor: '#FFFFFF',
    '& .MuiListItemIcon-root': {
      color: '#007BFF',
    },
    '& .MuiListItemText-primary': {
      color: '#007BFF',
    },
  },
  '& .MuiListItemIcon-root': {
    color: '#000000',
  },
  '& .MuiListItemText-primary': {
    color: '#000000',
  },
  '&.MuiButtonBase-root:hover': {
    backgroundColor: 'rgba(0, 123, 255, 0.08)',
  },
  '&.openDropdown': {
    '& .MuiListItemIcon-root': {
      color: '#007BFF',
    },
    '& .MuiListItemText-primary': {
      color: '#007BFF',
    },
  },
  '&.Mui-selected': {
    backgroundColor: '#FFFFFF',
    '& .MuiListItemIcon-root': {
      color: '#000000',
    },
    '& .MuiListItemText-primary': {
      color: '#000000',
    },
  },
}));

function Sidebar({ open, handleDrawerToggle, width }) {
  const { user } = useAuth();
  const [subMenus, setSubMenus] = React.useState({
    cmsSubmenu: false,
  });

  const location = useLocation();

  const filteredSidebarMenuData = user?.role === "Sales Employee"
  ? SidebarMenuData.filter(item => item.id !== 1 && item.id !== 2 && item.id !== 48 && item.id !== 57 && item.id !== 64 && item.id !== 60 && item.id !== 67 && item.id !== 70)
  : user?.role === "Accounts Employee"
  ? SidebarMenuData.filter(item => item.id !== 0 && item.id !== 1 && item.id !== 2 && item.id !== 48 && item.id !== 57 && item.id !== 60 && item.id !== 67 && item.id !== 70)
  : user?.role === "Content Manager"
  ? SidebarMenuData.filter(item => item.id !== 0 && item.id !== 48 && item.id !== 57 && item.id !== 60 && item.id !== 64 && item.id !== 67 && item.id !== 70)
  : user?.role === "Back Office Associate"
  ? SidebarMenuData.filter(item =>  item.id !== 1 && item.id !== 2  && item.id !== 48 && item.id !== 57 && item.id !== 60 && item.id !== 64 && item.id !== 70)
  : user?.role === "Back Office Employee"
  ? SidebarMenuData.filter(item =>  item.id !== 1 && item.id !== 2  && item.id !== 48 && item.id !== 57 && item.id !== 60 && item.id !== 64 && item.id !== 70)
  : user?.role === "User" || "Admin" || "Super Admin"
  ? SidebarMenuData.filter(item => item.id !== 0 && item.id !== 60 && item.id !== 64 && item.id !== 67)
  :  SidebarMenuData;

  /// Close Sidebar
  const handleCloseSidebar = () => {
    if (window.innerWidth < 960 ) {  
      handleDrawerToggle();
    }
  };

  const handleOpenSubMenu = (menuText, isSubSubMenu = false) => {
    setSubMenus((prevState) => {
      const newState = { ...prevState };
      const currentValue = newState[menuText];
      // Close the submenu if it's already open
      if (currentValue && !isSubSubMenu) {
        newState[menuText] = false;
      } else {
        // Close all other submenus if it's not a subsubmenu
        if (!isSubSubMenu) {
          Object.keys(newState).forEach((keyItem) => {
            newState[keyItem] = false;
          });
        }
        newState[menuText] = !currentValue;
      }
      return newState;
    });
  };

  // Open sidebar for reload issue
  React.useEffect(() => {
    if (!user.role){
      return ;
    }
    if (location?.pathname?.startsWith("/cms")) {
      if (!subMenus?.cmsSubmenu) {
        setSubMenus({ ...subMenus, cmsSubmenu: true });
      }
    }

    // if (window.innerWidth > 960 && user?.role === "Back Office Employee") {  
    //   handleDrawerToggle();
    // }
  }, [location, user]);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        borderRight: "none",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
        overflowX: "hidden",
      }}
      PaperProps={{
        sx: {
          backgroundColor: "#F5F5F5",
          borderLeft: "1px solid #EAEFF5",
          overflowX: "hidden",
        },
      }}
      variant={width > 960 ? "persistent" : "temporary"}
      anchor="left"
      open={open}
      onClose={handleDrawerToggle}
    >
      <Box sx={{ textAlign: "center", padding: "24px 8px" }}>
        <Link to="/" state={"Dashboard"} onClick={handleCloseSidebar}>
          <Avatar
            src={logo}
            alt="user image"
            variant="square"
            sx={{
              maxWidth: "100%",
              maxHeight: 80,
              width: "auto",
              height: "auto",
              justifyContent: "center",
              mixBlendMode: "darken",
            }}
          />
        </Link>
      </Box>

      <List
        sx={{
          width: "100%",
          height: "calc(100vh - 72px)",
          overflow: "auto",
          scrollbarWidth: "none",
          overflowX: "hidden",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {filteredSidebarMenuData.map((item) => {
          if (item?.isSubMenus) {
            return (
              <React.Fragment key={item?.id}>
                <ListItemButtonStyle
                  key={item?.id}
                  state={item?.title}
                  onClick={() => {
                    handleOpenSubMenu(item?.menuText);
                    handleCloseSidebar();
                  }}
                  className={subMenus[item?.menuText] ? "openDropdown" : ""}
                >
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    {item?.icon}
                  </ListItemIcon>
                  <ListItemText primary={item?.title} />
                  {subMenus[item?.menuText] ? (
                    <BsChevronUp />
                  ) : (
                    <BsChevronDown />
                  )}
                </ListItemButtonStyle>
                <Collapse in={subMenus[item?.menuText]} key={`collapse-${item?.id}`}>
                  <Box sx={{ pl: 1 }}>
                    {item?.subMenus?.length > 0
                      ? item?.subMenus?.map((subItem) => {
                          if (subItem?.isSubSubMenu) {
                            return (
                              <React.Fragment key={subItem?.id}>
                                <ListItemButtonStyle
                                  key={subItem?.id}
                                  state={subItem?.title}
                                  onClick={() => {
                                    handleOpenSubMenu(subItem?.menuText, true);
                                    handleCloseSidebar();
                                  }}
                                  className={
                                    subMenus[subItem?.menuText]
                                      ? "openDropdown"
                                      : ""
                                  }
                                  // sx={{ paddingLeft: "30px" }} 
                                >
                                  <ListItemIcon sx={{ minWidth: 30 }}>
                                    {subItem?.icon}
                                  </ListItemIcon>
                                  <ListItemText primary={subItem?.title} />
                                  {subMenus[subItem?.menuText] ? (
                                    <BsChevronUp />
                                  ) : (
                                    <BsChevronDown />
                                  )}
                                </ListItemButtonStyle>
                                <Collapse in={subMenus[subItem?.menuText]} key={`subCollapse-${subItem?.id}`}>
                                  <Box sx={{ pl: 1 }}>
                                    {subItem?.subSubMenus?.length > 0 &&
                                      subMenus[subItem?.menuText] &&
                                      subMenus[subItem?.menuText] && (
                                        <Box sx={{ pl: 0 }}>
                                          {subItem?.subSubMenus.map(
                                            (subSubItem) => (
                                              <ListItemButtonStyle
                                                component={NavLink}
                                                to={`/${subSubItem?.path}`}
                                                key={subSubItem?.id}
                                                state={item?.title}
                                                onClick={handleCloseSidebar}
                                                sx={{ paddingLeft: "20px" }}
                                              >
                                                <ListItemIcon
                                                  sx={{ minWidth: 30 }}
                                                >
                                                  {subSubItem?.icon}
                                                </ListItemIcon>
                                                <ListItemText
                                                  primary={subSubItem?.title}
                                                />
                                              </ListItemButtonStyle>
                                            )
                                          )}
                                        </Box>
                                      )}
                                  </Box>
                                </Collapse>
                              </React.Fragment>
                            );
                          } else {
                            return (
                              <ListItemButtonStyle
                                component={NavLink}
                                to={`/${subItem?.path}`}
                                key={subItem?.id}
                                state={item?.title}
                                onClick={handleCloseSidebar}
                                sx={{ paddingLeft: "30px" }} // Adjust indentation
                              >
                                <ListItemIcon sx={{ minWidth: 30 }}>
                                  {subItem?.icon}
                                </ListItemIcon>
                                <ListItemText primary={subItem?.title} />
                              </ListItemButtonStyle>
                            );
                          }
                        })
                      : null}
                  </Box>
                </Collapse>
              </React.Fragment>
            );
          } else {
            return (
              <ListItemButtonStyle
                component={NavLink}
                to={`/${item?.path}`}
                key={item?.id}
                state={item?.title}
                onClick={handleCloseSidebar}
              >
                <ListItemIcon sx={{ minWidth: 30 }}>{item?.icon}</ListItemIcon>
                <ListItemText primary={item?.title} />
              </ListItemButtonStyle>
            );
          }
        })}
      </List>
    </Drawer>
  );
}

export default Sidebar;
