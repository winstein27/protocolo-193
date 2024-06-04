import { useFormContext } from "react-hook-form";
import Incidente from "./incidente/Index";
import NaoIncidente from "./nao-incidente/Index";
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

      {incidenteBooleanValue ? <NaoIncidente /> : <Incidente />}
    </>
  );
};

export default StartForm;
