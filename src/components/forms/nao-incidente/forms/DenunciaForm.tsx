import { Grid } from "@mui/material";
import AlertMessage from "@site/src/components/data-display/messages/AlertMessage";
import EmConstrucao from "@site/src/components/data-display/messages/EmConstrução";

const DenunciaForm = (props) => {
  return (
    <Grid item xs={12}>
      <EmConstrucao />
      <AlertMessage
        severity="info"
        title='"Vamos transferir sua ligação para a Ouvidoria do GDF. Aguarde um momento"'
      />
      <AlertMessage
        severity="error"
        title="Transfira a ligação para o número 162"
      />
      <AlertMessage
        severity="error"
        title="Lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"
      />
      <AlertMessage
        severity="error"
        title="Classifique o atendimento como INFORMAÇÕES no campo CLASSIFICAÇÃO DA CHAMADA"
      />
      <AlertMessage severity="error" title="Finalize o atendimento" />
    </Grid>
  );
};

export default DenunciaForm;
