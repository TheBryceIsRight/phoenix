import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { InsertDriveFile } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import { DarkMode } from '@mui/icons-material';
import { MoreHoriz } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { ColorModeContext } from '../pages/_app';
import { Menu, MenuItem } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

const Header = () => {
  const colorMode = useContext(ColorModeContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0} color="primary" enableColorOnDark>
        <Toolbar>
          <Link aria-label='Home' href="/" passHref>
            <Tooltip title="Home" arrow aria-label='Home'>
              <IconButton
                size="large"
                edge="start"
                color="secondary"
                aria-label="Home"
                sx={{ mr: 2 }}
              >
                <HomeIcon />
              </IconButton>
            </Tooltip>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="secondary">
            Portfolio
          </Typography>
          <Tooltip title="Dark Mode" arrow>
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="Dark Mode"
              sx={{ mr: 2 }}
              onClick={colorMode.toggleColorMode}
            >
              <DarkMode />
            </IconButton>
          </Tooltip>
          <IconButton
            id="context-menu"
            aria-controls={open ? 'context menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            color="secondary"
          >
            <MoreHoriz />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'context-menu',
            }}
          >
            <Link passHref href="https://docs.google.com/document/d/1TCrhwGzajWhGrd-bQxzjI-tcDvLy1tpXNn5qTyv886o/edit?usp=sharing" target="_blank">
              <MenuItem onClick={handleClose} component="a">
                <ListItemIcon>
                  <InsertDriveFile fontSize="medium"  color="secondary"/>
                </ListItemIcon>
                <ListItemText>Resume</ListItemText>
              </MenuItem>
            </Link>
            <Link passHref href="https://www.linkedin.com/in/bryce-watson-gatech/" target="_blank">
              <MenuItem onClick={handleClose} component="a">
                <ListItemIcon>
                  <LinkedInIcon fontSize="medium" color="secondary" />
                </ListItemIcon>
                <ListItemText>LinkedIn</ListItemText>
              </MenuItem>
            </Link>
            <Link passHref href="https://github.com/TheBryceIsRight" target="_blank">
              <MenuItem onClick={handleClose} component="a">
                <ListItemIcon >
                  <GitHubIcon fontSize="medium" color="secondary"/>
                </ListItemIcon>
                <ListItemText>GitHub</ListItemText>
              </MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
