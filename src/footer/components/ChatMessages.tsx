import { MessageList, MessageListContainer } from "../Footer.styled";
import {FC, useContext, useEffect, useRef, useState} from "react";
import { Typography } from "@mui/material";
import {AppContext} from "../../context";

export const ChatMessages: FC = () => {
    const [messages, setMessages] = useState([]);
    const ref = useRef<HTMLLIElement>(null);
    const { socket } = useContext(AppContext)

    useEffect(() => {
        socket.on(
            'messageResponse',
            (data) => setMessages(data)
        );
        return () => {
            socket.removeAllListeners("messageResponse")
        }
    }, []);

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <MessageListContainer>
            <MessageList>
                {messages.map((data, i) => (
                    <li key={i}>
                        <Typography component="span" sx={{ fontSize: "0.8rem", color: 'warning.main' }}>
                            {`${data.id}: `}
                        </Typography>
                        <Typography component="span" sx={{ fontSize: "0.8rem" }}>
                            {data.text}
                        </Typography>
                    </li>
                ))}
                <li key={'ref'} ref={ref}/>
            </MessageList>
        </MessageListContainer>
    )
}