import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Search from './Search';

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const navigate = useNavigate()

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const handleSearchOpen = () => {
    setSearchOpen(true);
  };
  const handleSearchClose = () => {
    setSearchOpen(false);
  };
  
  // const drawer = (
  //   <div>
  //     <Toolbar />
  //     <List>
  //       {['Home', 'Search'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton onClick={() => {text==='Home' && navigate(`/${text}`)}}>
  //             <ListItemIcon sx={{color:"logoColor"}}>
  //               {index % 2 === 0 ? <HomeIcon/> : <SearchIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text}/>
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </div>
  // );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{
          width: '100vw',
          height: '15vh',
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'background_2',
          paddingTop: '10px',
          zIndex: 10
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ fontFamily: "logo", fontSize: "1.5rem", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "1rem", marginLeft: "2rem", color: "logoColor", fontWeight: "bold" }}>
            <p><img src="/images/logo.png" width="50" alt="logo" /></p>
            <p>
              <span style={{ fontSize: "2.5rem" }}>M</span>usic
              <span style={{ fontSize: "2.5rem" }}>C</span>ompass
            </p>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "background_2", color: "white" },
          }}
        >
          <div>
            <Toolbar />
            <List>
              {/* Home Button */}
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/Home')}>
                  <ListItemIcon sx={{ color: "logoColor" }}>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>

              {/* Search Button */}
              <ListItem disablePadding>
                <ListItemButton onClick={handleSearchOpen}>
                  <ListItemIcon sx={{ color: "logoColor" }}>
                    <SearchIcon />
                  </ListItemIcon>
                  <ListItemText primary="Search" />
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, pt: '15vh', backgroundColor: "background_2", color: "white", zIndex: "1" }
          }}
          open
        >
          <div>
            <Toolbar />
            <List>
              {/* Home Button */}
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/Home')}>
                  <ListItemIcon sx={{ color: "logoColor" }}>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>

              {/* Search Button */}
              <ListItem disablePadding>
                <ListItemButton onClick={handleSearchOpen}>
                  <ListItemIcon sx={{ color: "logoColor" }}>
                    <SearchIcon />
                  </ListItemIcon>
                  <ListItemText primary="Search" />
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`, backgroundColor: 'black' } }}
      >
        <Toolbar />
        {/* <Home/> */}
      </Box>

      {/* Search component */}
      <Search open={searchOpen} handleClose={handleSearchClose} />
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Navbar;
