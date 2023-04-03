import { Grid } from "@mui/material";
import { AccountCircle, DarkMode, LightMode, MonetizationOn, TrendingUp, AttachMoney } from '@mui/icons-material';
import { ChangeEvent, FC } from "react";
import { HeaderInput } from "./components/HeaderInput";
import { HeaderInfo } from "./components/HeaderInfo";
import { HeaderSwitcher } from "./components/HeaderSwitcher";

export const Header: FC<{
    handleThemeChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
}> = ({ handleThemeChange }) => (
    <Grid container spacing={2}>
        <Grid item xs={3}>
            <HeaderInput
                label="Points"
                Icon={AttachMoney}
            />
        </Grid>
        <Grid item xs={2}>
            <HeaderInput
                label="Multiplier"
                Icon={TrendingUp}
            />
        </Grid>
        <Grid item xs={2}>
            <HeaderInfo
                text={"1000"}
                Icon={MonetizationOn}
            />
        </Grid>
        <Grid item xs={3}>
            <HeaderInfo
                text={"UserName"}
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