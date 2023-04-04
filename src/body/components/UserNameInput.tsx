import { Dispatch, FC, useCallback, useState } from "react";
import { Button, FormControl, OutlinedInput, Paper, Typography } from "@mui/material";
import { UserInputContainer } from "../Body.styled";

type UserNameProps = {
    setUserName: Dispatch<string>
}

export const UserNameInput: FC<UserNameProps> = ({
    setUserName
}) => {
    const [val, setVal] = useState('')

    const handleChange = useCallback((e) => {
        setVal(e.target.value)
    }, [])

    const handleKeyDown = (e) => {
        if(e.keyCode == 13){
            submitUserName()
        }
    }

    const handleClick = () => {
        submitUserName()
    }

    const submitUserName = () => {
        if(val !== ''){
            setUserName(val)
        }
    }
    
    return (
        <Paper elevation={3}>
            <UserInputContainer>
                <Typography variant="h3" sx={{ margin: "5px 0" }}>
                    Welcome!
                </Typography>
                <Typography variant="h6">
                    Please Insert Your Name
                </Typography>
                <FormControl sx={{ margin: "30px 0 10px" }}>
                    <OutlinedInput
                        type="text"
                        value={val}
                        placeholder="Username"
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                </FormControl>
                <Button
                    sx={{ margin: "5px 0" }}
                    variant="contained"
                    onClick={handleClick}
                >
                    Submit
                </Button>
            </UserInputContainer>
        </Paper>
    )
}