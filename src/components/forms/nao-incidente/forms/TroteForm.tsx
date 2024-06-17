import { Grid } from "@mui/material";
import AlertMessage from "@site/src/components/data-display/messages/AlertMessage";

const TroteForm = (props) => {
  return (
    <Grid item xs={12}>
      <AlertMessage
        severity="info"
        title='"Informamos que esta chamada foi realizada pelo número ******* e será registrada como trote para envio a Polícia Civil"'
      />
      <AlertMessage
        severity="error"
        title="Lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"
      />
      <AlertMessage
        severity="error"
        title="Classifique o atendimento como TROTE no campo CLASSIFICAÇÃO DA CHAMADA"
      />
      <AlertMessage severity="error" title="Finalize o atendimento" />
    </Grid>
  );
};

export default TroteForm;
