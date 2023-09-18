// ** React Imports
import { ChangeEvent, MouseEvent, ReactNode, useState } from "react";

// ** Next Imports
import Link from "next/link";
import { useRouter } from "next/router";

// ** MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled, useTheme } from "@mui/material/styles";
import MuiCard, { CardProps } from "@mui/material/Card";
import InputAdornment from "@mui/material/InputAdornment";
import MuiFormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import FooterIllustrationsV1 from "src/views/pages/auth/FooterIllustration";
import themeConfig from "src/configs/themeConfig";
import BlankLayout from "src/@core/layouts/BlankLayout";

interface State {
  sdt: number;
}

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { width: "28rem" },
}));

const LinkStyled = styled("a")(({ theme }) => ({
  fontSize: "0.875rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(
  ({ theme }) => ({
    "& .MuiFormControlLabel-label": {
      fontSize: "0.875rem",
      color: theme.palette.text.secondary,
    },
  })
);

const ForgotPage = () => {
  // ** Hook
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box className="content-center">
      <Card sx={{ zIndex: 1 }}>
        <CardContent
          sx={{ padding: (theme) => `${theme.spacing(12, 9, 7)} !important` }}
        >
          <Box
            sx={{
              mb: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Logo
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
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: 1.5 }}
            >
              Quên mật khẩu
            </Typography>
            <Typography variant="body2">
              Nhập số điện thoại để lấy lại mật khẩu
            </Typography>
          </Box>

          <form
            noValidate
            autoComplete="off"
            onSubmit={(e) => e.preventDefault()}
          >
            <TextField
              autoFocus
              fullWidth
              id="sdt"
              label="Số điện thoại"
              sx={{ marginBottom: 4 }}
            />

            <Button
              fullWidth
              size="large"
              variant="contained"
              sx={{ marginBottom: 7 }}
              onClick={() => router.push("/")}
            >
              Lấy lại mật khẩu
            </Button>
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  );
};

ForgotPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default ForgotPage;
