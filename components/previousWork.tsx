import { useTheme, styled, Button, ButtonProps, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { DevModeContext } from "../context/DevModeContext";
import { useContext } from "react";

type PropType = {
    title: string
    description: string
    coverImage: string
    coverImageDark: string
    coverImageDev: string
    coverImageDarkDev: string
    link: string
}

export default function PreviousWork(props: PropType) {
    const theme = useTheme();
    const { devMode, setDevMode } = useContext(DevModeContext);

    const PreviewButton = styled(Button)<ButtonProps>(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.hover.main,
        },
        color: theme.palette.secondary.main,
        textTransform: 'none',
        padding: 10,
        alignContent: "start",
        borderRadius: 6,
        focusRipple: true
    }));
    if (props.link !== "me" && props.link !== "resume") {
        return (
            <Link href={`/${devMode}/${props.link}`} passHref tabIndex={-1}>
                <PreviewButton>
                    <div>
                        <div className="mb-5">
                            <div className="sm:mx-0">
                                {theme.palette.mode === "light" && devMode === "design" ?
                                    <Image
                                        src={props.coverImage}
                                        alt={`Cover Image for ${props.title}`}
                                        width={1300}
                                        height={630}
                                        style={{ borderRadius: 8 }}
                                        placeholder='blur'
                                        loading="eager"
                                        blurDataURL={props.coverImage}
                                    />
                                    : (theme.palette.mode === "dark" && devMode === "design") ?
                                        <Image
                                            src={props.coverImageDark}
                                            alt={`Cover Image for ${props.title}`}
                                            width={1300}
                                            height={630}
                                            style={{ borderRadius: 8 }}
                                            placeholder='blur'
                                            loading="eager"
                                            blurDataURL={props.coverImageDark}
                                        />
                                        : (theme.palette.mode === "light" && devMode === "dev") ?
                                            <Image
                                                src={props.coverImageDev}
                                                alt={`Cover Image for ${props.title}`}
                                                width={1300}
                                                height={630}
                                                style={{ borderRadius: 8 }}
                                                placeholder='blur'
                                                loading="eager"
                                                blurDataURL={props.coverImageDev}
                                            />
                                            :
                                            <Image
                                                src={props.coverImageDarkDev}
                                                alt={`Cover Image for ${props.title}`}
                                                width={1300}
                                                height={630}
                                                style={{ borderRadius: 8 }}
                                                placeholder='blur'
                                                loading="eager"
                                                blurDataURL={props.coverImageDarkDev}
                                            />
                                }
                            </div>
                        </div>
                        <Typography variant='h4'>
                            {props.title}
                        </Typography>
                        <br />
                        <Typography variant='h6'>{props.description}</Typography>
                    </div>
                </PreviewButton>
            </Link>

        )
    } else {
        return (
            <Link href={`/${props.link}`} passHref tabIndex={-1}>
                <PreviewButton>
                    <div>
                        <div className="mb-5">
                            <div className="sm:mx-0">
                                {theme.palette.mode === "light" && devMode === "design" ?
                                    <Image
                                        src={props.coverImage}
                                        alt={`Cover Image for ${props.title}`}
                                        width={1300}
                                        height={630}
                                        style={{ borderRadius: 8 }}
                                        placeholder='blur'
                                        loading="eager"
                                        blurDataURL={props.coverImage}
                                    />
                                    : (theme.palette.mode === "dark" && devMode === "design") ?
                                        <Image
                                            src={props.coverImageDark}
                                            alt={`Cover Image for ${props.title}`}
                                            width={1300}
                                            height={630}
                                            style={{ borderRadius: 8 }}
                                            placeholder='blur'
                                            loading="eager"
                                            blurDataURL={props.coverImageDark}
                                        />
                                        : (theme.palette.mode === "light" && devMode === "dev") ?
                                            <Image
                                                src={props.coverImageDev}
                                                alt={`Cover Image for ${props.title}`}
                                                width={1300}
                                                height={630}
                                                style={{ borderRadius: 8 }}
                                                placeholder='blur'
                                                loading="eager"
                                                blurDataURL={props.coverImageDev}
                                            />
                                            :
                                            <Image
                                                src={props.coverImageDarkDev}
                                                alt={`Cover Image for ${props.title}`}
                                                width={1300}
                                                height={630}
                                                style={{ borderRadius: 8 }}
                                                placeholder='blur'
                                                loading="eager"
                                                blurDataURL={props.coverImageDarkDev}
                                            />
                                }
                            </div>
                        </div>
                        <Typography variant='h4'>
                            {props.title}
                        </Typography>
                        <br />
                        <Typography variant='h5'>{props.description}</Typography>
                    </div>
                </PreviewButton>
            </Link>

        )
    }

}