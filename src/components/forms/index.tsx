import { useFormContext } from "react-hook-form";
import Incidente from "./incidentes/incidente";
import NaoIncidente from "./incidentes/naoIncidente";
import FormInputSwitch from "../form-components/FormInputSwitch";

const StartForm = () => {
  const { control, watch } = useFormContext();

  const incidenteBooleanValue = watch("incidenteBoolean");

  return (
    <>
      <FormInputSwitch
        control={control}
        label="Não é ocorrência"
        name="incidenteBoolean"
      />

      {incidenteBooleanValue && <NaoIncidente />}
      {!incidenteBooleanValue && <Incidente />}
    </>
  );
};

export default StartForm;
