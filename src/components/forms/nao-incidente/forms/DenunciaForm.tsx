import { Grid } from "@mui/material";
import { AlertMessage, EmConstrucao } from "@site/src/components/structure";

const DenunciaForm = (props) => {
  return (
    <Grid item xs={12}>
      <EmConstrucao />
      <AlertMessage
        severity="info"
        title='"Vamos transferir sua ligação para a Ouvidoria do GDF. Aguarde um momento"'
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Transfira a ligação para o número 162"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Classifique o atendimento como INFORMAÇÕES no campo CLASSIFICAÇÃO DA CHAMADA"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Finalize o atendimento"
      ></AlertMessage>
    </Grid>
  );
};

export default DenunciaForm;
