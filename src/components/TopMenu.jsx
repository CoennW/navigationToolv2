import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "./Logo";
import Box from "@mui/material/Box";
import HamburgerMenu from "./HamburgerMenu";
import TranslateAndResetButtons from "./TranslateAndResetButtons";
import { useTranslation } from "react-i18next";

export default function TopMenu() {
  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box className={"logo_wrapper"} sx={{ mr: 2, mb: -0.5 }}>
            <Logo />
          </Box>
          <HamburgerMenu />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t("title")}
          </Typography>
          <TranslateAndResetButtons />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
