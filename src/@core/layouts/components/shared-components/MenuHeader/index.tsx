import GroupsIcon from "@mui/icons-material/Groups";
import HomeIcon from "@mui/icons-material/Home";
import PaidIcon from "@mui/icons-material/Paid";
import BarChartIcon from "@mui/icons-material/BarChart";
import TokenIcon from "@mui/icons-material/Token";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.scss";

const pages_ = [
  {
    name: "Home",
    icon: <HomeIcon />,
    url: "/",
    sub: false,
  },
  {
    name: "Khách",
    icon: <GroupsIcon />,
    url: "/Customer",
    sub: false,
  },
  {
    name: "Tiền",
    icon: <PaidIcon />,
    url: "/Money",
    sub: false,
  },
  {
    name: "Báo cáo",
    icon: <BarChartIcon />,
    url: "/Report",
    sub: true,
    listSub: [
      {
        nameSub: "Khách hàng",
      },
      {
        nameSub: "Thu chi",
      },
    ],
  },
  {
    name: "Quản lý",
    icon: <TokenIcon />,
    url: "/Manager",
    sub: true,
    listSub: [
      {
        nameSub: "Quản lý khách",
      },
      {
        nameSub: "Quản lý thu chi",
      },
    ],
  },
];

function MenuHeader() {
  const router = useRouter();
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
    <Box
      className={styles.boxMenu}
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        alignItems: "center",
      }}
    >
      <ul>
        {pages_.map((menu) =>
          menu.sub == false ? (
            <li className={router.pathname == menu.url ? styles.active : ""}>
              <Link
                className={styles.item}
                href={menu.url}
                key={menu.name}
                sx={{
                  my: 2,
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  columnGap: "5px",
                }}
              >
                {menu.icon} {menu.name}
              </Link>
            </li>
          ) : (
            <li className={router.pathname == menu.url ? styles.active : ""}>
              <Link className={styles.itemSub} href={menu.url}>
                {menu.icon} {menu.name}
                <Box className={styles.subMenu}>
                  {menu.listSub?.map((item) => (
                    <Link href="#a">{item.nameSub}</Link>
                  ))}
                </Box>
              </Link>
            </li>
          )
        )}
      </ul>
    </Box>
  );
}

export default MenuHeader;
