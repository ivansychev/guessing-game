import { FormControl, InputAdornment, InputLabel, OutlinedInput, Paper } from "@mui/material";
import { Dispatch, FC, useContext, useState } from "react";
import { SvgIconComponent } from "@mui/icons-material";
import { AppContext } from "../../context";

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
    const { userName } = useContext(AppContext)

    const handleChange = (e) => {
        e.preventDefault();

        if (/^\d*\.?\d{0,2}$/.test(e.target.value)) {
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
            <FormControl disabled={!userName} variant="outlined" sx={{ width: "100%" }}>
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