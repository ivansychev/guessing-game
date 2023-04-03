import { Timer as TimerIcon } from "@mui/icons-material";
import { FC } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { BodyTextContainerStyled } from "../Body.styled";

export const CurrentRoundInfo: FC = () => (
    <>
        <BodyTextContainerStyled>
            <TimerIcon sx={{ marginRight: "10px" }} />
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
    </>
)