import { Masonry } from "@mui/lab";
import Image from "next/image";
import { Typography, Box, Paper, styled } from "@mui/material";
import { itemData, itemData2 } from "../lib/imageData"

type PropType = {
    type: string
}

const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 0,
}));

const MobileMosaic: React.FC<PropType> = (props) => {

    let images = []

    if (props.type === "dev_portal") {
        images = itemData
    } else {
        images = itemData2
    }

    return (
        <Box sx={{ width: "100%", minHeight: 829, minWidth: 260 }}>
            <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4 }} spacing={2}>
                {images.map((item, index) => (
                    <div key={index}>
                        <Label>
                            <br />
                            <Typography variant="caption">{item.title}</Typography>
                            <br />
                            <Image
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                                width={200}
                                height={500}
                                style={{
                                    borderBottomLeftRadius: 4,
                                    borderBottomRightRadius: 4,
                                    width: '100%',
                                }}
                            />
                        </Label>
                    </div>
                ))}
            </Masonry>
        </Box>
    )
}

export default MobileMosaic


