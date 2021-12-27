import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  Skeleton,
} from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import CardUser from "../cardUser/cardUser";
import { ArrowCircleRight, ArrowCircleLeft } from "@mui/icons-material";

const UserList = ({ loading, data }) => {
  return !loading ? (
    <>
      <TableContainer component={Paper} className="table-container">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ width: "40%" }}
                className="table-container__head"
              >
                Nombre
              </TableCell>
              <TableCell
                sx={{ width: "60%" }}
                className="table-container__head"
              >
                Descripción
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                className="table-container__row"
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { borderBottom: 0 } }}
              >
                <TableCell className="table-container__body" component="th">
                  <CardUser name={row.name} img={row.photo} />
                </TableCell>
                <TableCell className="table-container__desc">
                  {row.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="paginator">
        <Box className="paginator__page">
          <ArrowCircleLeft className="paginator__icon paginator__icon--previous" />
          <Typography variant="body2" fontWeight={"bold"}>
            Página anterior
          </Typography>
        </Box>

        <Box className="paginator__page">
          <Typography variant="body2" fontWeight={"bold"}>
            Siguiente página
          </Typography>
          <ArrowCircleRight className="paginator__icon paginator__icon--next" />
        </Box>
      </Box>
    </>
  ) : (
    <>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={"500px"}
      ></Skeleton>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        sx={{ paddingY: "30px" }}
      >
        <Skeleton
          variant="rectangular"
          width={"180px"}
          height={"30px"}
        ></Skeleton>
        <Skeleton
          variant="rectangular"
          width={"180px"}
          height={"30px"}
        ></Skeleton>
      </Box>
    </>
  );
};

export default UserList;
