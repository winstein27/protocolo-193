import { Controller, useFormContext } from "react-hook-form";
import { SwitchField } from "../structure";
import Incidente from "./incidentes/incidente";
import NaoIncidente from "./incidentes/naoIncidente";

const StartForm = () => {
  const { control, watch } = useFormContext();

  const incidenteBooleanValue = watch("incidenteBoolean");

  return (
    <>
      <Controller
        name="incidenteBoolean"
        control={control}
        render={({ field }) => (
          <SwitchField {...field} label="Não é ocorrência" />
        )}
      />

      {incidenteBooleanValue && <NaoIncidente />}
      {!incidenteBooleanValue && <Incidente />}
    </>
  );
};

export default StartForm;
