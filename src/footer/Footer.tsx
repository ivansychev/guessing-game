import { FooterContainerStyled, TextContainerStyled } from "./Footer.styled";
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export const Footer = () => (
    <Grid container spacing={2}>
        <Grid item xs={6}>
            <FooterContainerStyled>
                <TextContainerStyled>
                    <AccountCircle sx={{ marginRight: "10px" }} />
                    <Typography variant="p">Ranking</Typography>
                </TextContainerStyled>
                <TableContainer sx={{ maxHeight: 150 }} component={Paper}>
                    <Table size="small" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>No.</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Score</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[1, 2, 3, 4, 5].map((name) => (
                                <TableRow key={name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{name}</TableCell>
                                    <TableCell align="right">{"-"}</TableCell>
                                    <TableCell align="right">{"-"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </FooterContainerStyled>
        </Grid>
        <Grid item xs={6}>
            <FooterContainerStyled>
                <TextContainerStyled>
                    <AccountCircle sx={{ marginRight: "10px" }} />
                    <Typography variant="p">Chat</Typography>
                </TextContainerStyled>
                <Paper sx={{ height: "100%" }}>
                    <Typography variant="h6">Chat</Typography>
                </Paper>
            </FooterContainerStyled>
        </Grid>
    </Grid>
)