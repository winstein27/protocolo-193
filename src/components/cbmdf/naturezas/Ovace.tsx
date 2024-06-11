import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { AlertMessage } from "../../structure";
import FormInputRadio from "../../form-components/FormInputRadio";
import { EmergencialContext } from "../../Start";

const Ovace = () => {
  const { control, watch } = useFormContext();
  const { setEmergencial } = useContext(EmergencialContext);

  const confirmaOVACEValue = watch("confirmaOVACE");
  setEmergencial(confirmaOVACEValue === "sim");

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
          defaultValue="nao"
        />
      </Grid>
    </Grid>
  );
};

export default Ovace;
