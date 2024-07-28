import SummaryCard from "../../components/summary-card"
import MyContainer from "../../components/container"
import { ButtonBase, Container } from "@mui/material"
import { Typography, styled, Button, ButtonProps, Stack, Chip } from "@mui/material"
import Image from 'next/image'
import undraw_hero from '../../public/assets/gitkraken/undraw_hero.svg'
import discussion_light from '../../public/assets/gitkraken/undraw/discussion-light.svg'
import discussion_dark from '../../public/assets/gitkraken/undraw/discussion-dark.svg'
import Head from 'next/head'
import ProtectedImage from "../../components/protected-image"
import Link from "next/link"
import { CSSProperties } from "react"
import Layout from "../../components/layout"
import { Code } from '@mui/icons-material';
import SwitchButton from "../../components/switchButton"
import RepoViewScreenshot from "../../public/assets/gitkraken/GitKraken_repo_view.png"
import site_map_dark from '../../public/assets/gitkraken/site_map/gitkraken_site_map_dark.svg'
import site_map_light from '../../public/assets/gitkraken/site_map/gitkraken_site_map_light.svg'
import EmblaCarousel from '../../components/emblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import { useTheme } from "@mui/material"
import LaunchpadTimeline from "../../components/launchpadTimeline"


const videoWrapper = {
    paddingBottom: "56.25%",
    overflow: "hidden",
    position: "relative",
} as CSSProperties;

const figmaWrapper = {
    paddingBottom: "100.00%",
    overflow: "hidden",
    position: "relative",
} as CSSProperties;

const iframeStyle = {
    overflow: "hidden",
    border: 0,
    alignSelf: "center",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
} as CSSProperties;


