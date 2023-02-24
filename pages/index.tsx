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
import AllVoices from "../public/assets/blog/allvoices/allvoices.png"
import AllVoices_dark from "../public/assets/blog/dark_mode/allvoices.png"
import Functionize from '../public/assets/blog/functionize/functionize.png'
import Fze_dark from "../public/assets/blog/dark_mode/functionize.png"
import SystemStatus from "../public/assets/blog/systemstatus/system-status.png"
import Status_dark from "../public/assets/blog/dark_mode/system-status.png"
import DevPortal from '../public/assets/blog/elavon/dev-portal.png'
import DevPortal_dark from "../public/assets/blog/dark_mode/dev-portal.png"
import Coffee from "../public/assets/blog/aboutme/coffee.png"
import { useTheme } from '@mui/material'

export default function Index() {
  const theme = useTheme();

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
          <Typography variant='h5'>I design and build user-centered software, with a focus on accessibility.</Typography>
          <br />
          <Grid container spacing={2} alignItems='center' alignContent='center' maxWidth="lg" flexWrap="wrap" direction="column" >
            <Grid>
              <Typography variant='body1'>If you want to work with me I'm currently accepting freelance opportunities, so drop me a line at</Typography>
            </Grid>
            <Grid xs={8}>
              <Link href="mailto:brycewatson315@gmail.com" passHref>
                <Button color='secondary' variant='outlined' startIcon={<Mail />}>
                  brycewatson315@gmail.com
                </Button>
              </Link></Grid>
          </Grid>
          <br />
          <br />
          <br />
        </MuiContainer>
        <Container>
          <section>
            <Link href="/work/allvoices" passHref>
              <ButtonBase style={{ alignContent: "start" }} focusRipple={true}>
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
                  <Typography variant="body1">Helping employees speak out in the workplace.</Typography>
                </Container>
              </ButtonBase>
            </Link>
          </section>
          <br />
          <br />
          <br />
          <section>
            <Typography variant='h3'>Previous Work</Typography>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
              <Link href="/work/functionize" passHref>
                <ButtonBase style={{ textAlign: 'left' }} focusRipple={true}>
                  <div>
                    <div className="mb-5">
                      <div className="sm:mx-0">
                        {theme.palette.mode === "light" ?
                          <Image
                            src={Functionize}
                            alt='Cover Image for Functionize'
                            width={1300}
                            height={630}
                            style={{ borderRadius: 8 }}
                            placeholder='blur'
                            loading="eager"
                          />
                          :
                          <Image
                            src={Fze_dark}
                            alt='Cover Image for Functionize'
                            width={1300}
                            height={630}
                            style={{ borderRadius: 8 }}
                            placeholder='blur'
                            loading="eager"
                          />
                        }
                      </div>
                    </div>
                    <Typography variant='h4'>
                      Functionize
                    </Typography>
                    <br />
                    <Typography variant='body1'>Helping testers with a low to no code AI-powered automation platform</Typography>
                  </div>
                </ButtonBase>
              </Link>
              <Link href="/work/elavon-status" passHref>
                <ButtonBase style={{ textAlign: 'left' }} focusRipple={true}>
                  <div>
                    <div className="mb-5">
                      <div className="sm:mx-0">
                        {theme.palette.mode === "light" ?
                          <Image
                            src={SystemStatus}
                            alt='Cover Image for System Status'
                            width={1300}
                            height={630}
                            style={{ borderRadius: 8 }}
                            placeholder='blur'
                            loading="eager"
                          />
                          :
                          <Image
                            src={Status_dark}
                            alt='Cover Image for System Status'
                            width={1300}
                            height={630}
                            style={{ borderRadius: 8 }}
                            placeholder='blur'
                            loading="eager"
                          />
                        }
                      </div>
                    </div>
                    <Typography variant='h4'>
                      Elavon - System Status
                    </Typography>
                    <br />
                    <Typography variant='body1'>Visualizing outages and downtime for transparency and compliance</Typography>
                  </div>
                </ButtonBase>
              </Link>
              <Link href="/work/elavon-dev" passHref>
                <ButtonBase style={{ textAlign: 'left' }} focusRipple={true}>
                  <div>
                    <div className="mb-5">
                      <div className="sm:mx-0">
                        {theme.palette.mode === "light" ?
                          <Image
                            src={DevPortal}
                            alt='Cover Image for Dev Portal'
                            width={1300}
                            height={630}
                            style={{ borderRadius: 8 }}
                            placeholder='blur'
                            loading="eager"
                          />
                          :
                          <Image
                            src={DevPortal_dark}
                            alt='Cover Image for Dev Portal'
                            width={1300}
                            height={630}
                            style={{ borderRadius: 8 }}
                            placeholder='blur'
                            loading="eager"
                          />
                        }
                      </div>
                    </div>
                    <Typography variant='h4'>
                      Elavon - Developer Portal
                    </Typography>
                    <br />
                    <Typography variant='body1'>Helping developers understand credit card systems through good documentation</Typography>
                  </div>
                </ButtonBase>
              </Link>
              <Link href="/work/me" passHref>
                <ButtonBase style={{ textAlign: 'left' }} focusRipple={true}>
                <div>
                    <div className="mb-5">
                      <div className="sm:mx-0">
                          <Image
                            src={Coffee}
                            alt='Cover Image for About Me'
                            width={1300}
                            height={630}
                            style={{ borderRadius: 8 }}
                            placeholder='blur'
                            loading="eager"
                          />
                      </div>
                    </div>
                    <Typography variant='h4'>
                      About Me
                    </Typography>
                    <br />
                    <Typography variant='body1'>A brief intro</Typography>
                  </div>
                </ButtonBase>
              </Link>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}