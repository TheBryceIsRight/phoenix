import SummaryCard from "../../components/summary-card"
import MyContainer from "../../components/container"
import { Container } from "@mui/material"
import { Typography } from "@mui/material"
import Image from 'next/image'
import site_map from '../../public/assets/blog/allvoices/av_sitemap.svg'
import undraw_hero from '../../public/assets/blog/allvoices/undraw_hero.svg'
import design_system from '../../public/assets/blog/allvoices/av_design_system.svg'
import Head from 'next/head'
import ProtectedImage from "../../components/protected-image"

export default function AllVoices() {
    return <MyContainer>
        <Head>
            <title>AllVoices</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <br />
        <br />
        <br />
        <br />
        <br />
        <SummaryCard
            role="UX Lead"
            company="AllVoices"
            timeframe="May 2022 - Jan 2023"
            teamstyle="Solo Designer"
            tools="Figma, Adobe Illustrator, After Effects, Blender"
        >
        </SummaryCard>
        <Container maxWidth="sm">
            <br />
            <br />
            <br />
            <Image
                src={undraw_hero}
                alt="Hero image for allvoices"
            />
            <br />
            <br />
            <br />
        </Container>
        <Container maxWidth="lg">
            <Typography variant='h3'>AllVoices</Typography>
            <br />
            <Typography variant='h4'>How do we give employees a platform to make their voice heard in the workplace?
            </Typography>
            <br />
            <Typography variant='body1'>Everyone deserves a voice in workplace culture reform. As the head of product design at AllVoices I help employees find a space to better communicate with their leadership teams. I report to Jeff Harris, VP of Product and work with Annie Meadows, Senior Product Owner, and Mateo Allen, Project Manager.
            </Typography>
            <br />
            <br />
            <br />
            <Typography variant='h4'>Goals</Typography>
            <br />
            <br />
            <Typography variant='h6'>Employees First</Typography>
            <br />
            <Typography variant='body1'>Our platform provides a space to provide feedback but also serious concerns that may be criminal in nature. Retaliation is unfortunately common, and software like AllVoices helps create a paper trail that keeps bad actors accountable for their behavior.
            </Typography>
            <br />
            <br />
            <Typography variant='h6'>Consistency is key</Typography>
            <br />
            <Typography variant='body1'>One of my first initiatives upon entering this role was to standardize all major UI components in a design system. This system would go on to include code snippets for better developer handoff, entire flows for Sales demos, and all photography and graphics for Marketing&#39;s use.
            </Typography>
            <br />
            <br />
            <Typography variant='h6'>Multi-dimensional impact</Typography>
            <br />
            <Typography variant='body1'>At AllVoices I began to offer a broader set skills than I had performed in the past and got 3D animation in Blender, 2D animation in After Effects, and graphical illustration approved for marketing use. I also helped out with full-stack development in Node.js to make the company&#39;s Slack integration.
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
            <br />
            <Typography variant='h4'>Style Guide</Typography>
            <br />
            <ProtectedImage
                src={design_system}
                alt="AllVoices site map"
            />
            <br />
            <br />
            <br />
            <Typography variant="h4">Messaging Templates</Typography>
            <br />
            <br />
            <iframe width="100%" height="700" title="Messaging Templatges prototype" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkqYsCa4kp0k7QJLEdhTMhS%2FMessage-Templating%3Fpage-id%3D0%253A1%26node-id%3D247%253A13058%26viewport%3D-160%252C541%252C0.1%26scaling%3Dscale-down-width%26starting-point-node-id%3D247%253A13058" allowFullScreen={true}>
            </iframe>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Typography variant='h4'>3D Animation</Typography>
            <br />
            <br />
            <iframe width="100%" height="750" src="https://www.youtube.com/embed/TmycswtSMgQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}>
            </iframe>
            <br />
            <br />
            <br />
            <br />
            <Typography variant='h4'>Takeaways</Typography>
            <br />
            <br />
            <Typography variant='h6'>Employees in crisis often have no options except to quit. We provide an alternative.
            </Typography>
            <br />
            <Typography variant='body1'>Anonymous reporting isn&#39;t a dirty word, it allows employees to be honest. When the conversations happen that define the company culture, it&#39;s vitally important that the topics are about things that the employees actually care about. If you&#39;re not getting honest feedback, your feedback is worthless.

            </Typography>
            <br />
            <br />
            <Typography variant='h6'>Letting an employee go is never easy. An accurate record of behavior forces the change that need to happen.</Typography>
            <br />
            <Typography variant='body1'>No one ever wants to let someone go for behavior problems. We want to believe that people will understand the way they affect people and work on themselves, but some never do. We track every single change to a case with a permanent, unchangeable activity log. We keep bad actors accountable, so when the time comes the paperwork trail is immaculate.
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
    </MyContainer>
}
