import { FormControl, InputAdornment, InputLabel, OutlinedInput, Paper } from "@mui/material";
import { FC } from "react";
import { SvgIconComponent } from "@mui/icons-material";

type HeaderInputProps = {
    label: string,
    Icon: SvgIconComponent
}

export const HeaderInput: FC<HeaderInputProps> = ({
    label,
    Icon
}) => (
    <Paper>
        <FormControl variant="outlined" sx={{ width: "100%" }}>
            <InputLabel htmlFor={label.toLowerCase()}>{label}</InputLabel>
            <OutlinedInput
                id={label.toLowerCase()}
                type="number"
                endAdornment={
                    <InputAdornment position="end">
                        <Icon />
                    </InputAdornment>
                }
                label={label}
            />
        </FormControl>
    </Paper>
)