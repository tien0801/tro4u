// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Fab from "@mui/material/Fab";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// ** Icons Imports
import ArrowUp from "mdi-material-ui/ArrowUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GridViewIcon from "@mui/icons-material/GridView";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";

// ** Theme Config Import
import themeConfig from "src/configs/themeConfig";

// ** Type Import
import { LayoutProps } from "src/@core/layouts/types";

// ** Components
import AppBar from "./components/vertical/appBar";
import Navigation from "./components/vertical/navigation";
import Footer from "./components/shared-components/footer";
import ScrollToTop from "src/@core/components/scroll-to-top";

// ** Styled Component
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";
import { Button, Divider, Link, Stack, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import MenuMobile from "./components/vertical/menuMobile";

const VerticalLayoutWrapper = styled("div")({
  height: "100%",
  display: "flex",
});

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
});

const ContentWrapper = styled("main")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  padding: theme.spacing(6),
  transition: "padding .25s ease-in-out",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const VerticalLayout = (props: LayoutProps) => {
  // ** Props
  const { settings, children, scrollToTop } = props;

  // ** Vars
  const { contentWidth } = settings;
  const navWidth = themeConfig.navigationSize;

  // ** States
  const [navVisible, setNavVisible] = useState<boolean>(false);

  // ** Toggle Functions
  const toggleNavVisibility = () => setNavVisible(!navVisible);

  return (
    <>
      <VerticalLayoutWrapper className="layout-wrapper">
        <MainContentWrapper className="layout-content-wrapper">
          {/* AppBar Component */}
          <AppBar toggleNavVisibility={toggleNavVisibility} {...props} />
          {/* <Divider style={{ borderColor: "#ddd" }} /> */}

          {/* Content */}
          <ContentWrapper
            className="layout-page-content"
            sx={{
              ...(contentWidth === "boxed" && {
                mx: "auto",
                "@media (min-width:1440px)": { maxWidth: 1440 },
                "@media (min-width:1200px)": { maxWidth: "100%" },
              }),
            }}
          >
            {children}
          </ContentWrapper>

          <MenuMobile></MenuMobile>

          {/* Footer Component */}
          <Footer {...props} />

          {/* Portal for React Datepicker */}
          <DatePickerWrapper sx={{ zIndex: 11 }}>
            <Box id="react-datepicker-portal"></Box>
          </DatePickerWrapper>
        </MainContentWrapper>
      </VerticalLayoutWrapper>

      {/* Scroll to top button */}
      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className="mui-fixed">
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <ArrowUp />
          </Fab>
        </ScrollToTop>
      )}
    </>
  );
};

export default VerticalLayout;
