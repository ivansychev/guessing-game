import { BodyStyled, LeftBodyContainerStyled } from "./Body.styled";
import { Button, Grid } from "@mui/material";
import { CurrentRoundInfo } from "./components/CurrentRoundInfo";
import { SpeedModifier } from "./components/SpeedModifier";
import { MultiplierScreen } from "./components/MultiplierScreen";
import {Dispatch, FC, useContext, useState} from "react";
import { UserNameInput } from "./components/UserNameInput";
import { AppContext } from "../context";

type BodyProps = {
    points: string
    multiplier: string
    userName: string
    setUserName: Dispatch<string>
}

export const Body: FC<BodyProps> = ({
    points,
    multiplier,
    userName,
    setUserName
}) => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const { socket } = useContext(AppContext)
    
    const handleClick = () => {
        if(!isSubmitted && points && multiplier){
            setIsSubmitted(true)
            socket.emit("submitBet", {
                bet: points,
                multiplier: multiplier
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
                                <SpeedModifier />
                            </LeftBodyContainerStyled>
                            : <UserNameInput setUserName={setUserName} />
                    }
                </Grid>
                <Grid item xs={7}>
                    <MultiplierScreen />
                </Grid>
            </Grid>
        </BodyStyled>
    )
}