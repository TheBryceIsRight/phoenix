import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';
import old_focus_view from '../public/assets/gitkraken/launchpad/old_focus_view.png'
import { Container } from '@mui/material';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
    image: string,
    imageName: string,
    width: number,
    height: number,
    caption: string,
    alt: string
  }


export default function LightboxImage(props: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant='text'
      onClick={handleClickOpen} 
      aria-label={props.alt}
      style={{
        justifyContent: 'flex-start' , 
        alignContent: 'flex-start', 
        flexDirection: 'column', 
        textTransform: 'none', 
        gap: '8px',
        paddingTop: '16px',
        paddingBottom: '16px'
        }}
    >
        <Image
                src={props.image}
                alt={props.alt}
                style={{ borderRadius: 6 }}
                loading="eager"
                width={props.width}
                height={props.height}
        />
        <Typography variant='caption' style={{ width: '100%', display: 'flex', lineHeight: '130%', justifyContent: 'flex-start', alignContent:'flex-start'}}>{props.caption}</Typography>
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              elevation={0}
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {props.imageName}
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth={'lg'}>
            <br/>
        <Image
            src={props.image}
            alt="Focus view initial launch"
            style={{ borderRadius: 6 }}
            loading="eager"
            width={props.width}
            height={props.height}
        />
        </Container>
      </Dialog>
    </React.Fragment>
  );
}