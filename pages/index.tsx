import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import { Typography, Button, useTheme, styled, ButtonProps  } from '@mui/material'
import MuiContainer from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'
import { Mail } from '@mui/icons-material'
import Image from 'next/image'
import GitKraken from "../public/assets/gitkraken/gitkraken.png"
import GitKraken_dark from "../public/assets/gitkraken/gitkraken_dark.png"
import GitKraken_dev from "../public/assets/gitkraken/gitkraken_dev.png"
import GitKraken_dark_dev from "../public/assets/gitkraken/gitkraken_dark_dev.png"
import AllVoices from "../public/assets/allvoices/allvoices.png"
import AllVoices_dark from "../public/assets/dark_mode/allvoices.png"
import AllVoices_dev from "../public/assets/allvoices/dev-allvoices.png"
import AllVoices_dark_dev from "../public/assets/dark_mode/dev-allvoices.png"
import Functionize from '../public/assets/functionize/functionize.png'
import Fze_dark from "../public/assets/dark_mode/functionize.png"
import Fze_dark_dev from "../public/assets/dark_mode/dev-functionize.png"
import Functionize_dev from "../public/assets/functionize/dev-functionize.png"
import SystemStatus from "../public/assets/systemstatus/system-status.png"
import Status_dark from "../public/assets/dark_mode/system-status.png"
import SystemStatus_dev from "../public/assets/systemstatus/dev-system-status.png"
import Status_dark_dev from "../public/assets/dark_mode/dev-system-status.png"
import DevPortal from '../public/assets/elavon/dev-portal.png'
import DevPortal_dark from "../public/assets/dark_mode/dev-portal.png"
import DevPortal_dev from '../public/assets/elavon/dev-dev-portal.png'
import DevPortal_dark_dev from "../public/assets/dark_mode/dev-dev-portal.png"
import SandrasPortfolio from "../public/assets/aboutme/SandraArtAndDesign.png"
import SandrasPortfolioDark from "../public/assets/aboutme/SandraArtAndDesignDark.png"
import LA from '../public/assets/aboutme/LANationalPark.jpg'
import LA_reversed from '../public/assets/aboutme/LANationalParkMirrored.png'
import PreviousWork from '../components/previousWork'
import HeroWork from '../components/heroWork'

export default function Index() {
  const theme = useTheme();

  const PreviewButton = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.hover.main,
    },
    color: theme.palette.secondary.main,
    textTransform: 'none',
    padding: 10,
    alignContent: "start",
    borderRadius: 6,
    focusRipple: true
  }));

  const XPadding = { xs: 3, sm: 8, md: 15, lg: 20, xl: 25 }
  const XPaddingPreviousWork = { xs: 4, sm: 8, md: 12, lg: 25, xl: 30 }


  return (
    <>
      <Layout>
        <Head>
          <title>{"Bryce Watson's Design Portfolio"}</title>
        </Head>
        <MuiContainer style={{ textAlign: 'center', alignItems: 'center' }} maxWidth="lg">
          <br />
          <br />
          <br />
          <Typography variant='h3'>Hi! I'm Bryce</Typography>
          <br />
          <Typography variant='h4'>I design and build user-centered software, with a focus on accessibility.</Typography>
          <br />
          <Grid container spacing={2} alignItems='center' alignContent='center' maxWidth="lg" flexWrap="wrap" direction="column" >
            <Grid maxWidth="md">
              <Typography variant='h5'>I graduated from the Georgia Institute of Technology with a B.S. in Computer Science. I use my CS background to bridge the gap between design and development.</Typography>
            </Grid>
            <Grid>
              <Link href="mailto:brycewatson315@gmail.com" passHref tabIndex={-1}>
                <Button color='secondary' variant='outlined' startIcon={<Mail />}>
                  brycewatson315@gmail.com
                </Button>
              </Link>
            </Grid>
          </Grid>
          <br />
          <br />
          <br />
        </MuiContainer>
        <Grid
          container
          alignContent="center"
          alignItems="center"
          direction="column"
          justifyContent="center"
          spacing={0}
        >
          <Grid paddingX={XPadding}>
            <HeroWork
                title="GitKraken"
                description="Helping developers create the future"
                link="gitkraken"
                coverImage={GitKraken.src}
                coverImageDark={GitKraken_dark.src}
                coverImageDev={GitKraken_dev.src}
                coverImageDarkDev={GitKraken_dark_dev.src}
              />
          </Grid>
          <br />
          <br />
          <br />
          <Grid paddingX={XPadding}>
            <HeroWork
                title="AllVoices"
                description="Helping employees speak out in the workplace"
                link="allvoices"
                coverImage={AllVoices.src}
                coverImageDark={AllVoices_dark.src}
                coverImageDev={AllVoices_dev.src}
                coverImageDarkDev={AllVoices_dark_dev.src}
              />
          </Grid>
          <br />
          <br />
          <br />
          <Grid paddingX={XPaddingPreviousWork}>
            <Typography variant='h3'>Previous Work</Typography>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
              <PreviousWork
                title="Functionize"
                description="Helping testers with a low to no code AI-powered automation platform"
                link="functionize"
                coverImage={Functionize.src}
                coverImageDark={Fze_dark.src}
                coverImageDev={Functionize_dev.src}
                coverImageDarkDev={Fze_dark_dev.src}
              />
              <PreviousWork
                title="Elavon - System Status"
                description="Visualizing outages and downtime for transparency and compliance"
                link="elavon-status"
                coverImage={SystemStatus.src}
                coverImageDark={Status_dark.src}
                coverImageDev={SystemStatus_dev.src}
                coverImageDarkDev={Status_dark_dev.src}
              />
              <PreviousWork
                title="Elavon - Developer Portal"
                description="Helping developers understand credit card systems through good documentation"
                link="elavon-dev"
                coverImage={DevPortal.src}
                coverImageDark={DevPortal_dark.src}
                coverImageDev={DevPortal_dev.src}
                coverImageDarkDev={DevPortal_dark_dev.src}
              />
              <PreviousWork
                title="About Me"
                description="A brief intro"
                link="me"
                coverImage={LA.src}
                coverImageDark={LA.src}
                coverImageDev={LA_reversed.src}
                coverImageDarkDev={LA_reversed.src}
              />
            </div>
          </Grid>
          <br />
        </Grid>
      </Layout>
    </>
  )
}