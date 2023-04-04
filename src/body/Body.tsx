import { BodyStyled, LeftBodyContainerStyled } from "./Body.styled";
import { Button, Grid } from "@mui/material";
import { CurrentRoundInfo } from "./components/CurrentRoundInfo";
import { SpeedModifier } from "./components/SpeedModifier";
import { MultiplierScreen } from "./components/MultiplierScreen";
import {Dispatch, FC} from "react";
import {UserNameInput} from "./components/UserNameInput";

type BodyProps = {
    userName: string,
    setUserName: Dispatch<string>
}

export const Body: FC<BodyProps> = ({
    userName,
    setUserName
}) => (
    <BodyStyled>
        <Grid container spacing={2}>
            <Grid item xs={5}>
                {
                    userName
                        ? <LeftBodyContainerStyled>
                            <Button sx={{ width: "100%" }} variant="contained">
                                Start
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