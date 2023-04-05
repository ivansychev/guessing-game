import { Grid } from "@mui/material";
import { AccountCircle, DarkMode, LightMode, MonetizationOn, TrendingUp, AttachMoney } from '@mui/icons-material';
import { ChangeEvent, Dispatch, FC } from "react";
import { HeaderInput } from "./components/HeaderInput";
import { HeaderUserName } from "./components/HeaderUserName";
import { HeaderSwitcher } from "./components/HeaderSwitcher";
import { HeaderPointsLeft } from "./components/HeaderPointsLeft";

type HeaderProps = {
    userName: string,
    remainingPoints: number,
    setPoints: Dispatch<string>
    setMultiplier: Dispatch<string>
    handleThemeChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

export const Header: FC<HeaderProps> = ({
    userName,
    remainingPoints,
    setPoints,
    setMultiplier,
    handleThemeChange
}) => (
    <Grid container spacing={2}>
        <Grid item xs={3}>
            <HeaderInput
                reg={/^[0-9\b]+$/}
                max={remainingPoints}
                setValue={setPoints}
                label="Points"
                Icon={AttachMoney}
            />
        </Grid>
        <Grid item xs={2}>
            <HeaderInput
                reg={/^\d+\.?\d{0,2}$/}
                max={10}
                setValue={setMultiplier}
                label="Multiplier"
                Icon={TrendingUp}
            />
        </Grid>
        <Grid item xs={2}>
            <HeaderPointsLeft
                text={remainingPoints.toString()}
                Icon={MonetizationOn}
            />
        </Grid>
        <Grid item xs={3}>
            <HeaderUserName
                text={userName}
                Icon={AccountCircle}
            />
        </Grid>
        <Grid item xs={2}>
            <HeaderSwitcher
                handleChange={handleThemeChange}
                IconLight={LightMode}
                IconDark={DarkMode}
            />
        </Grid>
    </Grid>
)