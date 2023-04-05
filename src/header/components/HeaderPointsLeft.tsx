import { Paper, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { FC, useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";

type HeaderPointsLeftProps = {
    text: string,
    Icon: SvgIconComponent
}

export const HeaderPointsLeft: FC<HeaderPointsLeftProps> = ({
    text,
    Icon
}) => {
    const [points, setPoints] = useState(text)
    const { socket } = useContext(AppContext)

    useEffect(() => {
        setPoints(text)
    }, [text])

    useEffect(() => {
        socket.on('resPointsLeft', (points) => {
           setPoints(points.toString())
        })
        
        return () => {
            socket.removeAllListeners("retPointsLeft")
        }
    }, [])
    
    return (
        <Paper elevation={3} sx={{ height: "100%", display: 'flex', alignItems: 'center', padding: "0px 10px", justifyContent: "space-between" }}>
            <Typography variant="h6">{points}</Typography>
            <Icon sx={{ margin: "0px 10px" }} />
        </Paper>
    )
}