import { Grid } from "@mui/material";
import { AlertMessage } from "@site/src/components/structure";

export const ColisaoVeiculo = (props) => {
  return (
    <Grid>
      {/* Perguntas Emergenciais */}

      {props.emergencial && (
        <Grid>
          <AlertMessage
            severity="info"
            title='"Quais veículos envolvidos?"'
          ></AlertMessage>
          <AlertMessage
            severity="info"
            title='"Está vazando combusível?"'
          ></AlertMessage>
          <AlertMessage
            severity="info"
            title='"Veículos estão na via?"'
          ></AlertMessage>
        </Grid>
      )}

      {/* Perguntas Não Emergenciais */}

      {!props.emergencial && (
        <Grid>
          <AlertMessage
            severity="info"
            title='"Qual a placa dos veículos?"'
          ></AlertMessage>
        </Grid>
      )}
    </Grid>
  );
};
