import { Box, Button, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { ContentCut } from "mdi-material-ui";
import React from "react";
import PaidIcon from "@mui/icons-material/Paid";
import GroupsIcon from "@mui/icons-material/Groups";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";

const pages_ = [
  {
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    name: "Khách",
    icon: <GroupsIcon />,
  },
  {
    name: "Tiền",
    icon: <PaidIcon />,
  },
];

function MenuHeader() {
  let currentlyHovering = false;

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event: any) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleHover() {
    currentlyHovering = true;
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleCloseHover() {
    currentlyHovering = false;
    setTimeout(() => {
      if (!currentlyHovering) {
        handleClose();
      }
    }, 50);
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages_.map((page, n) => (
          <Button
            key={page.name}
            // onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "#000", display: "flex", alignItems: "center" }}
          >
            {page.icon}
            {page.name}
          </Button>
        ))}

        <Button>
          <AssessmentIcon />
        </Button>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          onMouseOver={handleClick}
          onMouseLeave={handleCloseHover}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            onMouseEnter: handleHover,
            onMouseLeave: handleCloseHover,
            style: { pointerEvents: "auto" },
          }}
          // getContentAnchorEl={null}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          style={{ pointerEvents: "none" }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
    </div>
  );
}

export default MenuHeader;
