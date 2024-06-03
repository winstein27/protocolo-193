import { Grid } from "@mui/material";
import {
  AlertMessage,
  CustomTextField,
  EmConstrucao,
} from "@site/src/components/structure";

const AgradecimentoForm = (props) => {
  return (
    <Grid item xs={12}>
      <EmConstrucao />
      <CustomTextField
        label="Descreva a informação requisitada"
        name="informacaoRelato"
        value={props.informacaoRelato}
        onChange={props.onChange}
      />
      <AlertMessage
        severity="info"
        title='"Um momento, vamos buscar a resposta"'
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Classifique o atendimento como QUEDA DE LIGAÇÃO no campo CLASSIFICAÇÃO DA CHAMADA"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Finalize o atendimento"
      ></AlertMessage>
    </Grid>
  );
};

export default AgradecimentoForm;
