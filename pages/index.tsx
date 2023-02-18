import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import { ButtonBase, Typography } from '@mui/material'
import PostPreview from '../components/post-preview'
import MuiContainer from '@mui/material/Container'
import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Mail } from '@mui/icons-material'
import Image from 'next/image'
import AllVoices from "../public/assets/blog/allvoices/allvoices.png"

export default function Index() {
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
              <Link href="mailto:brycewatson315@gmail.com" >
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
            <Link href="/work/allvoices">
              <ButtonBase style={{ alignContent: "start" }}>
                <Container>
                  <Image
                    src={AllVoices}
                    alt='Cover Image for AllVoices'
                    width={1300}
                    height={630}
                    style={{ borderRadius: 8 }}
                    placeholder='blur'
                    loading="eager"
                  />
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
              <Link href="/work/functionize">
                <ButtonBase style={{ textAlign: 'left' }}>
                  <PostPreview
                    title="Functionize"
                    src='/assets/blog/functionize/functionize.png'
                    excerpt='Helping testers with a low to no code AI-powered automation platform'
                  />
                </ButtonBase>
              </Link>
              <Link href="/work/elavon-status">
                <ButtonBase style={{ textAlign: 'left' }}>
                  <PostPreview
                    title="Elavon - System Status"
                    src='/assets/blog/systemstatus/system-status.png'
                    excerpt='Visualizing outages and downtime for transparency and compliance'
                  />
                </ButtonBase>
              </Link>
              <Link href="/work/elavon-dev">
                <ButtonBase style={{ textAlign: 'left' }}>
                  <PostPreview
                    title="Elavon - Developer Portal"
                    src='/assets/blog/elavon/dev-portal.png'
                    excerpt='Helping developers understand credit card systems through good documentation'
                  />
                </ButtonBase>
              </Link>
              <Link href="/work/me">
                <ButtonBase style={{ textAlign: 'left' }}>
                  <PostPreview
                    title="About Me"
                    src='/assets/blog/aboutme/coffee.png'
                    excerpt=''
                  />
                </ButtonBase>
              </Link>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
