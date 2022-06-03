import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const categorias = ["cd", "lp"];

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" className="header-primary">
        <Toolbar>
          <div className="container-logo">
            <Link to="/">
              <MusicNoteIcon />
              Discos Shop
            </Link>
          </div>
          <ul className="navbar">
            <li>
              <Button
                disableRipple
                style={{ backgroundColor: "transparent" }}
                variant="text"
                className="navbar__btn"
              >
                <Link to="/">Inicio</Link>
              </Button>
            </li>
            <li>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                disableRipple
                style={{ backgroundColor: "transparent" }}
                variant="text"
                className="navbar__btn"
              >
                Categorias
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {categorias.map((cat) => {
                  return (
                    <MenuItem key={cat} onClick={handleClose}>
                      <Link to={`/categorias/${cat}`}>{cat}</Link>
                    </MenuItem>
                  );
                })}
              </Menu>
            </li>
          </ul>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
