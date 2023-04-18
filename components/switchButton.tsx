import Link from "next/link"
import { Button } from "@mui/material"
import { Code, Palette } from '@mui/icons-material';
import { useContext } from "react";
import { DevModeContext } from "../context/DevModeContext";
import { useRouter } from 'next/router';

type PropType = {
    route: string
}

export default function SwitchButton(props:PropType) {

    const { devMode, setDevMode } = useContext(DevModeContext);
    const router = useRouter()

    const handleRoleChange = () => {
        const isCurrentDev = devMode === 'dev';
        setDevMode(isCurrentDev ? 'design' : 'dev');
        // console.log("\nCurrent route: ", router.pathname)
        router.push(`/${devMode}/${props.route}`)
    };

    return (
            <Button
                variant="outlined"
                color="secondary"
                startIcon={devMode !== 'dev' ? <Code /> : <Palette />}
                onClick={handleRoleChange}
                >
                Switch to {devMode !== 'dev' ? "Developer" : "Designer"} View
            </Button>)
}