import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import { Typography } from '@mui/material';
import React from 'react';
import YOKE from "../public/assets/aboutme/YOKE.svg"
import AllVoices from "../public/assets/aboutme/AllVoices.svg"
import Functionize from "../public/assets/aboutme/Functionize.svg"
import Elavon from "../public/assets/aboutme/Elavon.svg"
import GT from "../public/assets/aboutme/GT.svg"

type PropType = {
    logo: string
    time: string
    title: string
    description: string
}


const ExperienceEntry: React.FC<PropType> = (props) => {

    return (
        <Grid container spacing={{ xs: 2, md: 4, lg: 8 }} direction="row" alignItems='flex-start' alignContent='flex-start'>
            <Grid>
                <Grid container spacing={2} alignItems='flex-start' alignContent='flex-start' maxWidth="xl" flexWrap="wrap" direction="column" >
                    <Grid>
                        {props.logo === "YOKE" ?
                            <Image
                                src={YOKE}
                                alt="YOKE"
                                width={200}
                            />
                            : props.logo === "AllVoices" ?
                                <Image
                                    src={AllVoices}
                                    alt="AllVoices"
                                    width={200}
                                />
                                : props.logo === "Functionize" ?
                                    <Image
                                        src={Functionize}
                                        alt="Functionize"
                                        width={200}
                                    />
                                    : props.logo === "GT" ?
                                        <Image
                                            src={GT}
                                            alt="Georgia Institute of Technology"
                                            width={200}
                                        />
                                        : <Image
                                            src={Elavon}
                                            alt="YOKE"
                                            width={200}
                                        />
                        }
                    </Grid>
                    <Grid>
                        <Typography variant='body1'>{props.time}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} alignItems='flex-start' alignContent='flex-start' maxWidth="xl" flexWrap="wrap" direction="column" >
                    <Grid>
                        <Typography variant='h6'>{props.title}</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant='body1' maxWidth={"sm"}>{props.description}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ExperienceEntry