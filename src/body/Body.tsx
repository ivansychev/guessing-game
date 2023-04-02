import { BodyStyled, BodyTextContainerStyled, LeftBodyContainerStyled, TableContainerStyled } from "./Body.styled";
import {
    Button,
    Grid,
    Paper,
    Table,
    TableContainer,
    Typography,
    TableHead,
    TableCell,
    TableRow,
    TableBody, Slider
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export const Body = () => (
    <BodyStyled>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <LeftBodyContainerStyled>
                    <Button sx={{ width: "100%" }} variant="contained">
                        Start
                    </Button>
                    <BodyTextContainerStyled>
                        <AccountCircle sx={{ marginRight: "10px" }} />
                        <Typography variant="h6">Current Round</Typography>
                    </BodyTextContainerStyled>
                    <TableContainerStyled>
                        <TableContainer component={Paper}>
                            <Table size="small" aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Point</TableCell>
                                        <TableCell align="right">Multiplier</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {["You", "CPU1", "CPU2", "CPU3", "CPU4"].map((name) => (
                                        <TableRow key={name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell>{name}</TableCell>
                                            <TableCell align="right">{"-"}</TableCell>
                                            <TableCell align="right">{"-"}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TableContainerStyled>
                    <BodyTextContainerStyled>
                        <AccountCircle sx={{ marginRight: "10px" }} />
                        <Typography variant="h6">Speed</Typography>
                    </BodyTextContainerStyled>
                    <Paper sx={{ padding: "10px 20px 0px" }}>
                        <Slider
                            aria-label="Speed"
                            defaultValue={2}
                            step={1}
                            max={5}
                            min={1}
                            marks={[1,2,3,4,5].map((n) => ({ value: n, label: n }))}
                        />
                    </Paper>
                </LeftBodyContainerStyled>
            </Grid>
            <Grid item xs={6}>
                <Paper sx={{ height: "100%", display: 'flex', alignItems: 'center',  justifyContent: "center" }}>
                    <Typography variant="h1">0.00x</Typography>
                </Paper>
            </Grid>
        </Grid>
    </BodyStyled>
)