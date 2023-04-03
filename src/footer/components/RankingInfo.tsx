import { FC } from "react";
import { FooterContainerStyled, TextContainerStyled } from "../Footer.styled";
import { Equalizer as EqualizerIcon } from "@mui/icons-material";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export const RankingInfo: FC = () => (
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
)