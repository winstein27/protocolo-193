import { Grid } from "@mui/material";
import AlertMessage from "@site/src/components/data-display/messages/AlertMessage";
import EmConstrucao from "@site/src/components/data-display/messages/EmConstrução";
import FormInputText from "@site/src/components/form-components/FormInputText";
import { useFormContext } from "react-hook-form";

const InformacaoForm = () => {
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
      />
      <AlertMessage
        severity="error"
        title="Lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"
      />
      <AlertMessage
        severity="error"
        title="Classifique o atendimento como INFORMAÇÃO no campo CLASSIFICAÇÃO DA CHAMADA"
      />
      <AlertMessage severity="error" title="Finalize o atendimento" />
    </Grid>
  );
};

export default InformacaoForm;
