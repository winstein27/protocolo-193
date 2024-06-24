import { Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";
import AlertMessage from "../../data-display/messages/AlertMessage";
import EmConstrucao from "../../data-display/messages/EmConstrução";
import FormInputRadio from "../../form-components/FormInputRadio";

const Suicidio = () => {
  const { control, watch } = useFormContext();

  const statusSuicidioValue = watch("statusSuicidio");

  return (
    <Grid>
      <AlertMessage
        severity="error"
        title="Marque se o suicídio está EM ANDAMENTO ou CONSUMADO"
      ></AlertMessage>
      <FormInputRadio
        control={control}
        name="statusSuicidio"
        opcoes={[
          { label: "Em andamento", value: "andamento" },
          { label: "Consumado", value: "consumado" },
        ]}
      />

      {statusSuicidioValue === "andamento" ? (
        <Grid>
          <AlertMessage
            severity="error"
            title="Marque quem está tentando o suicídio"
          ></AlertMessage>
          <FormInputRadio
            control={control}
            name="tentante"
            opcoes={[
              { label: "Próprio Solicitante", value: "solicitante" },
              { label: "Outra Pessoa", value: "outro" },
            ]}
          />
        </Grid>
      ) : (
        <Grid>
          <EmConstrucao message="Procedimentos para Suicídio consumado" />
        </Grid>
      )}
    </Grid>
  );
};

export default Suicidio;
