import { Grid } from "@mui/material";
import { RankingInfo } from "./components/RankingInfo";
import { Chat } from "./components/Chat";

export const Footer = () => (
    <Grid container spacing={2}>
        <Grid item xs={5}>
            <RankingInfo />
        </Grid>
        <Grid item xs={7}>
            <Chat />
        </Grid>
    </Grid>
)