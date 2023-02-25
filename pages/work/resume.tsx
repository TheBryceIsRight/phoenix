import MyContainer from "../../components/container"
import { Container } from "@mui/material"
import { Typography } from "@mui/material"
import Image from 'next/image'
import Head from 'next/head'
import ProtectedImage from "../../components/protected-image"
import { useTheme } from "@mui/material"
import { Button } from "@mui/material"
import Link from "next/link"
import { Mail } from "@mui/icons-material"
import Grid from '@mui/material/Unstable_Grid2'
import { Tooltip } from "@mui/material"
import { IconButton } from "@mui/material"
import LinkedIn from "@mui/icons-material/LinkedIn"
import GitHub from "@mui/icons-material/GitHub"
import Toolbar from '@mui/material/Toolbar';
import YOKE from "../../public/assets/aboutme/YOKE.svg"
import { YokeDesc, YokeTime, YokeTitle, FuncionizeTime, FunctionizeDesc, FunctionizeTitle, ElavonTime, ElavonTitle, ElavonDesc, GatechTime, GatechDesc, GatechTitle, GatechTATime, GatechTADesc, GatechTATitle, AllVoicesTime, AllVoicesTitle, AllVoicesDesc } from "../../lib/strings"
import AllVoices from "../../public/assets/aboutme/AllVoices.svg"
import Functionize from "../../public/assets/aboutme/Functionize.svg"
import Elavon from "../../public/assets/aboutme/Elavon.svg"
import GT from "../../public/assets/aboutme/GT.svg"
import NextJS from "../../public/assets/aboutme/NextJS.svg"
import ReactJS from "../../public/assets/aboutme/ReactJS.svg"
import NodeJS from "../../public/assets/aboutme/NodeJS.svg"
import VueJS from "../../public/assets/aboutme/VueJS.svg"
import Python from "../../public/assets/aboutme/Python.svg"
import TS from "../../public/assets/aboutme/TS.svg"
import Java from "../../public/assets/aboutme/Java.svg"
import CSharp from "../../public/assets/aboutme/CSharp.svg"
import C from "../../public/assets/aboutme/C.svg"
import GraphQL from "../../public/assets/aboutme/GraphQL.svg"
import Figma from "../../public/assets/aboutme/Figma.svg"
import Sketch from "../../public/assets/aboutme/Sketch.svg"
import Illustrator from "../../public/assets/aboutme/Illustrator.svg"
import Photoshop from "../../public/assets/aboutme/Photoshop.svg"
import InDesign from "../../public/assets/aboutme/InDesign.svg"
import PremierePro from "../../public/assets/aboutme/PremierePro.svg"
import Blender from "../../public/assets/aboutme/Blender.svg"
import ExperienceEntry from "../../components/experienceEntry"


export default function Resume() {
    const theme = useTheme();

    return <MyContainer>
        <Head>
            <title>Resume</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main aria-label="Resume">
            <Container maxWidth="lg">
                <br />
                <br />
                <br />
                <br />
                <Typography variant='h1'>Bryce Watson</Typography>
                <br />
                <Grid container spacing={2} alignItems='center' alignContent='flex-start' maxWidth="lg" flexWrap="wrap" direction="row" >
                    <Grid>
                        <Typography variant='body1' fontWeight={500}>U.S. Citizen · Atlanta, GA</Typography>
                    </Grid>
                    <Grid>
                        <Link href="mailto:brycewatson315@gmail.com" passHref>
                            <Button color='secondary' variant='outlined' startIcon={<Mail />}>
                                brycewatson315@gmail.com
                            </Button>
                        </Link>
                    </Grid>

                    <Grid>
                        <Toolbar disableGutters={true} variant="dense">
                            <Tooltip title="LinkedIn" arrow>
                                <IconButton
                                    size="large"
                                    color="secondary"
                                    aria-label="LinkedIn"
                                    sx={{ mr: 2 }}
                                >
                                    <LinkedIn />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="GitHub" arrow>
                                <IconButton
                                    size="large"
                                    color="secondary"
                                    aria-label="GitHub"
                                    sx={{ mr: 2 }}
                                >
                                    <GitHub />
                                </IconButton>
                            </Tooltip>
                        </Toolbar>
                    </Grid>
                </Grid>
                <br />
                <br />
                <br />
                <br />
                <Typography variant='h2' fontWeight={300}>Experience</Typography>
                <br />
                <ExperienceEntry logo="YOKE" time={YokeTime} title={YokeTitle} description={YokeDesc} />
                <br />
                <br />
                <ExperienceEntry logo="AllVoices" time={AllVoicesTime} title={AllVoicesTitle} description={AllVoicesDesc} />
                <br />
                <br />
                <ExperienceEntry logo="Functionize" time={FuncionizeTime} title={FunctionizeTitle} description={FunctionizeDesc} />
                <br />
                <br />
                <ExperienceEntry logo="Elavon" time={ElavonTime} title={ElavonTitle} description={ElavonDesc} />
                <br />
                <br />
                <ExperienceEntry logo="GT" time={GatechTATime} title={GatechTATitle} description={GatechTADesc} />
                <br />
                <br />
                <Typography variant='h2' fontWeight={300}>Education</Typography>
                <br />
                <br />
                <ExperienceEntry logo="GT" time={GatechTime} title={GatechTitle} description={GatechDesc} />
                <br />
            </Container>
            <br />
            <br />
            <br />
            <br />
        </main>
    </MyContainer>
}
