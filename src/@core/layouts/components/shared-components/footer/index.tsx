// ** React Imports
import { ReactNode } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

// ** Type Import
import { Settings } from "src/@core/context/settingsContext";

// ** Footer Content Component
import FooterContent from "./FooterContent";
import { Grid, Link, Typography, colors } from "@mui/material";
import styles from "./styles.module.scss";

interface Props {
  settings: Settings;
  saveSettings: (values: Settings) => void;
  footerContent?: (props?: any) => ReactNode;
}

const Footer = (props: Props) => {
  // ** Props
  const { settings, footerContent: userFooterContent } = props;

  // ** Hook
  const theme = useTheme();

  // ** Vars
  const { contentWidth } = settings;

  return (
    <Box
      component="footer"
      className="layout-footer"
      sx={{
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#888",
      }}
    >
      {/* <Box
        className='footer-content-container'
        sx={{
          width: '100%',
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          padding: theme.spacing(4, 6),
          ...(contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } })
        }}
      >
        {userFooterContent ? userFooterContent(props) : <FooterContent />}
      </Box> */}

      <Box className="container">
        <Box className={styles.boxFooter}>
          <Box className={`${styles.item} ${styles.itemInfo}`}>
            <Typography variant="h4" style={{ color: "#fff" }}>
              Tro4U
            </Typography>
            <p>
              Trọ 4U là phần mềm quản lý phòng trọ miễn phí, giúp anh chị có thể
              quản lý được hợp đồng, hóa đơn, nhân viên 1 cách dễ dàng.
            </p>
          </Box>

          <Box className={`${styles.item} ${styles.itemLink}`}>
            <Typography className={styles.titleItem}>Liên kết</Typography>
            <Box className={styles.listLink}>
              <Link href="#">Hợp tác</Link>
              <Link href="#">Điều khoản</Link>
            </Box>
          </Box>

          <Box className={`${styles.item} ${styles.itemContact}`}>
            <Typography className={styles.titleItem}>Liên hệ</Typography>
            <Box className={styles.listInfo}>
              <p>Văn phòng: 41 An Nhơn, F17 Gò Vấp, TP.HCM</p>
              <p>Email: nhatro4u@gmail.com</p>
              <p>Điện thoại: 0907771881</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
