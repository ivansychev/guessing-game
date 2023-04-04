import styled from '@emotion/styled'
import { css } from '@emotion/react'

const scrollStyle = () => css`
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: #e7e7e7;
    border: 1px solid #cacaca;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #605555;
  }
`

export const FooterContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  
  & > {
    ${scrollStyle}
  }
`

export const TextContainerStyled = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;
`

export const ChatInputStyled =  styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const MessageListContainer = styled.div`
    height: 100%;
`

export const MessageList = styled.ul`
  height: 94px;
  overflow-y: scroll;
  font-size: 0.8rem;
  list-style: none;
  padding: 10px;
  margin: 0;

  ${scrollStyle}
`
