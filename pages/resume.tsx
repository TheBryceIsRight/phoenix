import MyContainer from "../components/container"
import { Container } from "@mui/material"
import { Typography } from "@mui/material"
import Image from 'next/image'
import Head from 'next/head'
import { useTheme } from "@mui/material"
import { Button } from "@mui/material"
import Link from "next/link"
import { Mail, Photo } from "@mui/icons-material"
import Grid from '@mui/material/Unstable_Grid2'
import { Tooltip } from "@mui/material"
import { IconButton } from "@mui/material"
import LinkedIn from "@mui/icons-material/LinkedIn"
import GitHub from "@mui/icons-material/GitHub"
import Toolbar from '@mui/material/Toolbar';
import { YokeDesc, YokeTime, YokeTitle, FuncionizeTime, FunctionizeDesc, FunctionizeTitle, ElavonTime, ElavonTitle, ElavonDesc, GatechTime, GatechDesc, GatechTitle, GatechTATime, GatechTADesc, GatechTATitle, AllVoicesTime, AllVoicesTitle, AllVoicesDesc, YokeLink, AllVoicesLink, FunctionizeLink, ElavonLink, GatechTALink, ToHellWithGeorgia, AllVoicesTitle2, AllVoicesDesc2, AllVoicesNote, GKTime, GKTitle, GKDesc, GKLink } from "../lib/strings"
import NextJS from "../public/assets/aboutme/NextJS.svg"
import NextJS_Dark from "../public/assets/aboutme/NextJS_Dark.svg"
import ReactJS from "../public/assets/aboutme/ReactJS.svg"
import NodeJS from "../public/assets/aboutme/NodeJS.svg"
import VueJS from "../public/assets/aboutme/VueJS.svg"
import Python from "../public/assets/aboutme/Python.svg"
import TS from "../public/assets/aboutme/TS.svg"
import Java from "../public/assets/aboutme/Java.svg"
import CSharp from "../public/assets/aboutme/CSharp.svg"
import C from "../public/assets/aboutme/C.svg"
import GraphQL from "../public/assets/aboutme/GraphQL.svg"
import Figma from "../public/assets/aboutme/Figma.svg"
import Sketch from "../public/assets/aboutme/Sketch.svg"
import Illustrator from "../public/assets/aboutme/Illustrator.svg"
import Photoshop from "../public/assets/aboutme/Photoshop.svg"
import InDesign from "../public/assets/aboutme/InDesign.svg"
import PremierePro from "../public/assets/aboutme/PremierePro.svg"
import AfterEffects from "../public/assets/aboutme/AfterEffects.svg"
import Blender from "../public/assets/aboutme/Blender.svg"
import Unity from "../public/assets/aboutme/Unity.svg"
import Unity_Dark from "../public/assets/aboutme/Unity_Dark.svg"
import ExperienceEntry from "../components/experienceEntry"
import ExperienceEntryExtended from "../components/experienceEntryExtended"
import AdobeXD from "../public/assets/aboutme/XD.svg"
import { Download } from "@mui/icons-material"
import Layout from "../components/layout"
import { Tools, Design, ComputerLanguagesAndLibraries, Development} from '../lib/strings'


