import SummaryCard from "../../components/summary-card"
import MyContainer from "../../components/container"
import { Container, Box, Typography, Paper } from "@mui/material"
import Image from 'next/image';
import undraw_hero from '../../public/assets/elavon/undraw_hero.svg'
import Head from 'next/head'
import { EmblaOptionsType } from 'embla-carousel-react'
import { CSSProperties } from "react"
import user_journey from '../../public/assets/elavon/UserJourney.svg'
import Layout from "../../components/layout"
import { Button, ButtonProps, Stack, Chip, styled } from "@mui/material"
import Link from "next/link";
import { Palette } from '@mui/icons-material';
import ProtectedImage from "../../components/protected-image"
import site_map from '../../public/assets/elavon/site_map.svg'
import ACME_home from "../../public/assets/acme/ACME-home.png"
import ACME_details from "../../public/assets/acme/ACME-details.png"


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

const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 0,
}));



export default function Devportal() {
    const OPTIONS: EmblaOptionsType = {}
    const SLIDE_COUNT = 9
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return <Layout><MyContainer>
        <Head>
            <title>Elavon - Dev Portal</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main aria-label="Elavon Dev Portal">
            <br />
            <br />
            <br />
            <br />
            <br />
            <SummaryCard
                role="Accessibility Specialist"
                company="Elavon, subsidiary of U.S. Bank"
                timeframe="Aug 2018 - Jan 2020"
                teamstyle="Solo Designer"
                tools="Sketch, Figma, UserTesting.com, Adobe Illustrator, After Effects"
            >
            </SummaryCard>
            <Container maxWidth="sm">
                <br />
                <br />
                <br />
                <Image
                    src={undraw_hero}
                    alt="Hero image for functionize"
                    width={1000}
                    height={1000}
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
                <Typography variant='h4'>How do we make our documentation as helpful as possible?
                </Typography>
                <br />
                <Typography variant='body1'>As any developer will tell you, coding without documentation is a bit like flying without a radar. Having clear, concise, and approachable technical documentation not only makes devs lives easier, but it can be used by our sales team as a powerful marketing tool. The previous documentation hub, known as Developer Portal, was lacking in several aspects: visual clarity, performance, accessibility, and the technology had several layers of technical debt. The decision was made to scrap the previous site entirely, and build something completely new: an AWS integrated, markdown powered CMS running on Grav. Elavon has thousands of pages of technical documentation, so converting it from PDF and organizing it was no small undertaking.
                </Typography>
                <br />
                <Typography variant='body1'>I worked with our digital Illustrator Keith Rosemond and my manager Robbie Beers on this project.
                </Typography>
                <br />
                <Typography variant='body1'>This page covers my work as an accessibility specialist. If you are looking for my designer work, you can go here:
                </Typography>
                <br />
                <Link href="/design/elavon-dev" passHref>
                    <Button variant="outlined" color="secondary" startIcon={<Palette />}>Switch to Designer View</Button>
                </Link>
                <br />
                <br />
                <br />
                <Typography variant='h4'>Goals</Typography>
                <br />
                <br />
                <Typography variant='h6'>Accessible Documentation</Typography>
                <br />
                <Typography variant='body1'>Much of the documentation that needed migrating was in PDF format, and ultimately the most accessible form is HTML. During my downtime from designing I pitched in on the tech writing team to convert some exisiting docs.
                </Typography>
                <br />
                <br />
                <Typography variant='h6'>Better Developer Experience</Typography>
                <br />
                <Typography variant='body1'>As we weren't able to adopt Figma at the time, the lead developer and I devised a method of pushing all of my Sketch updates to an internal git repo so that everything would be clearly backed up and documented. This helped him understand what the main changes were since everything was in one file. This also helped me become familiar with Git early on in my career while I was still enrolled full time at the Georgia Institute of Technology.
                </Typography>
                <br />
                <br />
                <br />
                <br />
                <Typography variant='h4'>Information Architecture</Typography>
                <br />
                <ProtectedImage src={site_map} alt="Elavon dev site map" />
                <br />
                <Typography variant="h4">API Channel Management & Engagement</Typography>
                <br />
                <Typography variant='body1'>I worked very closely with the information architect during my time with Dev Portal. I helped him come up with an internal website for tracking API maturity across the organization and holding product owners accountable for progress.
                </Typography>
                <br />
                <Image
                    src={ACME_home}
                    alt="API Channel Management and Engagement Home Page"
                />
                <br />
                <Image
                    src={ACME_details}
                    alt="API Channel Management and Engagement Home Page"
                />
                <br />
                <br />
                <br />
                <Typography variant='h4'>Takeaways</Typography>
                <br />
                <br />
                <Typography variant='h6'>Listen first, ask questions later
                </Typography>
                <br />
                <Typography variant='body1'>As this was my first full time job out of college (and during college), I quickly realized that there were a lot of things I needed to learn. Fortunately the team did a great job of helping me understand a large complex documentation site piece by piece until I got a handle on it.
                </Typography>
                <br />
                <br />
                <Typography variant='h6'>Designs are temporary, but good software can live a life all its own
                </Typography>
                <br />
                <Typography variant='body1'>I was frequently amazed at the age of much of Elavon's internal systems, including the team of COBOL developers everyone collectively referred to as "the dinosaurs" 🦕. But in many ways, it's a testament to the original developers that these financial systems continue to function largely without issue decades later. The information architect made sure that I understood that while designs may follow the whims of trends or the capabilities of new front end systems, the underlying data structure can last quite a long time.
                </Typography>
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
