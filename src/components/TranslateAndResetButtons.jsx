import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TranslateIcon from "@mui/icons-material/Translate";
import { Button } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const renderTranslateMenu = (
  handleClose,
  handleClick,
  open,
  anchorEl,
  buttonText
) => {
  return (
    <>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
        sx={{ mr: 2 }}
        startIcon={<TranslateIcon />}
        variant="outlined"
      >
        {buttonText}
      </Button>

      <Menu
        elevation={4}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose("nl")}>Nederlands</MenuItem>
        <MenuItem onClick={() => handleClose("en")}>English</MenuItem>
      </Menu>
    </>
  );
};

const renderResetButton = (handleClick) => {
  return (
    <Button
      onClick={handleClick}
      color="inherit"
      sx={{ mr: 2 }}
      startIcon={<ReplayIcon />}
      variant="outlined"
    >
      reset
    </Button>
  );
};

export default function TranslateAndResetButtons(props) {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [translateButtonText, setTranslateButtonText] = React.useState(
    t("lng")
  );
  const navigation = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (lng) => {
    setAnchorEl(null);
    i18n.changeLanguage(lng);
  };
  const handleClickReset = (event) => {
    navigation("/");
  };

  useEffect(() => {
    setTranslateButtonText(t("lng"));
  }, [t]);

  return (
    <>
      {renderTranslateMenu(
        handleClose,
        handleClick,
        open,
        anchorEl,
        translateButtonText
      )}
      {renderResetButton(handleClickReset)}
    </>
  );
}
