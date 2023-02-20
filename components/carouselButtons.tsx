import React from 'react'
import { IconButton } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

const embla__button__prev = {
}

const embla__button__next = {
}

type DotButtonPropType = {
    selected: boolean
    onClick: () => void
}

export const DotButton: React.FC<DotButtonPropType> = (props) => {
    const { selected, onClick } = props

    return (
        <IconButton
            className={'embla__dot'.concat(selected ? ' embla__dot--selected' : '')}
            type="button"
            onClick={onClick}
        />
    )
}

type PrevNextButtonPropType = {
    enabled: boolean
    onClick: () => void
}

export const PrevButton: React.FC<PrevNextButtonPropType> = (props) => {
    const { enabled, onClick } = props

    return (
        <IconButton
            style={embla__button__prev}
            onClick={onClick}
            disabled={!enabled}
        >
            <ChevronLeft />
        </IconButton>
    )
}

export const NextButton: React.FC<PrevNextButtonPropType> = (props) => {
    const { enabled, onClick } = props

    return (
        <IconButton
            style={embla__button__next}
            onClick={onClick}
            disabled={!enabled}
        >
            <ChevronRight />
        </IconButton>
    )
}
