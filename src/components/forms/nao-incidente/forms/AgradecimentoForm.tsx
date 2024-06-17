import { Grid } from "@mui/material";
import FormInputText from "@site/src/components/form-components/FormInputText";
import { AlertMessage, EmConstrucao } from "@site/src/components/structure";
import { useFormContext } from "react-hook-form";

const AgradecimentoForm = () => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12}>
      <EmConstrucao />
      <FormInputText
        control={control}
        label="Descreva a informação requisitada"
        name="informacaoRelato"
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
