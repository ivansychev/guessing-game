import { BodyStyled, LeftBodyContainerStyled } from "./Body.styled";
import { Button, Grid } from "@mui/material";
import { CurrentRoundInfo } from "./components/CurrentRoundInfo";
import { SpeedModifier } from "./components/SpeedModifier";
import { MultiplierScreen } from "./components/MultiplierScreen";
import { Dispatch, FC, SetStateAction, useContext, useState } from "react";
import { UserNameInput } from "./components/UserNameInput";
import { AppContext } from "../context";

type BodyProps = {
    points: string
    multiplier: string
    userName: string
    setUserName: Dispatch<string>
    setRemainingPoints: Dispatch<SetStateAction<number>>
}

export const Body: FC<BodyProps> = ({
    points,
    multiplier,
    userName,
    setUserName,
    setRemainingPoints
}) => {
    const [speed, setSpeed] = useState(2)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const { socket } = useContext(AppContext)
    
    const handleClick = () => {
        if(!isSubmitted && points && multiplier){
            setIsSubmitted(true)
            setRemainingPoints(prev => prev - parseInt(points))
            socket.emit("submitBet", {
                bet: points.endsWith('.') ? points.slice(0, -1) : points,
                multiplier: multiplier.endsWith('.') ? multiplier.slice(0, -1) : multiplier
            })
        }
    }
    return (
        <BodyStyled>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    {
                        userName
                            ? <LeftBodyContainerStyled>
                                <Button
                                    disabled={isSubmitted}
                                    onClick={handleClick}
                                    sx={{ width: "100%" }} variant="contained"
                                >
                                    {
                                        isSubmitted
                                            ? "Done! Wait for others"
                                            : "Submit"
                                    }
                                </Button>
                                <CurrentRoundInfo />
                                <SpeedModifier
                                    speed={speed}
                                    setSpeed={setSpeed}
                                />
                            </LeftBodyContainerStyled>
                            : <UserNameInput setUserName={setUserName} />
                    }
                </Grid>
                <Grid item xs={7}>
                    <MultiplierScreen
                        speed={speed}
                    />
                </Grid>
            </Grid>
        </BodyStyled>
    )
}