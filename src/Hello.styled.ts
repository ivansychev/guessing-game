import styled from "styled-components";

export const StyledGreeting = styled.h1(({ theme }) => ({
    color: theme.colors.text
}));