export default function Resume() {
    const theme = useTheme();

    return <Layout><MyContainer>
        <Head>
            <title>Resume</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main aria-label="Resume">
            <Container maxWidth="md">
                <br />
                <br />
                <br />
                <br />
                <Typography variant='h1'>Bryce Watson</Typography>
                <br />
                <Grid container spacing={4} alignItems='center' alignContent='flex-start' maxWidth="lg" flexWrap="wrap" direction="row" >
                    <Grid>
                        <Typography variant='body1' fontWeight={500}>U.S. Citizen · Seattle, WA</Typography>
                    </Grid>
                    <Grid>
                        <Link href="mailto:brycewatson315@gmail.com" passHref tabIndex={-1}>
                            <Button color='secondary' variant='outlined' startIcon={<Mail />}>
                                brycewatson315@gmail.com
                            </Button>
                        </Link>
                    </Grid>
                    <Toolbar disableGutters={true} variant="dense">
                        <Link passHref href="https://www.linkedin.com/in/bryce-watson-gatech/" target="_blank" tabIndex={-1}>
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
                        </Link>
                        <Link passHref href="https://github.com/TheBryceIsRight" target="_blank" tabIndex={-1}>
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
                        </Link>
                        <Link passHref href="https://drive.google.com/file/d/1IfeDgsPbhzMN7PU0KCVsFuJ6S6qsBJe0/view?usp=drive_link" target="_blank" tabIndex={-1}>
                            <Tooltip title="Download Resume" arrow>
                                <Button
                                    size="large"
                                    color="secondary"
                                    aria-label="Download Resume"
                                    startIcon={
                                        <Download />
                                    }
                                    sx={{ mr: 2 }}
                                >
                                    Download Resume
                                </Button>
                            </Tooltip>
                        </Link>
                    </Toolbar>
                </Grid>
                <br />
                <br />
                <br />
                <Typography variant='h2' fontWeight={300}>Experience</Typography>
                <br />
                <br />
                <ExperienceEntry
                    logo="GitKraken"
                    time={GKTime}
                    title={GKTitle}
                    description={GKDesc}
                    link={GKLink} />
                <br />
                <br />
                <br />
                <ExperienceEntry
                    logo="YOKE"
                    time={YokeTime}
                    title={YokeTitle}
                    description={YokeDesc}
                    link={YokeLink} />
                <br />
                <br />
                <ExperienceEntryExtended
                    logo="AllVoices"
                    time={AllVoicesTime}
                    title={AllVoicesTitle}
                    description={AllVoicesDesc}
                    link={AllVoicesLink}
                    title2={AllVoicesTitle2}
                    description2={AllVoicesDesc2}
                    note={AllVoicesNote} />
                <br />
                <br />
                <ExperienceEntry
                    logo="Functionize"
                    time={FuncionizeTime}
                    title={FunctionizeTitle}
                    description={FunctionizeDesc}
                    link={FunctionizeLink} />
                <br />
                <br />
                <ExperienceEntry
                    logo="Elavon"
                    time={ElavonTime}
                    title={ElavonTitle}
                    description={ElavonDesc}
                    link={ElavonLink} />
                <br />
                <br />
                <ExperienceEntry
                    logo="GT"
                    time={GatechTATime}
                    title={GatechTATitle}
                    description={GatechTADesc}
                    link={GatechTALink} />
                <br />
                <br />
                <br />
                <Typography variant='h2' fontWeight={300}>Education</Typography>
                <br />
                <br />
                <ExperienceEntry
                    logo="GT"
                    time={GatechTime}
                    title={GatechTitle}
                    description={GatechDesc}
                    link={ToHellWithGeorgia} />
                <br />
                <br />
                <Typography variant='h2' fontWeight={300}>Skills</Typography>
                <br />
                <br />
                <Typography variant='h3'>Computer Languages</Typography>
                <br />
                <br />
                <Grid container spacing={6}>
                    <Grid style={{ textAlign: "center" }}>
                        <Tooltip title="I wrote this portfolio in Next.js!">
                            {theme.palette.mode === "light" ?
                                <Image
                                    src={NextJS}
                                    alt="NextJS"
                                    height={100}
                                    width={100}
                                >
                                </Image>
                                :
                                <Image
                                    src={NextJS_Dark}
                                    alt="NextJS"
                                    height={100}
                                    width={100}
                                >
                                </Image>
                            }
                        </Tooltip>
                        <br />
                        <Typography variant='body1'>Next.js</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={ReactJS}
                            alt="ReactJS"
                            height={100}
                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>React.js</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={NodeJS}
                            alt="NodeJS"
                            height={100}
                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>Node.js</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={VueJS}
                            alt="VueJS"
                            height={100}
                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>Vue.js</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        {theme.palette.mode === "light" ?
                            <Image
                                src={Unity}
                                alt="Unity"
                                height={100}
                                width={100}
                            >
                            </Image>
                            :
                            <Image
                                src={Unity_Dark}
                                alt="Unity"
                                height={100}
                                width={100}
                            >
                            </Image>
                        }
                        <br />
                        <Typography variant='body1'>Unity</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={TS}
                            alt="Typescript"
                            height={100}
                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>Typescript</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={Python}
                            alt="Python"
                            height={100}
                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>Python</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={GraphQL}
                            alt="GraphQL"
                            height={100}
                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>Graph QL</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={Java}
                            alt="Java"
                            height={100}
                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>Java</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={CSharp}
                            alt="CSharp"
                            height={100}
                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>C Sharp</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={C}
                            alt="C Programming Language"
                            height={100}
                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>C</Typography>
                    </Grid>

                </Grid>
                <br />
                <br />
                <Typography variant='h3'>Design & Media</Typography>
                <br />
                <br />
                <Grid container spacing={5}>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={Figma}
                            alt="Figma"
                            height={100}

                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>Figma</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={Sketch}
                            alt="Sketch"
                            height={100}
                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>Sketch</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={AdobeXD}
                            alt="Illustrator"
                            height={100}
                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>Adobe XD</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={Illustrator}
                            alt="Illustrator"
                            height={100}
                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>Illustrator</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={Photoshop}
                            alt="Photoshop"
                            height={100}
                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>Photoshop</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={InDesign}
                            alt="InDesign"
                            height={100}
                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>InDesign</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={PremierePro}
                            alt="Premiere Pro"
                            height={100}
                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>Premiere Pro</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={AfterEffects}
                            alt="After Effects"
                            height={100}
                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>After Effects</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "center" }}>
                        <Image
                            src={Blender}
                            alt="Blender"
                            height={100}
                        >
                        </Image>
                        <br />
                        <Typography variant='body1'>Blender</Typography>
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <br/>
                <br/>
                <Typography variant='h4'>Skills Addendum</Typography>
                <br/>
                <br/>
                <Typography variant='h5'>Tools</Typography>
                <br/>
                <Typography variant='body1'>{Tools}</Typography>
                <br/>
                <br/>
                <Typography variant='h5'>Design</Typography>
                <br/>
                <Typography variant='body1'>{Design}</Typography>
                <br/>
                <br/>
                <Typography variant='h5'>Computer Languages & Libraries</Typography>
                <br/>
                <Typography variant='body1'>{ComputerLanguagesAndLibraries}</Typography>
                <br/>
                <br/>
                <Typography variant='h5'>Devlopment</Typography>
                <br/>
                <Typography variant='body1'>{Development}</Typography>
            </Container>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </main>
    </MyContainer>
    </Layout>
}
