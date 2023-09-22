// ** React Imports
import * as React from "react";

// Icons
import GroupsIcon from "@mui/icons-material/Groups";
import HomeIcon from "@mui/icons-material/Home";
import PaidIcon from "@mui/icons-material/Paid";
import BarChartIcon from "@mui/icons-material/BarChart";
import TokenIcon from "@mui/icons-material/Token";

// ** MUI Imports
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const MenuMobile = () => {
  const router = useRouter();
  const [value, setValue] = React.useState(0);

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

  return (
    <Box className={styles.menuMobile}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {pages_.map((menu) => (
          <BottomNavigationAction
            className={
              router.pathname == menu.url ? `${styles.active}` : "aaaa"
            }
            value={menu.url}
            label={menu.name}
            icon={menu.icon}
            href={menu.url}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default MenuMobile;
