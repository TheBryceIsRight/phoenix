import SummaryCard from "../../components/summary-card"
import MyContainer from "../../components/container"
import { Container } from "@mui/material"
import { Typography } from "@mui/material"
import Image from 'next/image'
import site_map from '../../public/assets/blog/elavon/site_map.svg'
import undraw_hero from '../../public/assets/blog/elavon/undraw_hero.svg'
import style_light from '../../public/assets/blog/elavon/style_guide_light.svg'
import style_dark from '../../public/assets/blog/elavon/style_guide_dark.svg'
import Head from 'next/head'
import ProtectedImage from "../../components/protected-image"

export default function Devportal() {
    return <MyContainer>
        <Head>
            <title>Elavon - Dev Portal</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <br />
        <br />
        <br />
        <br />
        <br />
        <SummaryCard
            role="UX Designer"
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
            />
            <br />
            <br />
            <br />
        </Container>
        <Container maxWidth="lg">
            <Typography variant='h3'>Elavon, subsidiary of U.S. Bank</Typography>
            <br />
            <Typography variant='h4'>How do we make our documentation as helpful as possible?
            </Typography>
            <br />
            <Typography variant='body1'>As any developer will tell you, coding without documentation is a bit like flying without a radar. Having clear, concise, and approachable technical documentation not only makes devs lives easier, but it can be used by our sales team as a powerful marketing tool. The previous documentation hub, known as Developer Portal, was lacking in several aspects: visual clarity, performance, accessibility, and the technology had several layers of technical debt. The decision was made to scrap the previous site entirely, and build something completely new: an AWS integrated, markdown powered CMS running on Grav.
            </Typography>
            <br />
            <Typography variant='body1'>I worked with our digital Illustrator Keith Rosemond and my manager Robbie Beers on this project.
            </Typography>
            <br />
            <br />
            <br />
            <Typography variant='h4'>Goals</Typography>
            <br />
            <br />
            <Typography variant='h6'>Quickly Browse</Typography>
            <br />
            <Typography variant='body1'>Our documentation was originally written for paper, making the content about 50% longer than we needed it to be for web. Quick navigation also requires consistent headings, tables, and diagrams which were not present in the original.
            </Typography>
            <br />
            <br />
            <Typography variant='h6'>Integrated Code</Typography>
            <br />
            <Typography variant='body1'>Syntax highlighted code snippets and executable code samples were a key target for bringing the documentation in line with modern standards. Redoc was used to maintain consistency in our RESTful API specs.
            </Typography>
            <br />
            <br />
            <Typography variant='h6'>Focus on self-service</Typography>
            <br />
            <Typography variant='body1'>We sought to optimize several processes that currently require a phone call, from scoping a customer&#39;s payment integration to getting test card data to run dummy transactions.
            </Typography>
            <br />
            <br />
            <br />
            <Typography variant='h4'>Information Architecture</Typography>
            <br />
            <ProtectedImage src={site_map} alt="Elavon dev site map"/>
            <br />
            <br />
            <Typography variant='h4'>Style Guide</Typography>
            <br />
            <Image
                src={style_light}
                alt="Elavon style guide for light mode"
            />
            <br />
            <Image
                src={style_dark}
                alt="Elavon style guide for dark mode"
            />
            <br />
            <br />
            <br />
            <br />
            <Typography variant="h4">Mobile Prototype</Typography>
            <br />
            <br />
            <iframe width="100%" height="900" title="Figma prototype" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4Pydx6tuDUhxGqBaLvzKpO%2FPortfolio-(Copy)%3Fpage-id%3D33%253A2049%26node-id%3D33%253A2050%26viewport%3D1180%252C1331%252C0.45%26scaling%3Dscale-down%26starting-point-node-id%3D33%253A2050" allowFullScreen={true}>
            </iframe>
            <br />
            <br />
            <br />
            <br />
            <Typography variant='h4'>Takeaways</Typography>
            <br />
            <br />
            <Typography variant='h6'>Communication is key
            </Typography>
            <br />
            <Typography variant='body1'>We tried several methods of design hand off, and eventually settled on a two lane hand off stream - Zeplin for business or marketing folks that just wanted a preview, and a Bitbucket based Sketch repo for the developers to see a responsive view of the designs. Once the output streams were settled, there weren&#39;t any kinks in the hand off process.
            </Typography>
            <br />
            <br />
            <Typography variant='h6'>Flexibility is a requirement
            </Typography>
            <br />
            <Typography variant='body1'>There were times when I was coordinating the two different sites - in the EU and North America - where requirements would come down and no one could say where they came from. Often times they were from a EU stakeholder I had never met, but you can&#39;t let a little variety ruin your mojo. I worked with stakeholders on calls to make sure that the EU team was satisfied, even if it meant somewhat splintering the designs from each other in the short run.
            </Typography>
            <br />
            <br />
            <Typography variant='h6'>Good teamwork is essential</Typography>
            <br />
            <Typography variant='body1'>Often the blockers on this project were caused by developers trying to be Superman - only to end in sliding schedules. The best results come from Development and UX working in tandem.
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
