import { Button } from "@mui/material"
import { Code, Palette } from '@mui/icons-material';
import { useContext } from "react";
import { DevModeContext } from "../context/DevModeContext";
import { useRouter } from 'next/router';

export default function SwitchButton() {

    const { devMode, setDevMode } = useContext(DevModeContext);
    const router = useRouter()

    const handleRoleChange = () => {
        const isCurrentDev = devMode === 'dev';
        setDevMode(isCurrentDev ? 'design' : 'dev');

        if (router.pathname === "/design/elavon-dev") {
            router.push("/dev/elavon-dev")
          } else if (router.pathname === "/dev/elavon-dev") {
            router.push("/design/elavon-dev")
          } else if (router.pathname === "/design/elavon-status") {
            router.push("/dev/elavon-status")
          } else if (router.pathname === "/dev/elavon-status") {
            router.push("/design/elavon-status")
          } else if (router.pathname === "/design/functionize") {
            router.push("/dev/functionize")
          } else if (router.pathname === "/dev/functionize") {
            router.push("/design/functionize")
          } else if (router.pathname === "/design/allvoices") {
            router.push("/dev/allvoices")
          } else if (router.pathname === "/dev/allvoices") {
            router.push("/design/allvoices")
          } else {
      
          }
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