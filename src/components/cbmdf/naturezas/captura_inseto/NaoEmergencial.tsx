import React from "react";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { EmergencialContext } from "../../../Start";
import { Grid } from "@mui/material";
import AlertMessage from "../../../data-display/messages/AlertMessage";
import FormInputText from "../../../form-components/FormInputText";

const NaoEmergencial = () => {
  const { control, watch } = useFormContext();
  const { setEmergencial } = useContext(EmergencialContext);

  const insetosAtacandoBooleanValue = watch("insetosAtacandoBoolean");

  setEmergencial(insetosAtacandoBooleanValue === "sim");

  return (
    <Grid>
      <AlertMessage
        severity="info"
        title='"Onde estão os insetos?"'
      ></AlertMessage>
      <FormInputText
        control={control}
        label="Local dos insetos"
        name="localInsetos"
      />
      <AlertMessage
        severity="info"
        title='"Consegue dizer a altura aproximada do enxame?"'
      ></AlertMessage>
      <FormInputText
        control={control}
        label="Altura do enxame"
        name="origemText"
      />
    </Grid>
  );
};

export default NaoEmergencial;
