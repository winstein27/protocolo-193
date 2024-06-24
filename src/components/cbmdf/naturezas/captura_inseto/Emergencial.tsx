import React from "react";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { EmergencialContext } from "../../../Start";
import { Grid } from "@mui/material";
import AlertMessage from "../../../data-display/messages/AlertMessage";
import FormInputRadioSimNao from "../../../form-components/FormInputRadioSimNao";

const Emergencial = () => {
  const { control, watch } = useFormContext();
  const { setEmergencial } = useContext(EmergencialContext);

  const insetosAtacandoBooleanValue = watch("insetosAtacandoBoolean");

  setEmergencial(insetosAtacandoBooleanValue === "sim");

  return (
    <Grid>
      <AlertMessage
        severity="info"
        title='"Os insetos estão atacando as pessoas?"'
      ></AlertMessage>
      <FormInputRadioSimNao control={control} name="insetosAtacandoBoolean" />
    </Grid>
  );
};

export default Emergencial;
