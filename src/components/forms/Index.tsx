import { useFormContext } from "react-hook-form";
import Incidente from "./incidente/Index";
import NaoIncidente from "./nao-incidente/Index";
import FormInputSwitch from "../form-components/FormInputSwitch";
import { Alert, Snackbar } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { EmergencialContext } from "../Start";

const StartForm = () => {
  const { emergencial } = useContext(EmergencialContext);
  const [openEmergencialSnackbar, setopenEmergencialSnackbar] = useState(false);
  const { control, watch } = useFormContext();

  const incidenteBooleanValue = watch("incidenteBoolean");

  useEffect(() => {
    setopenEmergencialSnackbar(emergencial);
  }, [emergencial]);

  return (
    <>
      <Snackbar
        open={openEmergencialSnackbar}
        autoHideDuration={3000}
        onClose={() => setopenEmergencialSnackbar(false)}
      >
        <Alert
          onClose={() => setopenEmergencialSnackbar(false)}
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
