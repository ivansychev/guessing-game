import { FC } from "react";
import { Paper, Typography } from "@mui/material";

export const MultiplierScreen: FC = () => (
    <Paper sx={{ height: "100%", display: 'flex', alignItems: 'center',  justifyContent: "center" }}>
        <Typography variant="h1">0.00x</Typography>
    </Paper>
)