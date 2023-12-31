// ** MUI Imports
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputAdornment from "@mui/material/InputAdornment";

// ** Icons Imports
import Menu from "mdi-material-ui/Menu";
import Magnify from "mdi-material-ui/Magnify";
import SearchIcon from "@mui/icons-material/Search";

// ** Type Import
import { Settings } from "src/@core/context/settingsContext";

// ** Components
import ModeToggler from "src/@core/layouts/components/shared-components/ModeToggler";
import UserDropdown from "src/@core/layouts/components/shared-components/UserDropdown";
import NotificationDropdown from "src/@core/layouts/components/shared-components/NotificationDropdown";
import { Button, Typography } from "@mui/material";
import MenuHeader from "src/@core/layouts/components/shared-components/MenuHeader";
import themeConfig from "src/configs/themeConfig";

interface Props {
  hidden: boolean;
  settings: Settings;
  toggleNavVisibility: () => void;
  saveSettings: (values: Settings) => void;
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props;

  // ** Hook
  const hiddenSm = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        className="actions-left"
        sx={{ mr: 2, display: "flex", alignItems: "center" }}
      >
        <Typography
          variant="h6"
          sx={{
            ml: 3,
            lineHeight: 1,
            fontWeight: 600,
            textTransform: "uppercase",
            fontSize: "1.5rem !important",
          }}
        >
          {themeConfig.templateName}
        </Typography>
        {/* {hidden ? (
          <IconButton
            color="inherit"
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          >
            <Menu />
          </IconButton>
        ) : null}
        <TextField
          size="small"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: 4 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Magnify fontSize="small" />
              </InputAdornment>
            ),
          }}
        /> */}
      </Box>

      <Box>
        <MenuHeader></MenuHeader>
      </Box>

      <Box
        className="actions-right"
        sx={{ display: "flex", alignItems: "center" }}
      >
        {/* {hiddenSm ? null : (
          <Box
            component='a'
            target='_blank'
            rel='noreferrer'
            sx={{ mr: 4, display: 'flex' }}
            href='https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free'
          >
            <img
              height={24}
              alt='github stars'
              src='https://img.shields.io/github/stars/themeselection/materio-mui-react-nextjs-admin-template-free?style=social'
            />
          </Box>
        )} */}

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SearchIcon />
        </Box>
        {/* <ModeToggler settings={settings} saveSettings={saveSettings} /> */}
        {/* <NotificationDropdown /> */}
        <UserDropdown />
      </Box>
    </Box>
  );
};

export default AppBarContent;
