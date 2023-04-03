import { FC, useCallback, useState } from "react";
import { Button, FormControl, OutlinedInput } from "@mui/material";
import { ChatInputStyled } from "../Footer.styled";

export const ChatInput: FC = () => {
    const [message, setMessage] = useState('')

    const handleChange = useCallback((e) => {
        setMessage(e.target.value)
    }, [])

    const handleSubmit = useCallback(() => {
        setMessage('')
    }, [])

    return (
        <ChatInputStyled>
            <FormControl
                sx={{ width: '100%' }}
                onSubmit={handleSubmit}
            >
                <OutlinedInput
                    value={message}
                    placeholder="Message"
                    onChange={handleChange}
                />
            </FormControl>
            <Button
                variant="contained"
                onClick={handleSubmit}
            >
                Send
            </Button>
        </ChatInputStyled>
    )
}