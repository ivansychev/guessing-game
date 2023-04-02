import { BodyStyled, BodyTextContainerStyled, LeftBodyContainerStyled } from "./Body.styled";
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
                        <Typography variant="p">Current Round</Typography>
                    </BodyTextContainerStyled>
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
                    <BodyTextContainerStyled>
                        <AccountCircle sx={{ marginRight: "10px" }} />
                        <Typography variant="p">Speed</Typography>
                    </BodyTextContainerStyled>
                    <Paper sx={{ padding: "10px 20px 0px" }}>
                        <Slider
                            sx={{
                                margin: 0,
                                padding: "0 0 20px",
                                '& span': {
                                    top: "5px",
                                },
                            }}
                            size="small"
                            aria-label="Speed"
                            defaultValue={2}
                            step={1}
                            max={5}
                            min={1}
                            marks={[1,2,3,4,5].map((n) => ({ value: n, label: `${n}x` }))}
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