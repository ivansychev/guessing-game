import { FormControl, InputAdornment, InputLabel, OutlinedInput, Paper } from "@mui/material";
import { Dispatch, FC, useState } from "react";
import { SvgIconComponent } from "@mui/icons-material";

type HeaderInputProps = {
    value: number,
    setValue: Dispatch<string>
    label: string,
    Icon: SvgIconComponent
}

export const HeaderInput: FC<HeaderInputProps> = ({
    max,
    setValue,
    label,
    Icon
}) => {
    const [val, setVal] = useState('')

    const handleChange = (e) => {
        e.preventDefault();

        if (/^[0-9\b]+$/.test(e.target.value)) {
            if(parseInt(e.target.value) > 0 && parseInt(e.target.value) <= max) {
                setVal(e.target.value)
            }
        } else if(e.target.value === "") {
            setVal(e.target.value)
        }
    }

    const handleOnBlur = () => {
        setValue(val)
    }

    return(
        <Paper elevation={3}>
            <FormControl variant="outlined" sx={{ width: "100%" }}>
                <InputLabel htmlFor={label.toLowerCase()}>{label}</InputLabel>
                <OutlinedInput
                    id={label.toLowerCase()}
                    type="text"
                    endAdornment={
                        <InputAdornment position="end">
                            <Icon />
                        </InputAdornment>
                    }
                    label={label}
                    value={val}
                    onChange={handleChange}
                    onBlur={handleOnBlur}
                />
            </FormControl>
        </Paper>
    )
}