import { BodyStyled, LeftBodyContainerStyled } from "./Body.styled";
import { Button, Grid } from "@mui/material";
import { CurrentRoundInfo } from "./components/CurrentRoundInfo";
import { SpeedModifier } from "./components/SpeedModifier";
import { MultiplierScreen } from "./components/MultiplierScreen";

export const Body = () => (
    <BodyStyled>
        <Grid container spacing={2}>
            <Grid item xs={5}>
                <LeftBodyContainerStyled>
                    <Button sx={{ width: "100%" }} variant="contained">
                        Start
                    </Button>
                    <CurrentRoundInfo />
                    <SpeedModifier />
                </LeftBodyContainerStyled>
            </Grid>
            <Grid item xs={7}>
                <MultiplierScreen />
            </Grid>
        </Grid>
    </BodyStyled>
)