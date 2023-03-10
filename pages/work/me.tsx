import MyContainer from "../../components/container"
import { Container, Button } from "@mui/material"
import { Typography } from "@mui/material"
import Image from 'next/image'
import atlanta from '../../public/assets/aboutme/ATL.svg'
import atlanta_night from '../../public/assets/aboutme/ATL_Night.svg'
import LA from '../../public/assets/aboutme/LANationalPark.jpg'
import Head from 'next/head'
import ProtectedImage from "../../components/protected-image"
import { useTheme } from "@mui/material"
import Footer from "../../components/footer"
import Link from "next/link"
import { InsertDriveFile } from "@mui/icons-material"

export default function Aboutme() {
    const theme = useTheme();

    return <MyContainer>
        <Head>
            <title>About Me</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main aria-label="About Me">
            <br />
            <br />
            <br />
            <br />
            <Container maxWidth="md">
                <Typography variant='h3'>About Me</Typography>
                <br />
                <Typography variant='h6'>Hey! I'm Bryce, and I live in Atlanta, Georgia. I've worked in Fintech, QA automation, HR Tech, and crowd fundraising as a hybrid UX Designer and full stack developer.
                </Typography>
                <br />
                <Typography variant='h6'>As a UX Designer I'm particularly passionate about accessibility. I've diagnosed, documented, and fixed over a thousand of these issues big and small across the different companies I've worked for.
                </Typography>
                <br />
                <Typography variant='h6'>As a Developer I've helped implement my designs in React (including Next.js, the framework I wrote this site in), Vue, HTML, and CSS. I also have experience as a backend developer at AllVoices, writing performant and robust GraphQL APIs as well as automated tests that continue to operate in production today.
                </Typography>
                <br />
                <br />
                <Link href="/work/resume" passHref>
                    <Button color='secondary' variant='outlined' startIcon={<InsertDriveFile />}>
                        Resume
                    </Button>
                </Link>
                <br />
            </Container>
            <br />

            <Container maxWidth="xl">
                <br />
                <br />
                <br />
                {theme.palette.mode === "light" ?
                    <ProtectedImage
                        src={atlanta}
                        alt="Atlanta"
                    />
                    :
                    <ProtectedImage
                        src={atlanta_night}
                        alt="Atlanta"
                    />
                }
                <br />
                <Typography variant="body1">My hometown, drawn in Figma.
                </Typography>
                <Typography variant="caption">?? {new Date().getFullYear()} ?? Bryce Watson ?? All Rights Reserved </Typography>
                <br />
                <br />
                <br />
                <br />
                <Image
                    src={LA}
                    alt="Me serving coffee next to a Kyoto brewer"
                    style={{ borderRadius: 6 }}
                    loading="eager"
                />
                <br />
                <Link href="https://www.linkedin.com/in/ksenia-b/" target="_blank">
                    <Typography variant="body1">Photo Credit Ksenia Bogolyubtseva - QA Analyst
                    </Typography>
                </Link>
                <br />
                <br />
            </Container>
            <Container maxWidth="lg">

                <br />
                <br />
                <br />
                <br />
            </Container>
            <br />
            <br />
            <br />
            <br />
        </main>
        <footer>
            <Footer />
        </footer>
    </MyContainer>
}
