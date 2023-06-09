import { Dispatch, FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Paper, Typography } from "@mui/material";
import { AppContext } from "../../context";

type MultiplierScreenProps = {
    speed: number,
    setIsSubmitted: Dispatch<boolean>
}

export const MultiplierScreen: FC<MultiplierScreenProps> = ({
    speed, 
    setIsSubmitted
}) => {
    const [bet, setBet] = useState(0)
    const inc = useRef(0)
    const trg = useRef(0)
    const spd = useRef(speed)
    const ref = useRef(null)
    const { socket } = useContext(AppContext)

    useEffect(() => {
        spd.current = speed
    }, [speed])

    useEffect(() => {
        socket.on("mainBet", (mainBet) => {
            setBet(0)
            trg.current = mainBet
            increment()
        })
    }, [])

    const increment = useCallback(() => {
        inc.current += 0.01
        ref.current.style.fontSize = `${6 + (inc.current / 3)}rem`

        if (inc.current <= trg.current) {
            setBet(prev => prev + 0.01)
            setTimeout(increment, 5 - speed);
        } else {
            inc.current = 0
            socket.emit('reqRanks')
            socket.emit('getPointsLeft')
            setIsSubmitted(false)
        }
    }, [speed])

    const parsedNum = useCallback((num) => `${num.toFixed(2)}x`, [])

    return (
        <Paper
            elevation={3}
            sx={{
                height: "100%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center"
            }}
        >
            <Typography variant="h1" ref={ref}>
                {parsedNum(bet)}
            </Typography>
        </Paper>
    )
}