import { FC } from "react";
import { FooterContainerStyled, TextContainerStyled } from "../Footer.styled";
import { Chat as ChatIcon } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";

export const Chat: FC = () => (
    <FooterContainerStyled>
        <TextContainerStyled>
            <ChatIcon sx={{ marginRight: "10px" }} />
            <Typography variant="p">Chat</Typography>
        </TextContainerStyled>
        <Paper elevation={3} sx={{ height: "100%" }}>
            <Typography variant="h6">Chat</Typography>
        </Paper>
    </FooterContainerStyled>
)