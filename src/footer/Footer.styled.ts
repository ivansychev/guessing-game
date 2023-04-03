import styled from "styled-components";

export const FooterContainerStyled = styled.div(() => ({
    display: "flex",
    flexDirection: "column",
    height: "100%"
}));

export const TextContainerStyled = styled.div(() => ({
    display: "flex",
    alignItems: "center",
    margin: "5px 0"
}));

export const ChatInputStyled =  styled.div(() => ({
    display: "flex",
    justifyContent: "space-evenly"
}));

export const MessageListContainer = styled.div(() => ({
    height: "100%",
}));

export const MessageList = styled.ul(() => ({
    height: "90px",
    overflowY: "scroll",
    fontSize: "0.8rem",
    listStyle: "none",
    padding: "10px",
    margin: 0
}));
