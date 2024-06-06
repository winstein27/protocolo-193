import { useFormContext } from "react-hook-form";
import Incidente from "./incidente/Index";
import NaoIncidente from "./nao-incidente/Index";
import FormInputSwitch from "../form-components/FormInputSwitch";
import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

const StartForm = () => {
  const [emergencial, setEmergencial] = useState(false);
  const { control, watch } = useFormContext();

  const incidenteBooleanValue = watch("incidenteBoolean");
  const confirmaOVACEValue = watch("confirmaOVACE");

  useEffect(() => {
    if (confirmaOVACEValue === "sim") setEmergencial(true);
  }, [confirmaOVACEValue]);

  return (
    <>
      <Snackbar
        open={emergencial}
        autoHideDuration={3000}
        onClose={() => setEmergencial(false)}
      >
        <Alert
          onClose={() => setEmergencial(false)}
          severity="warning"
          variant="filled"
        >
          Ocorrência definida como EMERGENCIAL
        </Alert>
      </Snackbar>
      <FormInputSwitch
        control={control}
        label="Não é ocorrência"
        name="incidenteBoolean"
      />

      {incidenteBooleanValue ? <NaoIncidente /> : <Incidente />}
    </>
  );
};

export default StartForm;
