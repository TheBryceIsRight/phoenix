import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import { Typography } from '@mui/material';
import React from 'react';
import YOKE from "../public/assets/aboutme/YOKE.svg"
import AllVoices from "../public/assets/aboutme/AllVoices.svg"
import Functionize from "../public/assets/aboutme/Functionize.svg"
import Elavon from "../public/assets/aboutme/Elavon.svg"
import GT from "../public/assets/aboutme/GT.svg"
import YOKE_Dark from "../public/assets/aboutme/Yoke_Dark.svg"
import AllVoices_Dark from "../public/assets/aboutme/AllVoices_Dark.svg"
import Functionize_Dark from "../public/assets/aboutme/Functionize_Dark.svg"
import Elavon_Dark from "../public/assets/aboutme/Elavon_Dark.svg"
import GT_Dark from "../public/assets/aboutme/GT_Dark.svg"
import { ButtonBase } from '@mui/material';
import Link from 'next/link';
import { useTheme, styled, Button, ButtonProps } from "@mui/material"


type PropType = {
    logo: string
    time: string
    title: string
    description: string
    title2: string
    description2: string
    note: string
    link: string
}


const ExperienceEntryExtended: React.FC<PropType> = (props) => {
    const theme = useTheme();

    const LogoButton = styled(Button)<ButtonProps>(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.hover.main,
        },
        color: theme.palette.secondary.main,
        textTransform: 'none',
        padding: 10,
        alignContent: "start", 
        borderRadius: 4,
        focusRipple: true
      }));

    return (
        <Grid container spacing={{ xs: 2, sm: 2, md: 2, lg: 4, xl: 6 }} direction="row" alignItems='flex-start' alignContent='flex-start' maxWidth="xl">
            <Grid>
                <Grid container spacing={2} alignItems='flex-start' alignContent='flex-start' maxWidth="xl" flexWrap="wrap" direction="column" >
                    <Grid>
                        <Link passHref href={props.link} target="_blank">
                            <LogoButton>
                                {props.logo === "YOKE" && theme.palette.mode === "light" ?
                                    <Image
                                        src={YOKE}
                                        alt="YOKE"
                                        width={200}
                                    />
                                    : props.logo === "YOKE" && theme.palette.mode === "dark" ?
                                        <Image
                                            src={YOKE_Dark}
                                            alt="YOKE"
                                            width={200}
                                        />
                                        : props.logo === "AllVoices" && theme.palette.mode === "dark" ?
                                            <Image
                                                src={AllVoices_Dark}
                                                alt="AllVoices"
                                                width={200}
                                            />
                                            : props.logo === "AllVoices" && theme.palette.mode === "light" ?
                                                <Image
                                                    src={AllVoices}
                                                    alt="AllVoices"
                                                    width={200}
                                                />
                                                : props.logo === "Functionize" && theme.palette.mode === "dark" ?
                                                    <Image
                                                        src={Functionize_Dark}
                                                        alt="Functionize"
                                                        width={200}
                                                    />
                                                    : props.logo === "Functionize" && theme.palette.mode === "light" ?
                                                        <Image
                                                            src={Functionize}
                                                            alt="Functionize"
                                                            width={200}
                                                        />

                                                        : props.logo === "GT" && theme.palette.mode === "light" ?
                                                            <Image
                                                                src={GT}
                                                                alt="Georgia Institute of Technology"
                                                                width={200}
                                                            />
                                                            : props.logo === "GT" && theme.palette.mode === "dark" ?
                                                                <Image
                                                                    src={GT_Dark}
                                                                    alt="Georgia Institute of Technology"
                                                                    width={200}
                                                                />
                                                                : props.logo === "Elavon" && theme.palette.mode === "light" ?
                                                                    <Image
                                                                        src={Elavon}
                                                                        alt="Georgia Institute of Technology"
                                                                        width={200}
                                                                    />
                                                                    : <Image
                                                                        src={Elavon_Dark}
                                                                        alt="YOKE"
                                                                        width={200}
                                                                    />
                                }
                            </LogoButton>
                        </Link>
                    </Grid>
                    <Grid>
                        <Typography variant='body1'>{props.time}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <Grid container spacing={{ xs: 2, md: 2, lg: 4 }} alignItems='flex-start' alignContent='flex-start' maxWidth="xl" flexWrap="wrap" direction="column" >
                    <Grid>
                        <Typography variant='h5'>{props.title}</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant='body1' maxWidth={740}>{props.description}</Typography>
                    </Grid>
                    <br/>
                    <Grid>
                        <Typography variant='h5'>{props.title2}</Typography>
                        <Typography variant='h6'>{props.note}</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant='body1' maxWidth={740}>{props.description2}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ExperienceEntryExtended