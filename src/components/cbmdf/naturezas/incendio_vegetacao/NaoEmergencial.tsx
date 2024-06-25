import { Grid } from "@mui/material";
import AlertMessage from "@site/src/components/data-display/messages/AlertMessage";
import FormInputRadioSimNao from "@site/src/components/form-components/FormInputRadioSimNao";
import FormInputText from "@site/src/components/form-components/FormInputText";
import { useFormContext } from "react-hook-form";

const NaoEmergencial = () => {
  const { control, watch } = useFormContext();

  const origemBooleanValue = watch("origemBoolean");
  const irEstradaBooleanValue = watch("irEstradaBoolean");

  return (
    <Grid>
      <AlertMessage
        severity="info"
        title='"Conseguiu ver onde o incêndio começou aproximadamente?"'
      />
      <FormInputRadioSimNao control={control} name="origemBoolean" />

      {origemBooleanValue === "sim" && (
        <Grid>
          <AlertMessage severity="info" title='"Qual o local?"' />
          <FormInputText
            control={control}
            label="Local de Início do Incêndio"
            name="origemText"
          />
        </Grid>
      )}

      <AlertMessage
        severity="info"
        title='"Consegue ir para a estrada ou outro lugar onde possamos encontrá-lo facilmente?"'
      />
      <FormInputRadioSimNao control={control} name="irEstradaBoolean" />

      <AlertMessage
        severity="warning"
        title="Informe ao Solicitante:"
        message={
          irEstradaBooleanValue
            ? "OK, leve o celular contigo para fazermos contato"
            : "OK, permaneça em local seguro e não tente combater o incêndio"
        }
      />
    </Grid>
  );
};

export default NaoEmergencial;
