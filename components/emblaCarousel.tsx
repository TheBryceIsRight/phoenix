import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import {
    DotButton,
    PrevButton,
    NextButton,
} from './carouselButtons'
import imageByIndex from './imageByIndex'
import Image from 'next/image'
import { Typography } from '@mui/material'
import Autoplay from 'embla-carousel-autoplay'
import { Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';

const autoplayOptions = {
    delay: 8000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
}

// Embla JSX styles
const embla = {
    "--slide-spacing": "1rem",
    "--slide-size": "100%",
    "--slide-height": "48rem",
    padding: "1.6rem"
}
const embla__viewport = { overflow: "hidden" }
const embla__container = {
    display: "flex",
    height: "auto",
    marginLeft: "calc(var(--slide-spacing) * -1)"
}
const embla__slide = {
    flex: "0 0 var(--slide-size)",
    minWidth: "0",
    paddingLeft: "var(--slide-spacing)",
}
const embla__slide__img = {
    display: "block",
    height: "var(--slide-height)",
    width: "100%",
}
const embla__slide__number = {
    width: "4.6rem",
    height: "4.6rem",
    zIndex: 1,
    top: "0.6rem",
    right: "0.6rem",
    borderRadius: "50%",
    backgroundColor: "rgba(var(--background-site-rgb-value), 0.85)",
    lineHeight: "4.6rem",
    fontWeight: 500,
}
const embla__dots = {
    zIndex: 1,
    bottom: "1.2rem",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

type PropType = {
    slides: number[]
    type: string
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)])
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi],
    )
    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi],
    )
    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi],
    )

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [emblaApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi, setScrollSnaps, onSelect])

    return (
        <>
            <div style={embla}>
                <div style={embla__viewport} ref={emblaRef}>
                    <div style={embla__container} >
                        {slides.map((index) => (
                            <div style={embla__slide} key={index}>
                                <div style={embla__slide__number}>
                                    <Typography variant='body1'>{index + 1}</Typography>
                                </div>
                                {props.type === "elavon_personas" ?
                                    <Image
                                        style={embla__slide__img}
                                        src={imageByIndex(index, props.type)}
                                        alt="Your alt text"
                                        height={1320}
                                        width={1190}
                                    />
                                    : props.type === "fze_hi_fi" ?
                                        <Image
                                            style={embla__slide__img}
                                            src={imageByIndex(index, props.type)}
                                            alt="Your alt text"
                                            height={906}
                                            width={1200}
                                        />
                                        :
                                        <Image
                                            style={embla__slide__img}
                                            src={imageByIndex(index, props.type)}
                                            alt="Your alt text"
                                        />
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <Grid container spacing={2} columns={8}>
                    <Grid xs>
                        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                    </Grid>
                    <Grid xs={7}>
                    </Grid>
                    <Grid xs>
                        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                    </Grid>
                </Grid>
            </div>

            <div style={embla__dots}>
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </>
    )
}

export default EmblaCarousel
