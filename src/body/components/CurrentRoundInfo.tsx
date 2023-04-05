import { Timer as TimerIcon } from "@mui/icons-material";
import { FC, useContext, useEffect, useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { BodyTextContainerStyled } from "../Body.styled";
import { AppContext } from "../../context";

export const CurrentRoundInfo: FC = () => {
    const [players, setPlayers] = useState([])
    const { socket } = useContext(AppContext)

    useEffect(() => {
        socket.on('getPlayers', (players) => {
            setPlayers(players)
        })

        socket.emit('reqPlayers')

        return () => {
            socket.removeAllListeners("getPlayers")
        }
    }, [])

    return (
        <>
            <BodyTextContainerStyled>
                <TimerIcon sx={{ marginRight: "10px" }} />
                <Typography variant="p">Current Round</Typography>
            </BodyTextContainerStyled>
            <TableContainer elevation={3} component={Paper}>
                <Table size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Point</TableCell>
                            <TableCell align="right">Multiplier</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {players.map((player) => (
                            <TableRow key={player.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{player.name}</TableCell>
                                <TableCell align="right">{player.bet || '-'}</TableCell>
                                <TableCell align="right">{player.multiplier || '-'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}