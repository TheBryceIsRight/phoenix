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
            <br />
            <br />
            <br />
            <Typography variant='h3'>About Me</Typography>
            <br />
            <Typography variant='h5'>I'm a UX Designer living in Atlanta, Georgia. I love helping create intuitive, efficient, accessible experiences in consumer software though UX Design and Full Stack development.
            </Typography>
            <br />
            <Link href="/work/resume" passHref>
                <Button color='secondary' variant='outlined' startIcon={<InsertDriveFile />}>
                    Resume
                </Button>
            </Link>
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
                <Typography variant="caption">© {new Date().getFullYear()} · Bryce Watson · All Rights Reserved </Typography>
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
                <Typography variant="body1">Photo Credit Georgia Tech Institute Communications
                </Typography>
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
