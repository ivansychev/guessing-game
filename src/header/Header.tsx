import {
    FormControl, Grid,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    Switch,
    Typography
} from "@mui/material";
import { AccountCircle } from '@mui/icons-material';
import { ChangeEvent, FC } from "react";
import {HeaderStyled} from "./Header.styled";

export const Header: FC<{
    handleThemeChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
}> = ({ handleThemeChange }) => (
    <HeaderStyled>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Paper>
                    <FormControl variant="outlined" sx={{ width: "100%" }}>
                        <InputLabel htmlFor="points">Points</InputLabel>
                        <OutlinedInput
                            id="points"
                            type="number"
                            endAdornment={
                                <InputAdornment position="end">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                            label="Points"
                        />
                    </FormControl>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <FormControl variant="outlined" sx={{ width: "100%" }}>
                        <InputLabel htmlFor="multiplier">Multiplier</InputLabel>
                        <OutlinedInput
                            id="multiplier"
                            type="number"
                            endAdornment={
                                <InputAdornment position="end">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                            label="Multiplier"
                        />
                    </FormControl>
                </Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper sx={{ height: "100%", display: 'flex', alignItems: 'center', padding: "0px 10px", justifyContent: "space-between" }}>
                    <Typography variant="h6">1000</Typography>
                    <AccountCircle sx={{ margin: "0px 10px" }} />
                </Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper sx={{ height: "100%", display: 'flex', alignItems: 'center', padding: "0px 10px", justifyContent: "space-between" }}>
                    <Typography variant="h6">UserName</Typography>
                    <AccountCircle sx={{ margin: "0px 10px" }} />
                </Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper sx={{ height: "100%", display: 'flex', alignItems: 'center', padding: "0px 10px", justifyContent: "space-between" }}>
                    <Switch onChange={handleThemeChange} />
                    <AccountCircle sx={{ margin: "0px 10px" }} />
                </Paper>
            </Grid>
        </Grid>
    </HeaderStyled>
)