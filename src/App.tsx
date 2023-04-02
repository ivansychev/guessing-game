import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./Theme.styled";
import { useCallback, useState } from "react";
import { Header } from "./header/Header";
import { Body} from "./body/Body";


const App = (): JSX.Element => {
    const [currentTheme, setCurrentTheme] = useState(lightTheme)

    const handleChange = useCallback(() => {
        setCurrentTheme(curr => curr === lightTheme ? darkTheme : lightTheme)
    },[])

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline/>
            <Header handleThemeChange={handleChange}/>
            <Body/>
        </ThemeProvider>
    )
}

export default App;