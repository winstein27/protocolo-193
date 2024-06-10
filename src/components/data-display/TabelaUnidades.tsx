import { useState } from "react";
import cidadesData from "@site/src/static/js/cidades.json";
import {
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";

interface Props {
  uf: string;
  cidade: string;
}

const TabelaUnidades = (props: Props) => {
  const [copied, setCopied] = useState(false);

  const numberCopyHandler = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(true);
  };

  const unidades = cidadesData[props.uf][props.cidade]["Unidades"];

  return (
    <Grid item xs={12}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Unidade</TableCell>
              <TableCell>Contato</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {unidades.map((unidade, index) => (
              <TableRow key={index}>
                <TableCell>{unidade.Unidade}</TableCell>
                <TableCell>
                  {unidade.Contato}
                  <IconButton
                    onClick={() => numberCopyHandler(`${unidade.Contato}`)}
                    aria-label="copy"
                  >
                    <Tooltip title={copied ? "Copiado!" : ""} placement="top">
                      <FileCopyIcon />
                    </Tooltip>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default TabelaUnidades;
