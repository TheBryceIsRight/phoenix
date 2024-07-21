import SummaryCard from "../../components/summary-card"
import MyContainer from "../../components/container"
import { Container, Stack, Chip, Button } from "@mui/material"
import { Typography } from "@mui/material"
import Image from 'next/image'
import site_map from '../../public/assets/elavon/site_map_ss.svg'
import undraw_hero from '../../public/assets/elavon/undraw_hero_ss.svg'
import style_light from '../../public/assets/elavon/style_guide_ss.svg'
import Head from 'next/head'
import ProtectedImage from "../../components/protected-image"
import EmblaCarousel from '../../components/emblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import { CSSProperties } from "react"
import Layout from "../../components/layout"
import Mosaic from "../../components/mosaic"
import Link from "next/link"
import { Palette } from '@mui/icons-material';
import SwitchButton from "../../components/switchButton"


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


export default function Systemstatus() {
    const OPTIONS: EmblaOptionsType = {}
    const SLIDE_COUNT = 7
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return <Layout>
        <MyContainer>
            <Head>
                <title>Elavon - System Status</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main aria-label="Elavon System Status">
                <br />
                <br />
                <br />
                <br />
                <br />
                <Container maxWidth="lg">
                <SummaryCard
                    role="Accessibility Specialist"
                    company="Elavon, subsidiary of U.S. Bank"
                    timeframe="Feb 2020 - August 2020"
                    teamstyle="Accessibility Specialist"
                    tools="Salesforce Lightning Design System, Axe Pro, Voiceover"
                >
                </SummaryCard>
                </Container>
                <Container maxWidth="sm">
                    <br />
                    <br />
                    <br />
                    <Image
                        src={undraw_hero}
                        alt="Hero image for functionize"
                        width={2000}
                        height={2000}
                        loading="eager"
                    />
                    <br />
                    <br />
                    <br />
                </Container>
                <Container maxWidth="lg">
                    <Stack spacing={2} direction="row" alignItems="center">
                        <Typography variant='h3'>Elavon, subsidiary of U.S. Bank</Typography>
                        <Chip label="Developer Version" />
                    </Stack>
                    <br />
                    <Typography variant='h4'>How do we inform others of outages of critical systems?
                    </Typography>
                    <br />
                    <Typography variant='body1'>For many companies, if a software platform goes down or begins experiencing limited service, everyone involved is blasted with a torrent of status emails. Elavon had long operated in such an environment.
                    </Typography>
                    <br />
                    <Typography variant='body1'>Moreover, our internal team that managed key outages did all of their work manually through email. This led to several issues: auditors asking about performance prior to 90 days ago had little information to look over as the emails had been deleted, overlapping assignments led to confusion over who would fix an issue, and people being left out of key email chains sometimes had no idea what was going on.
                    </Typography>
                    <br />
                    <Typography variant='body1'>The goal was to solve this issue with a single place where people would go to see if something was broken, and if they were an internal employee, what was being done to fix the issue. The working name was System Status, but it was the url I gave it that was more important: status.elavon.com. By adding status in front of our existing main website, anyone in the company could get a concise, data-driven, comprehensive look at how our systems were doing without remembering how to get there.
                    </Typography>
                    <br />
                    <Typography variant='body1'>This project was done with the help of Ariel Rodriguez, the only developer, and Craig Bruce, our product owner.
                    </Typography>
                    <br />
                    <Typography variant='body1'>This page covers my work as a developer and accessibility specialist. If you are looking for my designer work, you can go here:
                    </Typography>
                    <br />
                    <SwitchButton />
                    <br />
                    <br />
                    <br />
                    <Typography variant='h4'>Goals</Typography>
                    <br />
                    <br />
                    <Typography variant='h6'>Accessible color contrast</Typography>
                    <br />
                    <Typography variant='body1'>Initial builds of the website were incredibly non-compliant with contrast standards set by WCAG 2.1 AA. While U.S. Bank had committed to these standards, I pushed for full AAA compliance.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant='h6'>Fullscreen reader support</Typography>
                    <br />
                    <Typography variant='body1'>Neither member of the team was familiar with screen readers as a concept, which shouldn't have surprised me as acccessibility was often considered a QA issue at Elavon (but it still did). As the front end was based on the Lightning Design System and included hundreds of important CSS overrides, even getting the screen reader to understand a heading was initially a challenge.  
                    </Typography>
                    <br />
                    <br />
                    <Typography variant='h6'>Exhaustive keyboard accessibility</Typography>
                    <br />
                    <Typography variant='body1'>There was also no support for keyboard navigation within the custom components for this site. I documented these issues thoroughly so that the developer understood how to add them to the tab order.
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <Typography variant='h4'>Information Architecture</Typography>
                    <br />
                    <ProtectedImage src={site_map} alt="System status site map" />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Typography variant='h4'>Takeaways</Typography>
                    <br />
                    <br />
                    <Typography variant='h6'>Accessibility is not just a requirement, it&#39;s the right thing to do.
                    </Typography>
                    <br />
                    <Typography variant='body1'>I took the entire accessibility curriculum from Deque over the course of designing the site, and it really changed how I view even simple things like Javascript widgets. The team did not always understand why I was so gung-ho about screen readers, but now they do.
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <Typography variant='h6'>React would have been a better option</Typography>
                    <br />
                    <Typography variant='body1'>Many of the struggles we faced as a team, particularly around accessibility, were a result of shoehorning a design into a drag and drop UI editor in Salesforce. If we had used modern technology like React many of these issues could have been avoided.
                    </Typography>
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
