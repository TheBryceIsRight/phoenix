import SummaryCard from "../../components/summary-card"
import MyContainer from "../../components/container"
import { Container } from "@mui/material"
import { Typography } from "@mui/material"
import Image from 'next/image'
import atlanta from '../../public/assets/aboutme/ATL.svg'
import atlanta_night from '../../public/assets/aboutme/ATL_Night.svg'
import coffee from '../../public/assets/aboutme/coffee.png'
import Head from 'next/head'
import ProtectedImage from "../../components/protected-image"
import { useTheme } from "@mui/material"

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
                src={coffee}
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
    </MyContainer>
}
