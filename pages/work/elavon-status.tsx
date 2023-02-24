import SummaryCard from "../../components/summary-card"
import MyContainer from "../../components/container"
import { Container } from "@mui/material"
import { Typography } from "@mui/material"
import Image from 'next/image'
import site_map from '../../public/assets/blog/elavon/site_map_ss.svg'
import undraw_hero from '../../public/assets/blog/elavon/undraw_hero_ss.svg'
import style_light from '../../public/assets/blog/elavon/style_guide_ss.svg'
import Head from 'next/head'
import ProtectedImage from "../../components/protected-image"
import EmblaCarousel from '../../components/emblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import { CSSProperties } from "react"

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

    return <MyContainer>
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
        <SummaryCard
            role="UX Designer"
            company="Elavon, subsidiary of U.S. Bank"
            timeframe="Feb 2020 - August 2020"
            teamstyle="Solo Designer"
            tools="Figma, UserTesting.com, Salesforce Lightning Design System"
        >
        </SummaryCard>
        <Container maxWidth="sm">
            <br />
            <br />
            <br />
            <Image
                src={undraw_hero}
                alt="Hero image for functionize"
                width={2000}
                height={2000}
            />
            <br />
            <br />
            <br />
        </Container>
        <Container maxWidth="lg">
            <Typography variant='h3'>Elavon, subsidiary of U.S. Bank</Typography>
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
            <br />
            <Typography variant='body1'>This project was done with the help of Ariel Rodriguez, the only developer, and Craig Bruce, our product owner.
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <Typography variant='h4'>Goals</Typography>
            <br />
            <br />
            <Typography variant='h6'>Clear data visualization</Typography>
            <br />
            <Typography variant='body1'>No more chasing emails to see what was going on, a live feed of every system we had in the company was actively tracked and updated without refreshing using various back-end APIs. Consistent icons, tags, and color coding helped easily identify issues at a glance.
            </Typography>
            <br />
            <br />
            <Typography variant='h6'>More than just tables</Typography>
            <br />
            <Typography variant='body1'>The initial build of the site was solely tables of information from different systems. There had not been any UX input until that point, and even the developer admitted it was ugly. I challenged the PO and dev to think beyond just top line numbers and color coding, and try to be a little ambitious - which in turn led to the creation of a map of different countries, and the ability to switch the map between maintenance and active issues.
            </Typography>
            <br />
            <br />
            <Typography variant='h6'>Situational Theming</Typography>
            <br />
            <Typography variant='body1'>Many modern websites do not have a single color pallete, and for developers dark mode is often preferred. As a result we began planning for both modes from the get go, allowing users to customize the site based on how much daylight they were experiencing.
            </Typography>
            <br />
            <br />
            <br />
            <Typography variant='h4'>Information Architecture</Typography>
            <br />
            <ProtectedImage src={site_map} alt="System status site map" />
            <br />
            <br />
            <Typography variant='h4'>Style Guide</Typography>
            <br />
            <Image
                src={style_light}
                alt="Elavon style guide for light mode"
            />
            <br />
            <br />
            <br />
            <br />
            <Typography variant="h4">Personas</Typography>
            <br />
            <EmblaCarousel slides={SLIDES} options={OPTIONS} type="elavon_personas" />
            <br />
            <br />
            <br />
            <Typography variant="h4">Low Fidelity Mockups</Typography>
            <br />
            <EmblaCarousel slides={SLIDES} options={OPTIONS} type="status_lowfi" />
            <br />
            <br />
            <br />
            <Typography variant="h4">High Fidelity Mockups</Typography>
            <br />
            <EmblaCarousel slides={SLIDES} options={OPTIONS} type="status_hifi" />
            <br />
            <br />
            <br />
            <Typography variant="h4">Dark Mode</Typography>
            <br />
            <EmblaCarousel slides={SLIDES} options={OPTIONS} type="status_hifi_dark" />
            <Typography variant="h4">Mobile Prototype</Typography>
            <br />
            <br />
            <br />
            <br />
            <div style={figmaWrapper}>
            <iframe style={iframeStyle} title="Figma prototype" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4Pydx6tuDUhxGqBaLvzKpO%2FPortfolio-(Copy)%3Fpage-id%3D142%253A8718%26node-id%3D147%253A113%26viewport%3D1516%252C242%252C0.3%26scaling%3Dscale-down%26starting-point-node-id%3D147%253A113" allowFullScreen={true}>
            </iframe>
            </div>
            <br />
            <br />
            <br />
            <Typography variant='h4'>Takeaways</Typography>
            <br />
            <br />
            <Typography variant='h6'>Accessibility is not just a requirement, it&#39;s the right thing to do.
            </Typography>
            <br />
            <Typography variant='body1'>I took the entire accessibility curriculum from Deque over the course of designing the site, and it really changed how I view even simple things like Javascript widgets. The team did not always understand why I was so gung ho about screen readers, but now they do.
            </Typography>
            <br />
            <br />
            <Typography variant='h6'>Simplicity over flashiness, trust over cutting edge.
            </Typography>
            <br />
            <Typography variant='body1'>One user in our user testing bemoaned the lack of “pizzazz” in the website, but I would say that&#39;s in some ways a compliment. I wanted the main home page in particular to be easy to digest, and if that means that there aren&#39;t flashing lights everywhere for example, I&#39;d say that&#39;s a good thing. Even though the site is internal, the plan is to expand and publish the site externally at some point, so there needs to be a level of polish that allows others to trust us.
            </Typography>
            <br />
            <br />
            <Typography variant='h6'>Explaining with design is good. Explaining with code is often better.</Typography>
            <br />
            <Typography variant='body1'>I built a parallel version of the site in React and Next.js (which became the basis of the site you&#39;re looking at right now!), in order to demonstrate some of the behavior to the team that I couldn&#39;t achieve with a Figma prototype. Once they saw the website, they immediately understood what I was asking for. Plus I got to polish my React skills to boot.
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
}
