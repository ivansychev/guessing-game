import { FormControl, InputAdornment, InputLabel, OutlinedInput, Paper } from "@mui/material";
import {FC, useCallback, useState} from "react";
import { SvgIconComponent } from "@mui/icons-material";

type HeaderInputProps = {
    label: string,
    Icon: SvgIconComponent
}

export const HeaderInput: FC<HeaderInputProps> = ({
    label,
    Icon
}) => {
    const [value, setValue] = useState('')

    const handleChange = useCallback((e) => {
        if (/[0-9]/.test(e.target.value) || e.target.value === '') {
            e.preventDefault();
            setValue(e.target.value)
        }
    }, [])

    return(
        <Paper elevation={3}>
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
                    value={value}
                    onChange={handleChange}
                />
            </FormControl>
        </Paper>
    )
}