import { FC, useContext, useEffect, useState } from "react";
import { FooterContainerStyled, TextContainerStyled } from "../Footer.styled";
import { Equalizer as EqualizerIcon } from "@mui/icons-material";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { AppContext } from "../../context";

export const RankingInfo: FC = () => {
    const [ranks, setRanks] = useState([])
    const { socket } = useContext(AppContext)

    useEffect(() => {
        socket.on('getRanks', (players) => {
            setRanks(players.sort((p1, p2) => {
                return parseInt(p2.pointsLeft) - parseInt(p1.pointsLeft)
            }))
        })

        socket.emit('reqRanks')

        return () => {
            socket.removeAllListeners("getRanks")
        }
    }, [])

    return (
        <FooterContainerStyled>
            <TextContainerStyled>
                <EqualizerIcon sx={{ marginRight: "10px" }} />
                <Typography variant="p">Ranking</Typography>
            </TextContainerStyled>
            <TableContainer elevation={3} sx={{ maxHeight: 150 }} component={Paper}>
                <Table size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ranks.map((player, i) => (
                            <TableRow key={player.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{i+1}</TableCell>
                                <TableCell align="right">{player.name}</TableCell>
                                <TableCell align="right">{player.pointsLeft}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </FooterContainerStyled>
    )
}