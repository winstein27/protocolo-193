import { Grid } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { CustomTextField, SwitchField } from "../../structure";

const Incidente = () => {
  const { control } = useFormContext();
  return (
    <Grid>
      <Controller
        name="descricao"
        control={control}
        render={({ field }) => (
          <CustomTextField
            {...field}
            label="Descreva brevemente o que está ocorrendo"
          />
        )}
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
