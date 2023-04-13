import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import { ButtonBase, Typography } from '@mui/material'
import MuiContainer from '@mui/material/Container'
import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Mail } from '@mui/icons-material'
import Image from 'next/image'
import AllVoices from "../public/assets/allvoices/allvoices.png"
import AllVoices_dark from "../public/assets/dark_mode/allvoices.png"
import Functionize from '../public/assets/functionize/functionize.png'
import Fze_dark from "../public/assets/dark_mode/functionize.png"
import SystemStatus from "../public/assets/systemstatus/system-status.png"
import Status_dark from "../public/assets/dark_mode/system-status.png"
import DevPortal from '../public/assets/elavon/dev-portal.png'
import DevPortal_dark from "../public/assets/dark_mode/dev-portal.png"
import SandrasPortfolio from "../public/assets/aboutme/SandraArtAndDesign.png"
import SandrasPortfolioDark from "../public/assets/aboutme/SandraArtAndDesignDark.png"
import LA from '../public/assets/aboutme/LANationalPark.jpg'
import { useTheme, styled, ButtonProps } from '@mui/material'
import PreviousWork from '../components/previousWork'

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
  const XPaddingFreelance = { xs: 4, sm: 8, md: 12, lg: 25, xl: 30 }


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
              <Typography variant='h6'>I graduated from the Georgia Institute of Technology with a B.S. in Computer Science. I use my CS background to bridge the gap between design and development.</Typography>
            </Grid>
            <Grid>
              <Typography variant='body1'>If you want to work with me I'm currently looking for full time and contract opportunities, so drop me a line at</Typography>
            </Grid>
            <Grid>
              <Link href="mailto:brycewatson315@gmail.com" passHref>
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
            <Link href="/design/allvoices" passHref>
              <PreviewButton>
                <Container>
                  {theme.palette.mode === "light" ?
                    <Image
                      src={AllVoices}
                      alt='Cover Image for AllVoices'
                      width={1300}
                      height={630}
                      style={{ borderRadius: 8 }}
                      placeholder='blur'
                      loading="eager"
                    />
                    :
                    <Image
                      src={AllVoices_dark}
                      alt='Cover Image for AllVoices'
                      width={1300}
                      height={630}
                      style={{ borderRadius: 8 }}
                      placeholder='blur'
                      loading="eager"
                    />
                  }
                  <br />
                  <Typography variant='h4'>
                    AllVoices
                  </Typography>
                  <br />
                  <Typography variant="h6">Helping employees speak out in the workplace.</Typography>
                </Container>
              </PreviewButton>
            </Link>
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
                link="/design/functionize"
                coverImage={Functionize.src}
                coverImageDark={Fze_dark.src}
                coverImageDev={Functionize.src}
                coverImageDarkDev={Fze_dark.src}
              />
              <PreviousWork
                title="Elavon - System Status"
                description="Visualizing outages and downtime for transparency and compliance"
                link="/design/elavon-status"
                coverImage={SystemStatus.src}
                coverImageDark={Status_dark.src}
                coverImageDev={SystemStatus.src}
                coverImageDarkDev={Status_dark.src}
              />
              <PreviousWork
                title="Elavon - Developer Portal"
                description="Helping developers understand credit card systems through good documentation"
                link="/design/elavon-dev"
                coverImage={DevPortal.src}
                coverImageDark={DevPortal_dark.src}
                coverImageDev={DevPortal.src}
                coverImageDarkDev={DevPortal_dark.src}
              />
              <PreviousWork
                title="About Me"
                description="A brief intro"
                link="/design/me"
                coverImage={LA.src}
                coverImageDark={LA.src}
                coverImageDev={LA.src}
                coverImageDarkDev={LA.src}
              />
            </div>
          </Grid>
          <br />
          <Grid paddingX={XPaddingFreelance}>
            <Typography variant='h3'>Freelance Work</Typography>
            <br />
            <br />
            <Typography variant="h6">A graphic design & animation portfolio site I built for my friend, fully translated into English, Spanish, and Catalan</Typography>
            <br />
            <Link href="https://sandra-benito-art-and-design.vercel.app/" passHref target="_blank">
              <PreviewButton>
                <Container>
                  <br />
                  {theme.palette.mode === "light" ?
                    <Image
                      src={SandrasPortfolio}
                      alt="Cover Image for Sandra's Graphic Design Portfolio"
                      style={{ borderRadius: 8 }}
                      placeholder='blur'
                      loading="eager"
                    />
                    :
                    <Image
                      src={SandrasPortfolioDark}
                      alt="Cover Image for Sandra's Graphic Design Portfolio"
                      style={{ borderRadius: 8 }}
                      placeholder='blur'
                      loading="eager"
                    />
                  }
                  <br />
                  <br />
                </Container>
              </PreviewButton>
            </Link>
            <br />
            <br />
            <br />
            <br />
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}