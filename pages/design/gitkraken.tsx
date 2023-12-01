import SummaryCard from "../../components/summary-card"
import MyContainer from "../../components/container"
import { ButtonBase, Container } from "@mui/material"
import { Typography, styled, Button, ButtonProps, Stack, Chip } from "@mui/material"
import Image from 'next/image'
import site_map from '../../public/assets/allvoices/av_sitemap.svg'
import undraw_hero from '../../public/assets/gitkraken/undraw_hero.svg'
import design_system from '../../public/assets/allvoices/av_design_system.svg'
import Head from 'next/head'
import ProtectedImage from "../../components/protected-image"
import LinkedInAnnouncement from "../../public/assets/allvoices/LinkedIn_Announcement.png"
import Connections from "../../public/assets/allvoices/Prototype_Connections.png"
import Link from "next/link"
import { CSSProperties } from "react"
import Layout from "../../components/layout"
import { Code } from '@mui/icons-material';
import SwitchButton from "../../components/switchButton"
import RepoViewScreenshot from "../../public/assets/gitkraken/GitKraken_repo_view.png"


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
            <main aria-label="AllVoices">
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
                    <Image
                        src={undraw_hero}
                        alt="Hero image for allvoices"
                        loading="eager"
                    />
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
                    <Typography variant='body1'>Keeping track of code can be difficult for a number of reasons. Code can be split off into branches with their own sets of changes and then merged back in. But merging doesn't always go smoothly, and you could be talking about dozens of branches. GitKraken helps to solve merge conflicts and prevent them from happening in the first place with it's Git visualization graph. 
                    </Typography>
                    <br />
                    <Image
                        src={RepoViewScreenshot}
                        alt="Hero image for allvoices"
                        loading="eager"
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
                    <Typography variant='body1'>One of my first initiatives upon entering this role was to standardize all major UI components in a design system. This would eventually result in a prototype of the entire client in Figma, complete with interactive states throughout. 
                    </Typography>
                    <br />
                    <br />
                    <Typography variant='h6'>Accessibility is still key</Typography>
                    <br />
                    <Typography variant='body1'>I helped to remediate a11y issues by scanning for them in Figma with Axe and Contrast Checkers, as well as fixing them in products with Axe Pro. 
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <br />
                   <Typography variant='h4'>Style Guide</Typography>
                    <br />
                    <div style={figmaWrapper}>
                        <iframe onError={function () { /* silence */ }} aria-label="Messaging Templatges Figma prototype" style={iframeStyle} title="Messaging Templatges prototype" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FYJvOtvtVmUMCCPNEi2xfzn%2FDesign-Library-Documentation%3Ftype%3Ddesign%26node-id%3D1%253A767%26mode%3Ddesign%26t%3DB2zDXoBcb4o4kfz9-1" allowFullScreen={true}>
                        </iframe>
                    </div>
                    <br />
                    <br />
                    <br />
                    <Typography variant='h6'>This page is still under construction, please pardon any dust 🧹</Typography>
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
