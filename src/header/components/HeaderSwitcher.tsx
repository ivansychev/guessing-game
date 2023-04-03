import { SvgIconComponent } from "@mui/icons-material";
import { ChangeEvent, FC } from "react";
import {Paper, Switch, useTheme} from "@mui/material";

type HeaderSwitcherProps = {
    handleChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
    IconLight: SvgIconComponent
    IconDark: SvgIconComponent
}

export const HeaderSwitcher: FC<HeaderSwitcherProps> = ({
    handleChange,
    IconLight,
    IconDark
}) => (
    <Paper sx={{ height: "100%", display: 'flex', alignItems: 'center', padding: "0px 10px", justifyContent: "space-between" }}>
        <Switch onChange={handleChange} defaultChecked />
        { useTheme().palette.mode === "dark"
            ? <IconDark sx={{ margin: "0px 10px" }} />
            : <IconLight sx={{ margin: "0px 10px" }} />
        }
    </Paper>
)