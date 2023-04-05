import {FC, useCallback, useContext, useEffect, useRef, useState} from "react";
import { Paper, Typography } from "@mui/material";
import { AppContext } from "../../context";

type MultiplierScreenProps = {
    speed: number
}

export const MultiplierScreen: FC<MultiplierScreenProps> = ({
    speed
}) => {
    const [bet, setBet] = useState(0)
    const inc = useRef(0)
    const trg = useRef(0)
    const spd = useRef(speed)
    const { socket } = useContext(AppContext)

    useEffect(() => {
        spd.current = speed
    }, [speed])

    useEffect(() => {
        socket.on("mainBet", (mainBet) => {
            trg.current = mainBet
            increment()
        })
    }, [])

    const increment = useCallback(() => {
        inc.current += 0.01
        setBet(prev => prev + 0.01)

        if (inc.current < trg.current) {
            setTimeout(increment, 5 - speed);
        }
    }, [speed])

    const parsedNum = useCallback((num) => `${num.toFixed(2)}x`, [])

    return (
        <Paper elevation={3} sx={{ height: "100%", display: 'flex', alignItems: 'center',  justifyContent: "center" }}>
            <Typography variant="h1">{parsedNum(bet)}</Typography>
        </Paper>
    )
}