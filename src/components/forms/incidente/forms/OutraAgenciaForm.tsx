import { Grid } from "@mui/material";
import { AlertMessage, EmConstrucao } from "@site/src/components/structure";

const OutraAgenciaForm = () => {
  return (
    <Grid>
      <EmConstrucao message="Escolher agencia" />
      <EmConstrucao message="Informar que ligação será transferida para a agência X" />
      <AlertMessage
        severity="error"
        title="No ISSABEL, clique em TRANSFERIR"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Cole o número da Unidade"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Clique em TRANSFERÊNCIA ASSISTIDA"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Aguarde o atendente na outra linha atender para desligar a chamada"
      ></AlertMessage>
      <EmConstrucao message="Se atendente da outra ponta não atender, cadastrar a ocorrência e enviar" />
      <AlertMessage
        severity="error"
        title="No SINESPCAD, lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Classifique o atendimento como CHAMADA TRANSFERIDA no campo CLASSIFICAÇÃO DA CHAMADA"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Copie e Cole a Narrativa abaixo no campo NARRATIVA"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Finalize o atendimento"
      ></AlertMessage>
    </Grid>
  );
};

export default OutraAgenciaForm;
