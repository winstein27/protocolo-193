import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { EmergencialContext } from "../../Start";
import FormInputRadioSimNao from "../../form-components/FormInputRadioSimNao";

const Ovace = () => {
  const { control, watch } = useFormContext();
  const { setEmergencial, setProtocoloEmergencialNome } =
    useContext(EmergencialContext);

  const confirmaOVACEValue = watch("confirmaOVACE");

  setEmergencial(confirmaOVACEValue === "sim");
  setProtocoloEmergencialNome(confirmaOVACEValue === "sim" ? "OVACE" : "");

  return (
    <Grid>
      {/* Perguntas Emergenciais */}
      <FormInputRadioSimNao
        control={control}
        label="Me confirme por favor. A pessoa está engasgada?"
        name="confirmaOVACE"
      />
    </Grid>
  );
};

export default Ovace;
