import Container from './container'
import { useContext } from 'react';
import { DevModeContext } from '../context/DevModeContext';
import { Button, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import { InsertDriveFile } from '@mui/icons-material';
import Grid from '@mui/material/Unstable_Grid2'
import { Stack } from '@mui/material';
import { Divider } from '@mui/material';
import { Box } from '@mui/material';

const Footer = () => {
  const { devMode, setDevMode } = useContext(DevModeContext);

  return (<footer>
    <Divider />
    <br />
    <br />
    <Container >
      <Grid container spacing={2} direction="row" alignItems="stretch" justifyContent="space-between">
        <Grid>
          <Typography variant="h4">Bryce Watson&#39;s Design Portfolio</Typography>
        </Grid>
        <Grid>
          <Stack spacing={2} direction="row">
            <Link href="https://github.com/TheBryceIsRight/phoenix" target="_blank" passHref>
              <Button
                size="large"
                color="secondary"
                aria-label="View the code on GitHub"
                sx={{ mr: 2 }}
                startIcon={<GitHubIcon />}
              >
                View the code on GitHub
              </Button>
            </Link>
            <Link href="/resume" passHref>
              <Button color='secondary' size="large" startIcon={<InsertDriveFile />}>
                Resume
              </Button>
            </Link>
          </Stack>
        </Grid>
      </Grid>
      <br />
      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="stretch" justifyContent="center">
            <Link href={`/${devMode}/gitkraken`} passHref><Button variant="text" color="secondary">GitKraken</Button></Link>
            <Link href={`/${devMode}/allvoices`} passHref><Button variant="text" color="secondary">AllVoices</Button></Link>
            <Link href={`/${devMode}/functionize`} passHref><Button variant="text" color="secondary">Functionize</Button></Link>
            <Link href={`/${devMode}/elavon-status`} passHref><Button variant="text" color="secondary">System Status</Button></Link>
            <Link href={`/${devMode}/elavon-dev`} passHref><Button variant="text" color="secondary">Developer Portal</Button></Link>
            <Link href="/me" passHref><Button variant="text" color="secondary">About Me</Button></Link>
          </Stack>
      <br />
      <Box alignContent="center" textAlign="center" style={{ width: "100%" }}>
        <Typography variant="caption">© {new Date().getFullYear()} · Bryce Watson · All Rights Reserved </Typography>
      </Box>
      <br />
      <br />
    </Container>
  </footer>
  )
}

export default Footer
