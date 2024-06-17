import { Grid } from "@mui/material";
import AlertMessage from "@site/src/components/data-display/messages/AlertMessage";
import { InputCopy } from "@site/src/components/structure";

const LigacaoMudaForm = () => {
  return (
    <Grid item xs={12}>
      <AlertMessage
        severity="info"
        title='"Por falta de comunicação, esta ligação será encerrada"'
      />
      <AlertMessage
        severity="error"
        title="Copie o número que efetuou a ligação"
      />
      <AlertMessage
        severity="error"
        title="Cole o número que efetuou a ligação no campo NÚMERO DO TELEFONE"
      />
      <AlertMessage
        severity="error"
        title="Classifique o atendimento como MUDO no campo CLASSIFICAÇÃO DA CHAMADA"
      />
      <AlertMessage severity="error" title="Copie o texto abaixo" />
      <InputCopy field="Narrativa" value={`LIGAÇÃO MUDA`} />
      <AlertMessage severity="error" title="Cole o texto no campo NARRATIVA" />
      <AlertMessage severity="error" title="Finalize o atendimento" />
    </Grid>
  );
};

export default LigacaoMudaForm;
