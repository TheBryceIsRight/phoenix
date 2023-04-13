import SummaryCard from "../../components/summary-card"
import MyContainer from "../../components/container"
import { Chip, Container, Stack } from "@mui/material"
import { Typography, styled, Button, ButtonProps } from "@mui/material"
import Image from 'next/image'
import site_map from '../../public/assets/allvoices/av_sitemap.svg'
import undraw_hero from '../../public/assets/allvoices/undraw_hero.svg'
import Head from 'next/head'
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
    paddingBottom: "110.00%",
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


export default function AllVoices() {

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
                <title>AllVoices</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main aria-label="AllVoices">
                <br />
                <br />
                <br />
                <br />
                <br />
                <SummaryCard
                    role="Full Stack Developer"
                    company="AllVoices"
                    timeframe="May 2022 - Jan 2023"
                    teamstyle="Back end Dev Team of 4"
                    tools="Next.js, React, Typescript, Node.js, GraphQL, Mocha, Git, AWS"
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
                        <Typography variant='h3'>AllVoices</Typography>
                        <Chip label="Developer Version" />
                    </Stack>
                    <br />
                    <Typography variant='h4'>How do we give employees a platform to make their voice heard in the workplace?
                    </Typography>
                    <br />
                    <Typography variant='body1'>Everyone deserves a voice in workplace culture reform. As the head of product design at AllVoices I helped employees find a space to better communicate with their leadership teams. I reported to Jeff Harris, VP of Product and worked with Annie Meadows, Senior Product Owner, and Mateo Allen, Project Manager.
                    </Typography>
                    <br />
                    <Typography variant='body1'>This page covers my work as Full Stack Developer. If you are looking for my design work, you can go here:
                    </Typography>
                    <br />
                    <Link href="/design/allvoices" passHref>
                        <Button variant="outlined" color="secondary" startIcon={<Palette />}>Switch to Designer View</Button>
                    </Link>
                    <br />
                    <br />
                    <br />
                    <Typography variant='h4'>Goals</Typography>
                    <br />
                    <br />
                    <Typography variant='h6'>Data Security</Typography>
                    <br />
                    <Typography variant='body1'>This platform has no shortage of very important personal information that needs to be properly protected. I needed to ensure that every feature had the proper set of permissions and was secure using the highest standard of encryption.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant='h6'>Functional Components</Typography>
                    <br />
                    <Typography variant='body1'>One of my first initiatives upon entering this role was to standardize all major UI components in a design system. As a developer that often meant taking a look at the custom built Styled Components based library for possible simplifications and accessibility practices.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant='h6'>360° View</Typography>
                    <br />
                    <Typography variant='body1'>Quickly into my role at AllVoices I outpaced the rate of new design work, which led to me adopting an entire second role: full stack developer. As front end had enough resources, I primarily wrote back end APIs in Node.js within Next.js using GraphQL. I would also occaisonally take front end React stories so that I could link the two sides of the feature together. Few developers on staff had an understanding of the platform from both angles, so I was also a resource for bug diagnosis and remidation.
                    </Typography>
                    <br />
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
                    <Typography variant="h4">Slack for Employees</Typography>
                    <br />
                    <br />
                    <div style={figmaWrapper}>
                        <iframe onError={function () { /* silence */ }} aria-label="Slack for employees prototype" style={iframeStyle} title="Slack for employees prototype" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJtqNTHZeuDMAGmCEXdFuCC%2FSlack-for-Employees%3Fpage-id%3D0%253A1%26node-id%3D2-3667%26viewport%3D691%252C889%252C0.22%26scaling%3Dmin-zoom%26starting-point-node-id%3D2%253A3667" allowFullScreen={true}>
                        </iframe>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Typography variant="h4">Messaging Templates</Typography>
                    <br />
                    <Typography variant='body1'>This was one of the first features I wrote where I was wholly responsible from end to end, including back end API tests in Mocha.js. It includes multiple permissions checks so that only those who create a message template can see the delete icon.
                    </Typography>
                    <br />
                    <div style={figmaWrapper}>
                        <iframe onError={function () { /* silence */ }} aria-label="Messaging Templatges Figma prototype" style={iframeStyle} title="Messaging Templates prototype" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkqYsCa4kp0k7QJLEdhTMhS%2FMessage-Templating%3Fpage-id%3D0%253A1%26node-id%3D247%253A13058%26viewport%3D-160%252C541%252C0.1%26scaling%3Dscale-down-width%26starting-point-node-id%3D247%253A13058" allowFullScreen={true}>
                        </iframe>
                    </div>
                    <br />
                    <br />
                    <Typography variant="h4">Accessibility</Typography>
                    <br />
                    <Typography variant='body1'>One of the first things I worked on at AllVoices, I scanned the entire form submission flow using Axe Pro by Deque systems and fixed several critical color contrast and form label issues.
                    </Typography>
                    <br />
                    <div style={figmaWrapper}>
                        <iframe onError={function () { /* silence */ }} aria-label="Messaging Templatges Figma prototype" style={iframeStyle} title="Messaging Templates prototype" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fn1iwqE1ScnVglZmU3FZraD%2FSurvey-A11y-Quick-Wins%3Fnode-id%3D0%253A1%26t%3DYVk5LyKXfcK98UJQ-1" allowFullScreen={true}>
                        </iframe>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Typography variant='h4'>Takeaways</Typography>
                    <br />
                    <br />
                    <Typography variant='h6'>Designers work better when they understand their developers
                    </Typography>
                    <br />
                    <Typography variant='body1'>While some designers may scoff at the idea that learning to code is important, it is impossible to fully account for what you're asking someone to build for you unless you grasp how they are doing it. Joining the back end team and closing PRs gave me a much better understanding of the scope of work required anytime someone recommended a new feature or product.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant='h6'>There are no shortcuts to Accessibility. It is a way of life.</Typography>
                    <br />
                    <Typography variant='body1'>While I could prevent many accessibility issues from being introduced on the design side, having access to the entire tech stack of the application across the different development teams gave me far more power to fix these issues. I diagnosed, documented, tracked, and remediated over 400 issues across the platform. I also tried my best to educate the development team on best practices so as to not introduce any further problems.
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
