import { MessageList, MessageListContainer } from "../Footer.styled";
import { FC } from "react";

export const ChatMessages: FC = () => {
    return (
        <MessageListContainer>
            <MessageList>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </MessageList>
        </MessageListContainer>
    )
}