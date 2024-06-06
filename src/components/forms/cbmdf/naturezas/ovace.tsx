import { Grid } from "@mui/material";
import FormInputRadio from "@site/src/components/form-components/FormInputRadio";
import { AlertMessage } from "@site/src/components/structure";
import { useFormContext } from "react-hook-form";

const Ovace = () => {
  const { control } = useFormContext();

  return (
    <Grid>
      {/* Perguntas Emergenciais */}
      <Grid>
        <AlertMessage
          severity="info"
          title="Me confirme por favor. A pessoa está engasgada?"
        ></AlertMessage>
        <FormInputRadio
          control={control}
          name="confirmaOVACE"
          opcoes={[
            { label: "Não", value: "nao" },
            { label: "Sim", value: "sim" },
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default Ovace;
