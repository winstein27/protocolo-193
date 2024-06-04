import { Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";
import FormInputText from "../../form-components/FormInputText";
import FormInputSwitch from "../../form-components/FormInputSwitch";
import OutraAgenciaForm from "./forms/OutraAgenciaForm";
import OcorrenciaForm from "./forms/OcorrenciaForm";

const Incidente = () => {
  const { control, watch } = useFormContext();

  const naturezaAgenciaBooleanValue = watch("naturezaAgenciaBoolean");

  return (
    <Grid>
      <FormInputText
        label="Descreva brevemente o que está ocorrendo"
        name="descricao"
        control={control}
      />

      <FormInputSwitch
        control={control}
        label="Ocorrência atendida por outra agência"
        name="naturezaAgenciaBoolean"
      />

      {naturezaAgenciaBooleanValue ? <OutraAgenciaForm /> : <OcorrenciaForm />}
    </Grid>
  );
};

export default Incidente;
