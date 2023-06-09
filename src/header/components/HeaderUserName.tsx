import { Paper, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { FC } from "react";

type HeaderUserNameProps = {
    text: string,
    Icon: SvgIconComponent
}

export const HeaderUserName: FC<HeaderUserNameProps> = ({
    text,
    Icon
}) => (
    <Paper elevation={3} sx={{ height: "100%", display: 'flex', alignItems: 'center', padding: "0px 10px", justifyContent: "space-between" }}>
        <Typography variant="h6">{text}</Typography>
        <Icon sx={{ margin: "0px 10px" }} />
    </Paper>
)