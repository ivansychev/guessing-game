import { ThemeProvider } from "styled-components";
import { StyledGreeting } from "./Hello.styled";
import { light, dark } from "./Theme.styled";
import { useState } from "react";


const App = (): JSX.Element => {
    const [currentTheme, setCurrentTheme] = useState(light)

    return (
        <ThemeProvider theme={currentTheme}>
            <StyledGreeting>
                Hello World!
            </StyledGreeting>
        </ThemeProvider>
    )
}

export default App;