import { HeaderStyled } from "./Header.styled";
import { Paper, Switch, Typography } from "@mui/material";
import { ChangeEvent, FC } from "react";

export const Header: FC<{
    handleThemeChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
}> = ({ handleThemeChange }) => (
    <HeaderStyled>
        <Paper>
            <Typography variant="h3">Paper 1</Typography>
        </Paper>
        <Paper>
            <Typography variant="h3">Paper 2</Typography>
        </Paper>
        <Paper>
            <Typography variant="h3">Paper 3</Typography>
        </Paper>
        <Paper>
            <Typography variant="h3">Paper 4</Typography>
        </Paper>
        <Paper>
            <Switch onChange={handleThemeChange} />
        </Paper>
    </HeaderStyled>
)