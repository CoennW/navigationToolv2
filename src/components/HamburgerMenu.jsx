import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Box, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";

const getItems = (t) => {
  return [
    {
      title: t("menu1"),
      path: "box/initiation",
    },
    {
      title: t("menu2"),
      path: "box/identification",
    },
    {
      title: t("menu3"),
      path: "box/exchange",
    },
    {
      title: t("menu4"),
      path: "box/reflection",
    },
    {
      title: t("menu5"),
      path: "box/conversion",
    },
    {
      title: t("menu6"),
      path: "box/indirect",
    },
    {
      title: t("menu7"),
      path: "box/trust",
    },
    {
      title: t("menu8"),
      path: "box/evaluation",
    },
    {
      title: t("menu9"),
      path: "lanes/fast",
    },
    {
      title: t("menu10"),
      path: "box/circus",
    },
    {
      title: t("menu11"),
      path: "box/cloister",
    },
  ];
};

const renderMenuItem = (handleClose, menuItems) => {
  const renderDividerWhen = ["box/evaluation", "box/conversion"];
  return menuItems.map((item) => {
    return (
      <Box key={item.path}>
        <MenuItem component={Link} to={item.path} onClick={handleClose}>
          {item.title}
        </MenuItem>

        {renderDividerWhen.includes(item.path) && (
          <Divider key={Math.random()} />
        )}
      </Box>
    );
  });
};

export default function HamburgerMenu(props) {
  const { t } = useTranslation();
  const [menuItems, setMenuItem] = useState(getItems(t));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setMenuItem(getItems(t));
  }, [t]);

  return (
    <>
      <IconButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="large"
        color="inherit"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {renderMenuItem(handleClose, menuItems)}
      </Menu>
    </>
  );
}
