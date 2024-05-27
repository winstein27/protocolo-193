import { Grid } from "@mui/material";
import { AlertMessage, InputCopy } from "@site/src/components/structure";

const LigacaoMudaForm = (props) => {
  return (
    <Grid item xs={12}>
      <AlertMessage
        severity="info"
        title='"Por falta de comunicação, esta ligação será encerrada"'
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Copie o número que efetuou a ligação"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Cole o número que efetuou a ligação no campo NÚMERO DO TELEFONE"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Classifique o atendimento como MUDO no campo CLASSIFICAÇÃO DA CHAMADA"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Copie o texto abaixo"
      ></AlertMessage>
      <InputCopy field="Narrativa" value={`LIGAÇÃO MUDA`} />
      <AlertMessage
        severity="error"
        title="Cole o texto no campo NARRATIVA"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Finalize o atendimento"
      ></AlertMessage>
    </Grid>
  );
};

export default LigacaoMudaForm;
