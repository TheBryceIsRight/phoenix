import SummaryCard from "../../components/summary-card"
import MyContainer from "../../components/container"
import { ButtonBase, Container } from "@mui/material"
import { Typography, styled, Button, ButtonProps, Stack, Chip } from "@mui/material"
import Image from 'next/image'
import undraw_hero from '../../public/assets/gitkraken/programming.svg'
import Head from 'next/head'
import ProtectedImage from "../../components/protected-image"
import Link from "next/link"
import { CSSProperties } from "react"
import Layout from "../../components/layout"
import { Code } from '@mui/icons-material';
import SwitchButton from "../../components/switchButton"
import RepoViewScreenshot from "../../public/assets/gitkraken/GitKraken_repo_view.png"
import site_map from '../../public/assets/gitkraken/gitkraken_site_map.svg'
import programming_light from '../../public/assets/gitkraken/undraw/programming-light.svg'
import programming_dark from '../../public/assets/gitkraken/undraw/programming-dark.svg'
import site_map_dark from '../../public/assets/gitkraken/site_map/gitkraken_site_map_dark.svg'
import site_map_light from '../../public/assets/gitkraken/site_map/gitkraken_site_map_light.svg'
import { useTheme } from "@mui/material"



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
                <SummaryCard
                    role="Product UX Designer"
                    company="GitKraken"
                    timeframe="April 2023 - Present"
                    teamstyle="Mid-size Product Team"
                    tools="Figma, VSCode, GitKraken"
                >
                </SummaryCard>
                <Container maxWidth="sm">
                    <br />
                    <br />
                    <br />
                    {theme.palette.mode === "light" ?
                    <Image
                        src={programming_light}
                        alt="Two people coding with a large window in the background"
                        style={{ borderRadius: 6 }}
                        loading="eager"
                    />
                    :
                    <Image
                        src={programming_dark}
                        alt="Two people coding with a large window in the background"
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
                        <Chip label="Developer Version" />
                    </Stack>
                    <br />
                    <Typography variant='h4'>How do we equip the modern software development team to do their best work?
                    </Typography>
                    <br />
                    <Typography variant='body1'>Keeping track of code can be difficult for a number of reasons. Code can be split off into branches with their own sets of changes and then merged back in. However, merging doesn't always go smoothly, and you could be dealing with dozens of branches. GitKraken helps to solve merge conflicts and prevent them from happening in the first place with it's Git visualization graph. 
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
                    <Typography variant='h6'>High Standards of Code Quality</Typography>
                    <br />
                    <Typography variant='body1'>As our own developers use GitKraken daily, we have high standards for the performance of our frontend experience. UI should be snappy, easy to maintain, and enjoyable to use and develop for.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant='h6'>Speed is of the Essence</Typography>
                    <br />
                    <Typography variant='body1'>We move quickly at GitKraken, because our users deserve the latest and greatest developer experience. That often means that small things would get fixed in design QA, which I helped contribute to. 
                    </Typography>
                    <br />
                    <br />
                    <Typography variant='h6'>Accessibility</Typography>
                    <br />
                    <Typography variant='body1'>While there's always more work to be be done, we strive to provide a an exceptional experience for all users, regardless of ability. 
                    </Typography>
                    <br />
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
                    <Typography variant='h5'>This page is still under construction, please pardon my dust 🧹💨</Typography>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Typography variant='h3'>Thank you for reading!</Typography>
                    <br />
                    <br />
                </Container>
                <br />
                <br />
                <br />
                <br />
            </main>
        </MyContainer>
    </Layout>
}
