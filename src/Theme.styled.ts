import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#3c3c3c"
        }
    }
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#eee"
        }
    }
});