export default function GitKraken() {

    const theme = useTheme();

    const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.hover.main,
        },
        color: theme.palette.secondary.main,
        textTransform: 'none',
        padding: 20,
        alignContent: "start",
        borderRadius: 4,
        focusRipple: true
    }));

    const OPTIONS: EmblaOptionsType = {}
    const SLIDE_COUNT = 6
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return <Layout>
        <MyContainer>
            <Head>
                <title>GitKraken</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main aria-label="GitKraken">
                <br />
                <br />
                <br />
                <br />
                <br />
                <Container maxWidth="lg">
                    <SummaryCard
                        role="Product UX Designer"
                        company="GitKraken"
                        timeframe="April 2023 - Present"
                        teamstyle="Mid-size Product Team"
                        tools="Figma, VSCode, GitKraken"
                    >
                    </SummaryCard>
                </Container>
                <Container maxWidth="sm">
                    <br />
                    <br />
                    <br />
                {theme.palette.mode === "light" ?
                    <Image
                        src={discussion_light}
                        alt="Three people leaning over laptops discussing code"
                        style={{ borderRadius: 6 }}
                        loading="eager"
                    />
                    :
                    <Image
                        src={discussion_dark}
                        alt="Three people leaning over laptops discussing code"
                        style={{ borderRadius: 6 }}
                        loading="eager"
                    />
                }
                    <br />
                    <br />
                    <br />
                </Container>
                <Container maxWidth="lg">
                    <Stack spacing={2} direction="row" alignItems="center">
                        <Typography variant='h3'>GitKraken</Typography>
                        <Chip label="Designer Version" />
                    </Stack>
                    <br />
                    <Typography variant='h4'>How do we equip the modern software development team to do their best work?
                    </Typography>
                    <br />
                    <Typography variant='body1'>Keeping track of code can be difficult for a number of reasons. Code can be split off into branches with their own sets of changes and then merged back in. However, merging doesn't always go smoothly, and you could be dealing dozens of branches. GitKraken helps to solve merge conflicts and prevent them from happening in the first place with its Git visualization graph. 
                    </Typography>
                    <br />
                    <Image
                        src={RepoViewScreenshot}
                        alt="Hero image for GitKraken"
                        loading="eager"
                        style={{borderRadius: 6}}
                    />
                    <br />
                    {/* <Typography variant='body1'>This page covers my work as the Product UX Designer. If you are looking for my developer work, you can go here:
                    </Typography> */}
                    <br />
                    {/* <Link href="/dev/gitkraken" passHref>
                        <Button variant="outlined" color="secondary" startIcon={<Code />}>Switch to Developer View</Button>
                    </Link> */}
                    {/* <SwitchButton /> */}
                    <br />
                    <br />
                    <br />
                    <Typography variant='h4'>Goals</Typography>
                    <br />
                    <br />
                    <Typography variant='h6'>World Class Developer Tools</Typography>
                    <br />
                    <Typography variant='body1'>GitKraken has a large and dedicated userbase, we strive to give developers the experience they deserve from their tooling. 
                    </Typography>
                    <br />
                    <br />
                    <Typography variant='h6'>Design System </Typography>
                    <br />
                    <Typography variant='body1'>One of my first initiatives upon entering this role was to standardize all major UI components in a design system. I also created a prototype of the  client in Figma with interactive states. This prototype allowed us to test new features quickly during user testing with high fidelity and without needing the time of a developer. 
                    </Typography>
                    <br />
                    <br />
                    <Typography variant='h6'>Accessibility is key</Typography>
                    <br />
                    <Typography variant='body1'>I remediated a11y issues by scanning for them in Figma with Axe and Contrast Checkers and fixing them with Axe Pro. 
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <br />
                   <Typography variant='h4'>Style Guide</Typography>
                    <br />
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} type="gk_style_guide" />
                    <br />
                    <br />
                    <br />
                    <Typography variant='h4'>Information Architecture</Typography>
                    <br />
                    {theme.palette.mode === "light" ?
                    <Image
                        src={site_map_light}
                        alt="Hieracrhical diagram showing the page and navigation structure of GitKraken Desktop"
                        style={{ borderRadius: 6 }}
                        loading="eager"
                    />
                    :
                    <Image
                        src={site_map_dark}
                        alt="Hieracrhical diagram showing the page and navigation structure of GitKraken Desktop"
                        style={{ borderRadius: 6 }}
                        loading="eager"
                    />
                    }
                    <br />
                    <br />
                    <br />
                    <Typography variant='h4'>GitKraken Client Figma Prototype</Typography>
                    <br />
                    <Typography variant='body1'>I created this prototype to showcase upcoming features with realistic animations for user testing. As GitKraken mostly uses instant animations, the prototype covers the vast majority of possible features with 100% accurate animation reproduction.
                    </Typography>
                    <br/>
                    <Typography variant='body1'>For the best experience, use fullscreen mode.
                    </Typography>
                    <br/>
                    <div style={figmaWrapper}>
                        <iframe 
                            onError={function () { /* silence */ }} 
                            aria-label="GitKraken Figma prototype" 
                            style={iframeStyle} 
                            title="GitKraken Client Prototype" 
                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FiJeJG623kticK9UKSTSqem%2FGitKraken-Client-Prototype%3Fpage-id%3D0%253A1%26node-id%3D5-11994%26viewport%3D302%252C239%252C0.09%26t%3DSAofsyAI6MIyJJRj-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26starting-point-node-id%3D5%253A11994" 
                            allowFullScreen={true}>
                        </iframe>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Typography variant='h3'>Case Study: Launchpad</Typography>
                    <br/>
                    <Typography variant='h5'>Designing a developer productivity tool</Typography>
                    <br />
                    <br />
                    <LaunchpadTimeline/>
                    <br/>
                    <br/>
                    <br />
                    <br />
                    <br />
                    <Typography variant='h4'>Takeaways</Typography>
                    <br />
                    <br />
                    <Typography variant='h6'>Do the research & measure the outcome</Typography>
                    <br />
                    <Typography variant='body1'>Doing user research & analytics when creating a new product for a techincal audience is crucial to understanding their pain points. In the second major redesign of Launchpad, we categorized pull requests based on the actions a user would need to take - an idea that came out of extensive user research and interviews. Once released we saw a marked increase in the number users using Launchpad that has held steady since then, validating our idea that users really needed an additional filter on top of what we were  presenting at the time.
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <Typography variant='h6'>Products work when Design + Development work together </Typography>
                    <br />
                    <Typography variant='body1'>I've authored lots of Pull Requests for Launchpad since I've started here, often to polish up designs someone else implemented, but occaisonally to implement features myself. Understanding the code that the developers are working with and it's limitations is incredibly helpful when designing the features that will be built on top of that code in the future. Design handoff should not be a one time exchange of information - it should a constant, ongoing conversatsion about constraints and possibilities, with development included early on the design process.
                    </Typography>
                    <br/>
                    <br/>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br/>
                    <Typography variant='h3'>Thanks for reading!</Typography>
                </Container>
                <br />
                <br />
                <br />
                <br />
            </main>
        </MyContainer>
    </Layout>
}
