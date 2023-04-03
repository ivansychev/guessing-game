import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./Theme.styled";
import { useCallback, useState } from "react";
import { AppStyled } from "./App.styled";
import { Header } from "./header/Header";
import { Body } from "./body/Body";
import { Footer } from "./footer/Footer";


const App = (): JSX.Element => {
    const [currentTheme, setCurrentTheme] = useState(darkTheme)

    console.log(currentTheme)

    const handleChange = useCallback(() => {
        setCurrentTheme(curr => curr === lightTheme ? darkTheme : lightTheme)
    },[])

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline/>
            <AppStyled>
                <Header handleThemeChange={handleChange}/>
                <Body/>
                <Footer/>
            </AppStyled>
        </ThemeProvider>
    )
}

export default App;