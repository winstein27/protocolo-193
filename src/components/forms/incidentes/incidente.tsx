import { Grid } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { SwitchField } from "../../structure";
import FormInputText from "../../form-components/FormInputText";

const Incidente = () => {
  const { control } = useFormContext();
  return (
    <Grid>
      <FormInputText
        label="Descreva brevemente o que está ocorrendo"
        name="descricao"
        control={control}
      />

      <Controller
        name="naturezaAgenciaBoolean"
        control={control}
        render={({ field }) => (
          <SwitchField
            {...field}
            label="Ocorrência atendida por outra agência"
          />
        )}
      />
    </Grid>
  );
};

export default Incidente;
