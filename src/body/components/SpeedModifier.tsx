import { FC } from "react";
import { BodyTextContainerStyled } from "../Body.styled";
import { Speed as SpeedIcon } from "@mui/icons-material";
import { Paper, Slider, Typography } from "@mui/material";

export const SpeedModifier: FC = () => (
    <>
        <BodyTextContainerStyled>
            <SpeedIcon sx={{ marginRight: "10px" }} />
            <Typography variant="p">Speed</Typography>
        </BodyTextContainerStyled>
        <Paper sx={{ padding: "10px 20px 0px" }}>
            <Slider
                sx={{
                    margin: 0,
                    padding: "0 0 20px",
                    '& span': {
                        top: "5px",
                    },
                }}
                size="small"
                aria-label="Speed"
                defaultValue={2}
                step={1}
                max={5}
                min={1}
                marks={[1,2,3,4,5].map((n) => ({ value: n, label: `${n}x` }))}
            />
        </Paper>
    </>
)