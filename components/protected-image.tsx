import Image from "next/image"
import atlanta from '../public/assets/blog/aboutme/ATL.svg'
import React, { useState, useEffect } from 'react'
import { Snackbar, AlertTitle } from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type Props = {
    src: string
    alt: string
}


function ProtectedImage({ src, alt }: Props) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            handleClick()
        });
    }, []);

    return <div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
            <AlertTitle>Warning</AlertTitle>
                This content is subject to copyright. Attemping to copy it will result in a copyright notice.
            </Alert>
        </Snackbar>
        <Image
            src={src}
            alt={alt}
            style={{ borderRadius: 6 }}
            loading="eager"
        ></Image>
    </div>;
}

export default ProtectedImage
