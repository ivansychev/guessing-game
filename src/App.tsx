import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./Theme.styled";
import { useCallback, useState } from "react";
import { AppStyled } from "./App.styled";
import { Header } from "./header/Header";
import { Body } from "./body/Body";
import { Footer } from "./footer/Footer";
import { io } from 'socket.io-client';
import { AppContext } from "./context";

const App = (): JSX.Element => {
    const [currentTheme, setCurrentTheme] = useState(darkTheme)
    const [socket] = useState(() => io('http://localhost:4000'))
    const [userName, setUserName] = useState('')
    const [points, setPoints] = useState('')
    const [multiplier, setMultiplier] = useState('')
    const [remainingPoints, setRemainingPoints] = useState(1000)

    const handleThemeChange = useCallback(() => {
        setCurrentTheme(curr => curr === lightTheme ? darkTheme : lightTheme)
    },[])

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline/>
            <AppContext.Provider value={{
                socket,
                userName
            }}>
                <AppStyled>
                    <Header
                        userName={userName}
                        remainingPoints={remainingPoints}
                        setPoints={setPoints}
                        setMultiplier={setMultiplier}
                        handleThemeChange={handleThemeChange}
                    />
                    <Body
                        userName={userName}
                        setUserName={setUserName}
                    />
                    <Footer/>
                </AppStyled>
            </AppContext.Provider>
        </ThemeProvider>
    )
}

export default App;