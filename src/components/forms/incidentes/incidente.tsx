import { Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";
import FormInputText from "../../form-components/FormInputText";
import FormInputSwitch from "../../form-components/FormInputSwitch";

const Incidente = () => {
  const { control } = useFormContext();
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
    </Grid>
  );
};

export default Incidente;
