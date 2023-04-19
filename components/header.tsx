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
import Tooltip from '@mui/material/Tooltip';
import { DarkMode, MoreHoriz, InsertDriveFile, Code, Palette, EmojiPeople } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { ColorModeContext } from '../pages/_app';
import { Menu, MenuItem } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { DevModeContext } from '../context/DevModeContext';
import { useRouter } from 'next/router';

const Header = () => {
  const colorMode = useContext(ColorModeContext);
  const { devMode, setDevMode } = useContext(DevModeContext);
  const router = useRouter()

  const handleRoleChange = () => {
    const isCurrentDev = devMode === 'dev';
    setDevMode(isCurrentDev ? 'design' : 'dev');
    console.log("\nCurrent route: ", router.pathname)

    if (router.pathname === "/design/elavon-dev") {
      router.push("/dev/elavon-dev")
    } else if (router.pathname === "/dev/elavon-dev") {
      router.push("/design/elavon-dev")
    } else if (router.pathname === "/design/elavon-status") {
      router.push("/dev/elavon-status")
    } else if (router.pathname === "/dev/elavon-status") {
      router.push("/design/elavon-status")
    } else if (router.pathname === "/design/functionize") {
      router.push("/dev/functionize")
    } else if (router.pathname === "/dev/functionize") {
      router.push("/design/functionize")
    } else if (router.pathname === "/design/allvoices") {
      router.push("/dev/allvoices")
    } else if (router.pathname === "/dev/allvoices") {
      router.push("/design/allvoices")
    } else {

    }
  };

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
            Bryce Watson's Portfolio
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
          {devMode === 'dev' ?
            <Tooltip title="Developer Mode" arrow>
              <IconButton
                size="large"
                edge="start"
                color="secondary"
                aria-label="Developer Mode"
                sx={{ mr: 2 }}
                onClick={handleRoleChange}
              >
                <Code />
              </IconButton>
            </Tooltip>
            :
            <Tooltip title="Design Mode" arrow>
              <IconButton
                size="large"
                edge="start"
                color="secondary"
                aria-label="Design Mode"
                sx={{ mr: 2 }}
                onClick={handleRoleChange}
              >
                <Palette />
              </IconButton>
            </Tooltip>
          }
          <Tooltip title="More Info" arrow>
            <IconButton
              id="context-menu"
              aria-label='More Info'
              aria-controls={open ? 'context menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              color="secondary"
            >
              <MoreHoriz />
            </IconButton>
          </Tooltip>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'context-menu',
            }}
          >
            <Link passHref href="/resume">
              <MenuItem onClick={handleClose} component="a">
                <ListItemIcon>
                  <InsertDriveFile fontSize="medium" color="secondary" />
                </ListItemIcon>
                <ListItemText>Resume</ListItemText>
              </MenuItem>
            </Link>
            <Link passHref href="/me">
              <MenuItem onClick={handleClose} component="a">
                <ListItemIcon>
                  <EmojiPeople fontSize="medium" color="secondary" />
                </ListItemIcon>
                <ListItemText>About Me</ListItemText>
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
                  <GitHubIcon fontSize="medium" color="secondary" />
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
