import { FC, useCallback, useContext, useState } from "react";
import { Button, FormControl, OutlinedInput } from "@mui/material";
import { ChatInputStyled } from "../Footer.styled";
import { AppContext } from "../../context";

export const ChatInput: FC= () => {
    const [message, setMessage] = useState('')
    const { socket } = useContext(AppContext)

    const handleChange = useCallback((e) => {
        setMessage(e.target.value)
    }, [])

    const handleKeyDown = (e) => {
        if(e.keyCode == 13){
            submitMessage()
        }
    }

    const handleClick = () => {
        submitMessage()
    }

    const submitMessage = () => {
        if(!!message){
            socket.emit('message', {
                text: message,
                id: "PLAYER",
                socketID: socket.id,
            });
            setMessage('')
        }
    }

    return (
        <ChatInputStyled>
            <FormControl
                sx={{ width: '100%' }}
            >
                <OutlinedInput
                    value={message}
                    placeholder="Message"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </FormControl>
            <Button
                variant="contained"
                onClick={handleClick}
            >
                Send
            </Button>
        </ChatInputStyled>
    )
}