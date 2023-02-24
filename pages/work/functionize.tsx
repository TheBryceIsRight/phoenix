import SummaryCard from "../../components/summary-card"
import MyContainer from "../../components/container"
import { Box, Container, IconButton } from "@mui/material"
import { Typography } from "@mui/material"
import Image from 'next/image'
import site_map from '../../public/assets/blog/functionize/site_map.svg'
import undraw_hero from '../../public/assets/blog/functionize/undraw_hero.svg'
import design_system from '../../public/assets/blog/functionize/style_guide.svg'
import Head from 'next/head'
import ProtectedImage from "../../components/protected-image"
import EmblaCarousel from '../../components/emblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import { CSSProperties } from "react"

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

export default function Functionize() {

    const OPTIONS: EmblaOptionsType = {}
    const SLIDE_COUNT = 7
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return <MyContainer>
        <Head>
            <title>Functionize</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <br />
        <br />
        <br />
        <br />
        <br />
        <SummaryCard
            role="Design Lead"
            company="Functionize"
            timeframe="July 2021 - May 2022"
            teamstyle="Solo Designer"
            tools="Figma, Vue, Vuetify"
        >
        </SummaryCard>
        <Container maxWidth="sm">
            <br />
            <br />
            <br />
            <ProtectedImage
                src={undraw_hero}
                alt="Hero image for functionize"
            />
            <br />
            <br />
            <br />
        </Container>
        <Container maxWidth="lg">
            <Typography variant='h3'>Functionize</Typography>
            <br />
            <Typography variant='h4'>How do we fulfill the promise of automation for quality assurance professionals?
            </Typography>
            <br />
            <Typography variant='body1'>Full automated testing is still quite a ways away. However, that doesn&#39;t mean that the AI we have now isn&#39;t incredibly powerful, and Functionize attempts to harnass the latest developments in the science to make powerful, reliable tests for QA. The goal is to make tests that you can&#39;t ever break, even if you tried.
            </Typography>
            <br />
            <Typography variant='body1'>When I arrived at Functionize, you could argue the AI was too good - we had a world class backend, with some of the most advanced XPath replacements in the entire industry. Lost in all the money and time spent on the model was a similar level of effort to make the software polished and functional. Without a modern Javascript framework or a dedicated UX designer, the website was slow, inconsistent, hard to parse, and ultimately didn&#39;t demo very well. I was brought in to turn it around.
            </Typography>
            <br />
            <Typography variant='body1'>I worked with Elise Carmichael (VP Product) and Andrew Gassanoff (Visual Designer) on this project.
            </Typography>
            <br />
            <br />
            <Typography variant='h4'>Goals</Typography>
            <br />
            <br />
            <Typography variant='h6'>Visual clarity</Typography>
            <br />
            <Typography variant='body1'>Previous designers had set up the product to be angled at power users. This created a steep learning curve and numerous knock on effects. We had low conversion of free trial users, lots of customer questions about basic functions of the software, and a general lack of enthusiasm for the product&#39;s UI when demoing to potential clients. The backend was the star of the show, and that meant the frontend of the site had been neglected for some time.
            </Typography>
            <br />
            <br />
            <Typography variant='h6'>Less dialogs</Typography>
            <br />
            <Typography variant='body1'>Due to technical limitations and the experience level of the dev team when the site was built, every major function occurred in a dialog. While completely removing them on the first pass was technically infeasible, I cut them down as much as I could. Dialogs create accessibility problems, but they also limit the ability of the user to engage in a nonlinear workflow. The main component of the website - site actions - was completely reimagined to use tabs, expansion panels, and clear headings to allow multiple actions to be edited to their full extent without ever needing to go into a modal.
            </Typography>
            <br />
            <br />
            <Typography variant='h6'>Testing automation for everyone</Typography>
            <br />
            <Typography variant='body1'>I&#39;m passionate about making digital experiences first and foremost for those within the accessibility community. Initial Axe scans revealed a site that never had anyone audit it for a11y, with hundreds of critical and severe issues. Contrast issues were omnipresent, screen readers read text covered by other elements, keyboard navigation didn&#39;t exist, the dialogs weren&#39;t made to work in accessible context, and the list goes on. As the team hadn&#39;t worked on these kinds of bugs before, I became a strong proponent of Vuetify - an open source UI library using the Material Design specification that included many a11y best practices. Vuetify gave us a floor to prevent the most severe accessibility problems from making their way into production.
            </Typography>
            <br />
            <br />
            <br />
            <Typography variant='h4'>Information Architecture</Typography>
            <br />
            <Image
                src={site_map}
                alt="AllVoices site map"
            />
            <br />
            <br />
            <Typography variant='h4'>Style Guide</Typography>
            <br />
            <Image
                src={design_system}
                alt="AllVoices site map"
            />
            <br />
            <br />
            <Typography variant="h4">High Fidelity Mockups</Typography>
            <br />
            <EmblaCarousel slides={SLIDES} options={OPTIONS} type="fze_hi_fi" />
            <br />
            <br />
            <br />
            <br />
            <Typography variant="h4">Flow Prototype</Typography>
            <br />
            <Typography variant='body1'>Nicknamed Flow, this secondary product aimed to automatically track areas of test coverage and assess coverage gaps based on risk.</Typography>
            <br />
            <br />
            <div style={figmaWrapper}>
                <iframe aria-label="Flow Figma Prototype" style={iframeStyle} title="Figma prototype" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLELDGCXEKYpZOij4tOt740%2F%25F0%259F%25A7%25AA-Flow%3Fpage-id%3D0%253A1%26node-id%3D144%253A8604%26viewport%3D336%252C48%252C0.14%26scaling%3Dcontain%26starting-point-node-id%3D144%253A8604%26show-proto-sidebar%3D1" allowFullScreen={true}>
                </iframe>
            </div>
            <br />
            <br />
            <Typography variant='h4'>UX Overhaul Video Overview</Typography>
            <br />
            <Typography variant='body1'>The recent 5.1 release was the first step in the overhaul of the front end, and the first time many of my updates went live. Most of the changes were aimed at the core area of the product, the test detail page. This video was made with Visual Effects by Andrew Gassanoff and voiceover by Judy Bossi.</Typography>
            <br />
            <div style={videoWrapper}>
                <iframe aria-label="5.1 Release YouTube Video" style={iframeStyle} src="https://www.youtube.com/embed/86OaXBYycQg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}>
                </iframe>
            </div>
            <br />
            <br />
            <br />
            <br />
            <Typography variant='h4'>Takeaways</Typography>
            <br />
            <br />
            <Typography variant='h4'>Listen to your customers
            </Typography>
            <br />
            <Typography variant='body1'>Customers often have great suggestions for ways to improve the product. I enjoyed talking to testers and sdets who have used Functionize as their automation tool and what their pain points where.
            </Typography>
            <br />
            <br />
            <Typography variant='h6'>Don&#39;t reinvent the wheel
            </Typography>
            <br />
            <Typography variant='body1'>Even if the UX is new, the component pieces of UI should be standardized and recognizable. There were multiple places where a custom one-off piece of CSS determined something that vaguely resemebled a table. These were often completely inaccessible, and some of them exhibited glitchy behavior. All of these areas benefitted from a standardized vuetify data table, with built-in sorting and pagination. This also created consistency in the way we displayed data.
            </Typography>
            <br />
            <br />
            <Typography variant='h6'>Design systems are worth the hype</Typography>
            <br />
            <Typography variant='body1'>No one ever wants to let someone go for behavior problems. We want to believe that people will understand the way they affect people and work on themselves, but some never do. We track every single change to a case with a permanent, unchangeable activity log. We keep bad actors accountable, so when the time comes the paperwork trail is immaculate.
            </Typography>
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
    </MyContainer>
}
