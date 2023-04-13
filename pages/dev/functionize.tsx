import SummaryCard from "../../components/summary-card"
import MyContainer from "../../components/container"
import { Chip, Container, Stack, Button } from "@mui/material"
import { Typography } from "@mui/material"
import Image from 'next/image'
import site_map from '../../public/assets/functionize/site_map.svg'
import undraw_hero from '../../public/assets/functionize/undraw_hero.svg'
import design_system from '../../public/assets/functionize/style_guide.svg'
import Head from 'next/head'
import ProtectedImage from "../../components/protected-image"
import EmblaCarousel from '../../components/emblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import { CSSProperties } from "react"
import Layout from "../../components/layout"
import Link from "next/link"
import { Palette } from '@mui/icons-material';

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

    return <Layout><MyContainer>
        <Head>
            <title>Functionize</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main aria-label="Functionize">
            <br />
            <br />
            <br />
            <br />
            <br />
            <SummaryCard
                role="Accessibility Specialist"
                company="Functionize"
                timeframe="July 2021 - May 2022"
                teamstyle="Solo Designer"
                tools="Vue, Vueitfy, Axe Pro, Voiceover"
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
                <Stack spacing={2} direction="row" alignItems="center">
                    <Typography variant='h3'>Functionize</Typography>
                    <Chip label="Developer Version" />
                </Stack>
                <br />
                <Typography variant='h4'>How do we fulfill the promise of automation for quality assurance professionals?
                </Typography>
                <br />
                <Typography variant='body1'>Fully automated testing is still quite a ways away. However, that doesn&#39;t mean that the AI we have now isn&#39;t incredibly powerful, and Functionize attempts to harnass the latest developments in the science to make powerful, reliable tests for QA. The goal is to make tests that you can&#39;t ever break, even if you tried.
                </Typography>
                <br />
                <Typography variant='body1'>When I arrived at Functionize, you could argue the AI was too good - we had a world class backend, with some of the most advanced XPath replacements in the entire industry. Lost in all the money and time spent on the model was a similar level of effort to make the software polished and functional. Without a modern Javascript framework or a dedicated UX designer, the website was slow, inconsistent, hard to parse, and ultimately didn&#39;t demo very well. I was brought in to turn it around.
                </Typography>
                <br />
                <Typography variant='body1'>I worked with Elise Carmichael (VP Product) and Andrew Gassanoff (Visual Designer) on this project.
                </Typography>
                <br />
                <Typography variant='body1'>This page covers my work as a Developer and Accessibility Specialist. If you are looking for my work as a product designer, you can go here:
                </Typography>
                <br />
                <Link href="/design/functionize" passHref>
                    <Button variant="outlined" color="secondary" startIcon={<Palette />}>Switch to Designer View</Button>
                </Link>
                <br />
                <br />
                <br />
                <Typography variant='h4'>Goals</Typography>
                <br />
                <br />
                <Typography variant='h6'>Better Contrast</Typography>
                <br />
                <Typography variant='body1'>A common complaint from our customers was that body copy and descriptions used a light purple on an even lighter purple background. Combined with our bright blue and white call to action styling, Functionize needed some serious love in the color contrast remediation department.
                </Typography>
                <br />
                <br />
                <Typography variant='h6'>Better Keyboard Support</Typography>
                <br />
                <Typography variant='body1'>There had previously been no attention paid to whether the platform supported visually impaired or blind invididuals. I resolved to change that by testing the site for keyboard accessibility exhaustively, one tab click at a time.
                </Typography>
                <br />
                <br />
                <Typography variant='h6'>Better Performance</Typography>
                <br />
                <Typography variant='body1'>While I was at Functionize I argued strongly that we should adopt a front end javascript framework in coordination with our lead developer. Many of the front end dialogs took an excessively long time to load, and using a modern tech stack would bring performance up to respectable levels. We arrived on Vuetify for our front end library due to it's built in animations, comprehensive list of pre built UI elements, and accessibility support.
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
                <br />
                <br />
                <br />
                <Typography variant="h4">Functionize Design System</Typography>
                <br />
                <Typography variant='body1'>Containing 38 individual tailored action types - from clicks and hovers to API calls - the design system I created for Functionize is the most comprehensive I've ever created. It allows internal employees a familiar set up to debug tests using the mountain of data at their disposal, while also deleting the key step information dialog that was the cause of so many user complaints. Fair warning: turning on outline mode will likely make the Linux dyno run out of RAM</Typography>
                <br />
                <br />
                <div style={figmaWrapper}>
                    <iframe aria-label="Functionize Design System" style={iframeStyle} title="Functionize Design System" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F8C51vS0sfgTDQKvVzKoxxJ%2FFunctionize-Design-System%3Fnode-id%3D0%253A1%26t%3D8b5bpLGqKNizhjlL-1" allowFullScreen={true}>
                    </iframe>
                </div>
                <br />
                <br />
                <br />
                <br />
                <Typography variant='h4'>Takeaways</Typography>
                <br />
                <br />
                <Typography variant='h6'>Accessibility starts in design</Typography>
                <br />
                <Typography variant='body1'>Many of the issues on the accessibility front could have saved the developers a lot of time if they had used a contrast checker and done some basic testing before going to production.
                </Typography>
                <br />
                <br />
                <Typography variant='h6'>Consistency = predictability
                </Typography>
                <br />
                <Typography variant='body1'>Occasionally developers would send me prototypes where they had tried to make their own table, menu, or some other typical UI component. I would redirect them to Vuetify, which often had a pre-built component right there ready for them to use. 
                </Typography>
                <br />
                <br />
                <Typography variant='h6'>Overcommunication is tiring, but it prevents misunderstanding in async environments</Typography>
                <br />
                <Typography variant='body1'>Creating the 38 tailored action types, each with 4 tabs, and all of them having different pieces of data cut for relevance, took a seriously long time. I had to go over every single input with the technical writer and project manager for every state the component could be in. But at the end of the process, we implemented a single test step component with 152 possible states with no issues. Previously each step had all of the same inputs and finding the info you wanted was incredibly taxing,so it also provided a much better user experience.
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
        </main>
    </MyContainer>
    </Layout>
}
